import React , { Component } from 'react'

import {Link} from 'react-router'

class Main extends Component{
    render(){
        return(
            <div>
                <h1>
                    <Link to="/"><span><img src="https://images.seeklogo.net/2016/06/Instagram-logo.png" height="100"/></span>  <span>Instagram </span></Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )

    }
}

export default Main
