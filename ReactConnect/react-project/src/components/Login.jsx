import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../axios'
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [enterId, setEnterId] = useState();
    const [enterPw, setEnterPw] = useState();

    // const nav = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log("handle login function", enterId, enterPw)
        axios
        .post('/handleLogin', {id : enterId, pw : enterPw})
        .then(res => {
            console.log(res.data)
            
            if (res.data.result == "success"){
                console.log("로그인 성공")
                alert("로그인 성공!")
                window.location.href="/"
            }
            else {
                console.log("로그인 실패")
                alert("로그인 실패!")
                // nav('/handleLogin')
            }
        })
    }


  return (
    <div className='container'>
        <h4>로그인</h4>
        <div className='formBox'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicID">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" onChange={(e)=>{setEnterId(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setEnterPw(e.target.value)}}/>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                        로그인
                    </Button>
                </div>
            </Form>
        </div>

    </div>
  )
}

export default Login