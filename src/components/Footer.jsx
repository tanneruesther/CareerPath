import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Career Path Tracker . All Rights Reserved.</p>
                    <div className="footer-links">
                    <a href="#">Privacy Policy</a> | 
                        <a href="#">Terms of Service</a> | 
                     <a href="#">Contact</a>
                    </div>
            </div>
       </footer>

        </>
        
    );
};
export default Footer;