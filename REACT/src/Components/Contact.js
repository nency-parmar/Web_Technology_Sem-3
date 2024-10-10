import React from "react";
import { Link } from "react-router-dom";
function Contact()
{
    return(
        <>
            <h1>Contact Us</h1>
            <Link to="/help">How Can I Help You?</Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="call">
                <h5>Phone Number</h5>
                <i class="bi bi-telephone"></i>
                1234567890
            </div>
            <div class="mail">
                <h5>E-Mail</h5>
                <i class="bi bi-envelope"></i>
                asdf123@asdf.com
            </div>
            <div class="location">
                <h5>Locate us at</h5>
                <i class="bi bi-geo-alt"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing.B/H sadWfedsa....
            </div>

        </>
    );
}

export default Contact;