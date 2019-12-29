import React, { Component } from "react";
import './Error.css';

class Error extends Component {
    render() {
        let query = this.props.query;
        query = query.toUpperCase();
        return (
            <div className="Error">
                <p className="Error__text">No ex-dividend date found for ticker symbol <span className="Error__query">{query}</span></p>
            </div>
        );
    }
}

export default Error;
