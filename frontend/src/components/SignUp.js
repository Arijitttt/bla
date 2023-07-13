import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp(){
    const[name, setName]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })

    const collectData=async()=>{
        console.warn(name,email,password)
        let result=await fetch('http://127.0.0.1:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
        result=await result.json()
        console.warn(result)
        localStorage.setItem('user',JSON.stringify(result.result))
        localStorage.setItem('token',JSON.stringify(result.auth))
        if(result){
          navigate('/')
        }
    }
    return(
        <div>
            <InputGroup className="mb-3"
            
            >
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Enter name"
          aria-label="name"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </InputGroup>
           

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's password"
          aria-label="Recipient's password"
          aria-describedby="basic-addon2"
          type='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">password</InputGroup.Text>
      </InputGroup>
      <Button variant="danger" className='btnn'
      onClick={collectData}
      >Sign Up</Button>{' '}
        </div>
    )
}
export default SignUp;