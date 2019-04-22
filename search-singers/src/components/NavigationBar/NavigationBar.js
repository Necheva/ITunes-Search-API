import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return(
            <div className="navBlock">
                <img src={require('./search-solid.svg')} width={17} height={17} className="navImage"/>
                <input placeholder="Type in to Search..." className="input-title" />

                <div className="navContainer">
                    <ul>
                        <Link to="/all_songs">All Songs</Link>
                    </ul>
                </div>
                <div className="container">
                    <ul>
                        <Link to="/albums">Albums</Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavigationBar;