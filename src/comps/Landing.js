import React, {Component} from 'react'
import triangle from '../GroupOfTriangles.svg';
import {Link} from 'react-router-dom'
import About from './About'
import triangle1 from '../Triangle.svg'

export default class Landing extends Component{
    render(){
        return(
    <div className="Landing">
        <div className="App-header">
            <img src={triangle} className="App-logo" alt="logo" />
            <div className='discover-box'><p className="discover">DISCOVER</p></div>
            {/* <img className="movingTriangles"src="triangle1" alt="triangle"/> */}
        </div>




        <div className="Nav">
                <Link to="/newestRead" id='triangle'></Link>
                <Link to='/popularReads' id='triangleTwo'></Link>
                <Link to='/about' id='triangleThree'></Link>
            </div>

    </div>

        )
    }
}