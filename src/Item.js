import React from 'react';


export default React.createClass({
    render() {
        console.info('Item.render');
        return (<li>{this.props.children}</li>)
    }
});

