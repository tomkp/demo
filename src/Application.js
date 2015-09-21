import React from 'react';
import Items from './Items';


const Application = React.createClass({
    render() {
        console.info('Application.render');
        return (
            <div className="column">
                <div className="fixed header">
                    <div className="row">
                        <div className="fixed logo">Whatevs</div>
                        <div className="flex"></div>
                        <div className="fixed search"><input/></div>
                    </div>
                </div>
                <div className="flex">
                    <Items list={[1,2,3,4,5, 6]} />
                </div>
            </div>
        )
    }
});


React.render(<Application />, document.body);