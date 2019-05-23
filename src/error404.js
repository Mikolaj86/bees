import React from 'react';
import beehive from './images/beehive.png';
import './error404.css';

function Error404() {
    return (
        <div className="error404">
            <header className="error-header">
                <h1>COŚ NIE BZYKA... :(</h1>
                <img src={beehive} className="beehive_error" alt="404 Error in beehive :(" width="500px "/>
                <h2>Error 404 - Page not found</h2>
                <a
                    className="error-link"
                    href="http://www.zaprospszczoly.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Wróć do strony głównej
                </a>
            </header>
        </div>
    );
}

export default Error404;