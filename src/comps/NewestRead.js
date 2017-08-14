import React, { Component } from 'react';
import {timelineReads} from '../utils/api'
import {Link} from 'react-router-dom';




export default class NewestRead extends Component{

    constructor(){
        super();

        this.state={
            info: []
        }
    }



    componentDidMount(){
        timelineReads().then(response=>{
            this.setState({
                info: response.results
            })
            console.log(response)
        })
    }



    render(){
        return(
            
            <div className="NewestRead">
                <Link to='/' className>Home</Link>
            <h1 className="Header">Movie Ratings</h1>
            {this.state.info.map((elem)=>{
                return(
                    <Link to={elem.link.url}>
                <div className="Movies">
                
                    <p className="movieRatingsReview" key={elem.url}>{elem.headline}</p>
                    <img className="img" src={elem.multimedia.src} />
                    <p className="yup"> {elem.summary_short} </p>
                
                </div>
                </Link>
                )
            })}




            </div>
        )
    }
}