import React from "react";
import "./servicsFooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
function ServicsFooter() {

    return (
        <div className="container">
            <div className="servicsFooter">
                <div className="footerLogo">
                    <h2><span>Book</span>Library<span>.</span> </h2>
                    <p><span>Discover </span>Read <span>Explore</span></p>
                    <div className="footerText">
                        <p>Empowering your tech journey with reliable resources and cutting-edge solutions</p>

                    </div>
                    <div className="footerList">
                        <ul>
                            <li>
                                Join Our Team
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Contact Us
                            </li>
                            <li>
                                FAQ
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="contactAndGmail">
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        cheenashaikh934@gmail.com
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} />
                        +954-7643280-33
                    </p>

                </div>
            </div>
        </div>
    );
}
export default ServicsFooter;