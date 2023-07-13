import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://127.0.0.1:5000/products',{
            headers:{
                Authorization:JSON.parse(localStorage.getItem('token'))
            }
    })
        result = await result.json()
        setProducts(result)
    }
    const deleteProduct = async (id) => {

        console.warn(id)
        let result = await fetch(`http://127.0.0.1:5000/product/${id}`, {
            method: 'delete',
        })
        result = await result.json()
        if (result) {
            alert('Record is deleted')
            getProducts(result)
        }
    }

    const searchHandle = async (event) => {
        let key = event.target.value
        if (key) {
            let result = await fetch(`http://127.0.0.1:5000/search/${key}`)
            result = await result.json()
            if (result) {
                setProducts(result)
            }else{
                getProducts()
            }
        }

    }

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <InputGroup className="mb-4">
                <InputGroup.Text>Name</InputGroup.Text>
                <InputGroup.Text>Price</InputGroup.Text>
                <InputGroup.Text>Company</InputGroup.Text>
                <Form.Control placeholder="search prodcut" aria-label="Dollar amount (with dot and two decimal places)"
                    onChange={searchHandle}
                />
            </InputGroup>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Operation</li>

            </ul>
            {
                products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.company}</li>
                        <li>
                            <Button variant="secondary" className="btn-secondary"
                                onClick={() => deleteProduct(item._id)}
                            >Delete</Button>{' '}
                            <Link to={'/update/' + item._id}>Update</Link>
                        </li>

                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}


export default ProductList