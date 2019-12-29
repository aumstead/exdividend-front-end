import React, { Component } from "react";

import "./DisplayExDiv.css";

class DisplayExDiv extends Component {
    render() {
        let query = this.props.query;
        const exDivDate = this.props.exDivDate;

        query = query.toUpperCase();
        return (
            <div className="DisplayExDiv">
                {exDivDate ? (
                    <p className="result__intro">
                        Most recent ex-dividend date for <span className="result__query">{query}</span>:
                    </p>
                ) : (
                    <p></p>
                )}

                <p className="result__exDivDate">{exDivDate}</p>
            </div>
        );
    }
}

export default DisplayExDiv;
