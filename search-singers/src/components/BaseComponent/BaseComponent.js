import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';
import MainComponent from '../MainComponent/MainComponent';

class BaseComponent extends React.Component {
    render() {
        return(
            <>
                <NavigationBar/>
                <MainComponent/>
            </>
        );
    }
}

export default BaseComponent;