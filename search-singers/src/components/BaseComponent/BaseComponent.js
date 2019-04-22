import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';
import MainComponent from '../MainComponent/MainComponent';

class BaseComponent extends React.Component {
    req = '';

    render() {
        return(
            <>
                <NavigationBar req/>
                <MainComponent/>
            </>
        );
    }
}

export default BaseComponent;