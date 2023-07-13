import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const UpdateProduct= ()=>{
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    
    const [company,setComany]=useState('')
    const params=useParams()
    const navigate=useNavigate()


    useEffect(()=>{
        getProductDetails()
        
    })

    const getProductDetails=async ()=>{
        console.warn(params)
        let result= await fetch(`http://127.0.0.1:5000/product/${params.id}`)
        result=await result.json()
        console.warn(result)
         
        
    

    }


    const updateProduct=async ()=>{
        console.warn(name,price,company)
        let result=await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,company}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json()
        console.warn(result)
        navigate('/')

    }
    return(
        <div>
            <h1>UpdateProduct Page</h1>

            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Update Product Name"
          aria-label="Product  name"
          aria-describedby="basic-addon2"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <InputGroup.Text id="basic-addon2">Identity</InputGroup.Text>
      </InputGroup>

 
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Update Product Price"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={price}
          onChange={(e)=>{setPrice(e.target.value)}}
        />
        <InputGroup.Text id="basic-addon2">Price</InputGroup.Text>
      </InputGroup>
      
      
      
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Update Product Company"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={company}
          onChange={(e)=>{setComany(e.target.value)}}
        />
        <InputGroup.Text id="basic-addon2">Company</InputGroup.Text>
      </InputGroup>
      
      <Button variant="dark" className='btnn' onClick={updateProduct}>Update Product</Button>
        </div>
    )
}
export default UpdateProduct