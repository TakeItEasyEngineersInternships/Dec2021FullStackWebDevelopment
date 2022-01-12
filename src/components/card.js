import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import "./card.scss"
export default class card extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {children}
                </Card.Body>
            </Card>
        )
    }
}
