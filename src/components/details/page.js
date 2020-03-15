import React, { Component, Fragment } from 'react';
import { Paper, Typography, CssBaseline, CircularProgress, Button } from '@material-ui/core';
import AppBar from '../appBar/index';
import './styles.css';

class Page extends Component {

    render() {
        const { currentItem, goTo } = this.props;
        return (
            <div>
                <CssBaseline />
                <AppBar />
                <div className="deatils-page">
                    <Paper 
                        elevation={1} 
                        className="paper-container"
                    >
                        {currentItem ?
                            <Fragment>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {currentItem.title}
                                </Typography>
                                <div 
                                    className="item-image"
                                    style={{backgroundImage: `url(${currentItem.image})`,}}
                                >
                                </div>
                                <Typography gutterBottom component="h2" className="content">
                                    {currentItem.content}
                                </Typography>
                            </Fragment>
                        :
                            <CircularProgress className="item-loader"/>
                        }
                        <Button onClick={()=>goTo('/results')}>Back</Button>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default Page;