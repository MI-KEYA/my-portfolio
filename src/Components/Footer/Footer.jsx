import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-100 text-gray-400  mt-10 p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Owner</p>
            </aside>
        </footer>
    );
};

export default Footer;