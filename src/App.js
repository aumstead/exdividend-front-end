import React, { Component } from "react";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Headline from "./components/Headline";
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import DisplayExDiv from "./components/DisplayExDiv";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exDivDate: "",
            query: "",
            isLoading: false,
            isError: false
        };
        this.passDataUp = this.passDataUp.bind(this);
        this.handleLoading = this.handleLoading.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    passDataUp(data, query) {
        this.setState({
            exDivDate: data,
            query
        });
    }
    handleError(isError, query) {
        this.setState({
            isError,
            query
        });
    }
    handleLoading(isLoading) {
        this.setState({
            isLoading
        });
    }
    render() {
        const display = () => {
            if (this.state.isLoading) {
                return <Spinner />;
            } else if (this.state.isError) {
                return <Error query={this.state.query} />;
            } else {
                return (
                    <DisplayExDiv
                        query={this.state.query}
                        exDivDate={this.state.exDivDate}
                    />
                );
            }
        };
        return (
            <div className="container">
                <NavBar />
                <Headline />
                <Search
                    passDataUp={this.passDataUp}
                    handleLoading={this.handleLoading}
                    handleError={this.handleError}
                />
                {display()}
                <Footer />
            </div>
        );
    }
}

export default App;
