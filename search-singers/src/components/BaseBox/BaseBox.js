import React from 'react';

import './BaseBox.css';

export type BaseBoxProp = {
    title: string;
    image: string;
    percent: string;
    count: number;
    color: string;
  } & React.InputHTMLAttributes<HTMLDivElement>;

class BaseBox extends React.Component {

    render() {
       
    }
}

export default BaseBox;