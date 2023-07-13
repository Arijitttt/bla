import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const AddProduct= ()=>{
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [Category,setCategory]=useState('')
    const [company,setComany]=useState('')
    const [error,setError]=useState(false)


    const addProduct=async ()=>{
        
if(!name || !price || !Category || !company){
    setError(true)
    return false;
}

        console.warn(name,price,Category,company)
        const userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('http://127.0.0.1:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,Category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json()
        console.warn(result)
      alert('Product is added')

    }
    return(
        <div>
            <h1>AddProduct Page</h1>

            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Product Name"
          aria-label="Product  name"
          aria-describedby="basic-addon2"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <InputGroup.Text id="basic-addon2">Identity</InputGroup.Text>
      </InputGroup>

 {error && !name && <span className='invalid-inp'>Enter valid Name</span>}

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Product Price"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={price}
          onChange={(e)=>{setPrice(e.target.value)}}
        />
        <InputGroup.Text id="basic-addon2">Price</InputGroup.Text>
      </InputGroup>
      {error && !price && <span className='invalid-inp'>Enter valid price</span>}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Product Category"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={Category}
          onChange={(e)=>{setCategory(e.target.value)}}
        />
        <InputGroup.Text id="basic-addon2">Category</InputGroup.Text>
      </InputGroup>
      {error && !Category && <span className='invalid-inp'>Enter valid Category</span>}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Product Company"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={company}
          onChange={(e)=>{setComany(e.target.value)}}
        />
        <InputGroup.Text id="basic-addon2">Company</InputGroup.Text>
      </InputGroup>
      {error && !company && <span className='invalid-inp'>Enter valid Company</span>}
      <Button variant="dark" className='btnn' onClick={addProduct}>Add Product</Button>
        </div>
    )
}
export default AddProduct