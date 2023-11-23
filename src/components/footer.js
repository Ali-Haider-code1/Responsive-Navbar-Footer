import React from 'react';
import { faTwitter, faInstagram,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-4">
                    <p className='fw-bold text-decoration-none fsection'>Support</p>
                    <p>Help Center</p>
                    <p>AirCover</p>
                    <p>Anit-descrimination</p>
                    <p>Disability Support</p>
                    <p>Cancellation Options</p>
                    <p>Report Neighborhood concern</p>
                </div>
                <div className="col-lg-4">
                    <p className='fw-bold text-decoration-none fsection'>Hosting</p>
                    <p>Airbnb your home</p>
                    <p>AirCover for Hosts</p>
                    <p>Hosting resources</p>
                    <p>Community forum</p>
                    <p>Hosting responsibly</p>
                    <p>Airbnb-friendly apartments</p>

                </div>
                <div className="col-lg-4">
                    <p className='fw-bold text-decoration-none fsection'>Airbnb</p>
                    <p>Newsroom</p>
                    <p>New features</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Gift cards</p>
                    <p>Airbnb.org emergency stays</p>
                </div>
            </div>
            <hr />
                <div className="additional-div">
                    <div className='col-lg-6 copyrightsection'>
                        <ol className='copyrightline'>
                            <span>© 2023 Airbnb, Inc.</span>
                            <li>. Terms</li>
                            <li>. Sitemap</li>
                            <li>. Privacy</li>
                            <li>. Your Privacy Choices</li>
                        </ol>
                    </div>
                    <div className="col-lg-2 social-icons">
                        <i>  <FontAwesomeIcon icon={faFacebookF} className="icon" /></i>
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                        <FontAwesomeIcon icon={faInstagram} className="icon" />

                    </div>
                </div>

        </div>
    );
}

export default Footer;
