import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findCurrentItem from '../../redux/actions/findCurrentItem';
import Page from './page';

class Details extends Component {

    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this);
    }

    componentDidMount(){
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    }
    
    goTo(path){
        this.props.history.push(path)
    }

    render() {
        const { currentItem } = this.props;
        return (
            <Page 
                currentItem={currentItem}
                goTo={ this.goTo}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentItem: state.currentItem
    }
}

const mapDispatchToProps = {
    findCurrentItem,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
);