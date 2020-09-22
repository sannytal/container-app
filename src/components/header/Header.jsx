import React from "react";

export default function Header() {

    return (
        <div className="container-header is-hidden-mobile py-3">
            <div className="container is-hidden-mobile">
                <div className="d-flex justify-content-between align-items-center p-0">
                    <img src={"https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"} alt="spinwheel" />
                </div>
            </div>
        </div>
    );
}