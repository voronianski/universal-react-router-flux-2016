import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

class Header extends Component {
    render() {
        return (
            <div className="clearfix mb2 white bg-black">
                <div className="left">
                    <Link to="/dashboard" className="btn py2 m0">Home</Link>
                    <Link to="/about" className="btn py2 m0">About</Link>
                    <Link to="/notfound" className="btn button-narrow py2 m0">Not Found</Link>
                </div>
                <div className="right">
                    <Link to="/logout" className="btn py2 m0">Logout</Link>
                </div>
            </div>
        );
    }
}

export default Header;
