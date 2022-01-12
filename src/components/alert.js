import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class alert extends Component {
    render() {
        const { variant, content, onClose } = this.props;
        return (
            <Alert variant={variant} onClose={() => onClose(null)} dismissible>
                {content}
            </Alert>
        )
    }
}
