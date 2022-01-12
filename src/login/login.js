import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import { useNavigate } from "react-router-dom";
import Form from '../components/form';
import Card from '../components/card';
import LoginItems from './loginItems.json';
import Alert from '../components/alert';
import { toast } from 'react-toastify';
import './login.scss'

export default function Login() {
    let navigate = useNavigate();
    const [formValidationErrors, setFormValidationErrors] = useState(null);

    const handleLoginClick = (validatedData) => {
        setFormValidationErrors(null)
        const tempData = {
            username: validatedData.username,
            password: validatedData.password
        }
        const signInData = JSON.parse(localStorage.getItem('signInData'))
        if (signInData === null) {
            setFormValidationErrors("Username or password does not exists!!!")
        } else {
            const result = signInData.filter(data => data.username === validatedData.username && data.password === validatedData.password)
            if (result.length === 0) {
                setFormValidationErrors("Username or password does not exists!!!")
            } else {
                signInData.push(tempData)
                localStorage.setItem(
                    'loginUserData',
                    validatedData.username)
                toast("Login In Successfull")
                navigate('/dashboard');
                window.location.reload()
            }
        }

    }

    return (
        <DocumentTitle title='Login'>
            <div className='login'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-12'>

                        <Card title="Login">
                            {formValidationErrors === null ? null :
                                <Alert variant="danger" content={formValidationErrors} onClose={setFormValidationErrors} />
                            }
                            <Form data={LoginItems} handleSubmitClick={handleLoginClick} />
                            <div className='signup'><a href='/signup'>Click here</a> to add new profile</div>
                        </Card>
                    </div>
                </div>
            </div>
        </DocumentTitle>
    )
}
