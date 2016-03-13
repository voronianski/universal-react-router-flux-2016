import React from 'react';

class AppHandler extends React.Component {
    render() {
        return (
            <div className="center">
                {this.props.children}
            </div>
        );
    }
}

export default AppHandler;
