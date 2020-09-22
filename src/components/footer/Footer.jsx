import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="container-footer is-hidden-mobile py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <ul className="p-0 m-0">
                    <li>
                        <Link to="#">about us</Link>
                    </li>
                    <li>
                        <Link to="#">contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}