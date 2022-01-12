import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import Form from '../components/form';
import Card from '../components/card';
import SignupItems from './signupItems.json';
import Alert from '../components/alert';
import { useNavigate } from "react-router-dom";
import './signup.scss'
import { toast } from 'react-toastify';

export default function Signup() {

    let navigate = useNavigate();
    const [formValidationErrors, setFormValidationErrors] = useState(null);


    const handlesignupClick = (validatedData) => {
        setFormValidationErrors(null)
        const tempData = {
            username: validatedData.username,
            password: validatedData.password
        }
        const signInData = JSON.parse(localStorage.getItem('signInData'))
        if (signInData === null) {
            localStorage.setItem(
                'signInData',
                JSON.stringify(
                    [tempData]))
            toast("Sign In Successfull")
            navigate('/login');
        } else {
            const result = signInData.filter(data => data.username === validatedData.username)
            if (result.length > 0) {
                setFormValidationErrors("Username already exists!!!")
            } else {
                signInData.push(tempData)
                localStorage.setItem(
                    'signInData',
                    JSON.stringify(
                        signInData))
                toast("Sign In Successfull")
                navigate('/login');

            }

        }
    }
    return (
        <DocumentTitle title='signup'>
            <div className='signup'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-12'>
                        <Card title="Sign In">
                            {formValidationErrors === null ? null :
                                <Alert variant="danger" content={formValidationErrors} onClose={setFormValidationErrors} />
                            }
                            <Form data={SignupItems} handleSubmitClick={handlesignupClick} />
                            <div className='signup'><a href='/login'>Click here</a> to login</div>
                        </Card>
                    </div>
                </div>
            </div>
        </DocumentTitle>
    )
}

