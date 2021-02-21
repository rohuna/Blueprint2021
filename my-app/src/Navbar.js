import React, { Component } from 'react';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav>
                <h1>Project Name</h1>
                <button className = "btn btn-primary">Report a missing person</button>
            </nav>
        )

    }
}

export default Navbar;