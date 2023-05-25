import React from "react";

const Header = () => {
    return (
        <div className="container">
            <div className="header-container">
                <div className="title-container">
                    <h1 className='title-header'>WsydBasics</h1>
                </div>
                <div className="navigation-container">
                    <a>Home</a>
                    <a>WholeSale</a>
                    <a>Sales Tool</a>
                    <a>Contacts</a>
                </div>
                <div className="login">
                <a>Login</a>
                <a>Wishlist</a>
                </div>
            </div>
        </div>

    );
}
export default Header;