import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  useEffect(()=>{
    const auth=localStorage.getItem('user')
if(auth){
  
}
  },[])
  const handlelogin = async () => {
    console.warn(email, password)
    let result = await fetch('http://127.0.0.1:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json()
    console.warn(result)
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user))
      
      localStorage.setItem('token', JSON.stringify(result.auth))
      navigate('/')
    } else {
      alert('Please emter correct details...')
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"

          value={email}
          onChange={(e) => setEmail(e.target.value)}


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
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">password</InputGroup.Text>
      </InputGroup>
      <Button variant="danger" className='btnn'
        onClick={handlelogin}
      >Login</Button>{' '}
    </div>
  )
}
export default Login;