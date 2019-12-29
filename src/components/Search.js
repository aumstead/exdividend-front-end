import React, { Component } from "react";

import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
        this.handleTyping = this.handleTyping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLabelClick = this.handleLabelClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleTyping(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    async handleSubmit(e) {
        e.preventDefault();
        // clear isError state
        this.props.handleError(false);
        // change loading state to show spinner
        this.props.handleLoading(true);

        await this.getExDivDate().then(data => {
            if (data !== 'error') {
                // pass data up, call the prop callback function.
                this.props.passDataUp(data, this.state.query);
            } else {
                this.props.handleError(true, this.state.query);
            }
            
            // hide spinner
            this.props.handleLoading(false);
        });
        this.setState({
            query: ""
        });
    }
    handleLabelClick() {
        document.getElementById("Search__input").focus();
    }
    handleFocus() {
        this.labelBottom.style.transform = "translateY(4.5rem)";
        this.labelBottom.style.color = "var(--color-teal)";
    }
    handleBlur() {
        if (!this.state.query) {
        this.labelBottom.style.transform = "translateY(0)";
        this.labelBottom.style.color = "var(--color-light-grey)";
        }
    }
    async getExDivDate() {
        const response = await fetch(
            `https://ex-dividend-back-end.herokuapp.com/search/${this.state.query}`
        );
        const responseData = response.json();
        return responseData;
    }
    
    render() {
        return (
            <div className="Search">
                <form onSubmit={this.handleSubmit} className="Search__form">
                    <label
                        htmlFor="query"
                        className="Search__label Search__label--top"
                    >
                        Enter a ticker symbol:
                    </label>
                    <input
                        name="query"
                        onChange={this.handleTyping}
                        value={this.state.query}
                        className="Search__input"
                        type="text"
                        autoComplete="off"
                        id="Search__input"
                        onFocus={this.handleFocus}
                        ref={input => {
                            this.searchInput = input;
                        }}
                        onBlur={this.handleBlur}
                    />
                    <label
                        htmlFor="query"
                        className="Search__label Search__label--bottom"
                        onClick={this.handleLabelClick}
                        ref={label => {
                            this.labelBottom = label;
                        }}
                    >
                        e.g. MSFT, JNJ, MMM
                    </label>
                    <button className="Search__btn">
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;
