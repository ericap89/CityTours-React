import React, { Component } from 'react';
import './footer.scss';
import logo from '../../logo.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={logo} alt="city tours co"/>
            </div>
        );
    }
}

export default Footer;