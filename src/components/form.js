import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import "./form.scss"

export default class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            data: null,
            validationData: {}
        }
    }

    handleOnChange = (id, value) => {

        this.setState({
            ...this.state, validationData: {
                ...this.state.validationData, [id]: value
            }
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ ...this.state, validated: true }, () => {
            this.props.handleSubmitClick(this.state.validationData)
        })
    };


    updateValidationData = () => {
        const { data } = this.state;
        let tempValidationData = {}
        data.items.map(item => (
            tempValidationData[item.id] = item.value ? item.value : ""
        ))
        this.setState({ ...this.state, validationData: tempValidationData })
    }

    componentDidMount = () => {
        this.setState({ ...this.state, data: this.props.data }, () => {
            this.updateValidationData()
        })

    }

    render() {
        const { validated, data, validationData } = this.state;
        return (
            <>
                {data === null ? null :
                    <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                        <Row>
                            {data.items.map(item => (
                                <Form.Group key={item.id} as={Col} md={data.col} >
                                    {item.type === "button" ? null :
                                        <Form.Label>{item.label}</Form.Label>}
                                    {item.type === "textarea" ?
                                        <Form.Control
                                            id={item.id}
                                            as="textarea"
                                            rows={item.rows}
                                            placeholder={item.placeholder ? item.placeholder : ""}
                                            value={validationData[item.id] ? validationData[item.id].value : ""}
                                            disabled={item.disabled ? item.disabled : false}
                                            onChange={(event) => this.handleOnChange(item.id, event.target.value)}
                                        /> :
                                        item.type === "button" ?
                                            <Button
                                                id={item.id}
                                                type={item.buttonType}
                                                disabled={item.disabled ? item.disabled : false}
                                            >
                                                {item.label}
                                            </Button> :
                                            <Form.Control
                                                id={item.id}
                                                required={item.required ? item.required : false}
                                                type={item.type}
                                                placeholder={item.placeholder ? item.placeholder : ""}
                                                value={validationData[item.id] ? validationData[item.id].value : ""}
                                                disabled={item.disabled ? item.disabled : false}
                                                onChange={(event) => this.handleOnChange(item.id, event.target.value)}

                                            />}
                                    <Form.Control.Feedback type="invalid">{item.feedback ? item.feedback : "This field is required."}</Form.Control.Feedback>
                                </Form.Group>
                            ))}
                        </Row>
                    </Form>}
            </>

        )
    }
}
