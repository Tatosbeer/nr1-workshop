import React, { Fragment } from 'react';

export default class MyNerdlet extends React.Component {

    constructor(props) {
        super(props);
        console.debug(props); //eslint-disable-line
        this.state = {
            entityName: "Portal"
        };
    }

    render() {
        return (<h1>Hello World lab5!</h1>);
    }
}
