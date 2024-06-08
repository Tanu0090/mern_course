

import React from 'react';
import './footer.css';  // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Image-Gnereator. All Rights Reserved.</p>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/history">History</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
