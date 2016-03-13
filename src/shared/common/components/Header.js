import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

class Header extends Component {
    render() {
        return (
            <div className="clearfix mb2 white bg-black">
                <div className="right">
                    <Link to="/logout" className="btn py2 m0">Logout</Link>
                </div>
            </div>
        );
    }
}

export default Header;
