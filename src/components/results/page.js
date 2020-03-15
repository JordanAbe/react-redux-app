import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar'
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import './styles.css'

function Page(props) {

    const  { results, goTo } = props;
    const isEmpty = results.length === 0;

    return (
        <div>
            <CssBaseline />
            <AppBar />
            <div className="results-page">
                { isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                    There are no results
                    </Typography>
                :
                    results.map(item => 
                        <div 
                            key={item.id} 
                            className="card-container">
                            <Card
                                className="card"
                                onClick={()=> goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Page;