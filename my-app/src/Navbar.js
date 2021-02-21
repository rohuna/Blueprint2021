import React, { Component } from 'react';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='nav row'>
                <h1><a href='https://google.com' className='home-link col-xl-6'>Find em</a></h1>
                <ul className='nav-links col-xl-6'>
                    <li>
                        <h3>hello</h3>
                    </li>
                    <li>
                        <button className="btn btn-primary nav-button">Help find a missing person</button>
                    </li>
                </ul>
            </div>
        )

    }
}

export default Navbar;