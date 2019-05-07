import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../imgs/logo.svg'


class Header extends Component {

    state = {
        isVisible: ""
    }

    //toggle nav visibility
    toggleNav = () => {
        
        if (this.state.isVisible === "") {
            this.setState({ isVisible:"nav__is-active"})
        } else {
            this.setState({ isVisible: "" })
        }
    }

    render() {
        console.log(this.state.isVisible)

        const {isVisible} = this.state;

        return(
            <div className="header fixed-top">
                <header>   
                    <nav className="nav navbar navbar-expand-lg">
                        <div className="d-flex flex-grow-1">
                            <span className="w-100 d-md-none d-block"></span>
                                 <div className="nav__logo"><a href="/"><img src={logo} alt={logo} /></a></div>
                                      
                            <div className="w-100 text-right">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <div className={`collapse navbar-collapse flex-grow-1 text-right ${isVisible}`} id="myNavbar">
                            <ul className="navbar-nav ml-auto flex-row justify-content-center text-center">
                                <li className="nav-item col-md-3 col-2">
                                    <Link className="nav-link active" to="/"> Home</Link>
                                </li>
                                <li className="nav-item col-md-3 col-2">
                                    <Link className="nav-link active" to="/comics"> Comics</Link>
                                </li>
                                <li className="nav-item col-md-3 col-2">
                                    <Link className="nav-link active" to="/characters"> Characters</Link>
                                </li>
                            </ul>
                        </div>

                        {/*  Mobile Nav */}
                        <button onClick={this.toggleNav} className="hamburger d-lg-none d-m-block hamburger--minus mr-5" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>


                    </nav>
                </header>
            </div>
        )
    }

}

export default Header;
