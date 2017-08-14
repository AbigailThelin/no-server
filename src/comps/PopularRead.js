import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {popReads} from '../utils/api'

export default class PopularRead extends Component{

    constructor(){
        super();

        this.state={
            info: []
        }
    }





    componentDidMount(){
        popReads().then(response=>{
            this.setState({
                info: response.results
            })
            console.log(response.results)
        })
    }


    render(){
        return(
            <div className="popularRead">
                <Link to='/'>Home</Link>
                <p className="Header">Popular Articles</p>
                {this.state.info.map((elem, ind, arr)=>{
                    return (

                        <Link className="link" to={elem.url}>
                    <div className="ahh">
                        <p className="article" key={elem.id} >{elem.title}</p>
                        <p className="description">{elem.abstract}</p>
                           {/* {elem.media ? <img src={elem.media[0]['meta-metadata'][0].url}/> : null }   */}
                          {console.log(elem )}
                    </div>
                    </Link>
                    )

                })}
            </div>
        )
    }
}

// ["0"].media["0"]["media-metadata"]["0"].url