import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || React Multipurpose Template </title>
                    <meta name="description" content="Todd Malone's Profile" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
