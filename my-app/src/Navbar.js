import React, { Component } from 'react';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='nav'>
                <h1><a href='https://google.com' className='home-link'>Find em</a></h1>
                <button className="btn btn-primary nav-button">Help find a missing person</button>
            </div>
        )

    }
}

export default Navbar;