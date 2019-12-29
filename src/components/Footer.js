import React, { Component } from 'react';

import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/* <p className="footer__info-text">If you buy a stock on the ex-dividend date or after, you will NOT collect the dividend. <br></br>If you sell a stock on the ex-dividend date, you will get the dividend.</p> */}
                <div className="footer__sub-text">
                    <p>&copy; 2020 exdividend.net</p>
                    <p>Powered by IEX Cloud</p>
                    <p>Contact: admin@exdividend.net</p>
                </div>
                
            </div>
        )
    }
}

export default Footer;