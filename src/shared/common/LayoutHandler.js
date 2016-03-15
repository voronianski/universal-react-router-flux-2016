import React, { Component } from 'react';
import Header from './components/Header';

class LayoutHandler extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="py4">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default LayoutHandler;
