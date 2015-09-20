import React from 'react';
import Item from './Item';


export default React.createClass({
    render() {
        console.info('Items.render');
        let index = 0;
        const children = this.props.list.map((entry) => {
            return (<Item key={index++}>{entry}</Item>);
        });
        return (
            <ul>{children}</ul>
        );
    }
});

