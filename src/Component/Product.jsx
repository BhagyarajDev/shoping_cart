import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Addtocart } from '../CartSlice'
import './Product.css'

const Product = () => {

    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                console.log(response.data)
                setProducts(response.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <Container>
            <Row className="product-grid">
                {products.map(product => (
                    <Col key={product.id} md={4} className="d-flex align-items-stretch">
                        <Card style={{ width: '100%', margin: '1rem' }} className="shadow-sm">
                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />
                            <Card.Body>
                                <Card.Title className="product-title">{product.title}</Card.Title>
                                <Card.Text className="product-description">
                                    {product.description.slice(0, 100)}...
                                </Card.Text>
                                <div className='d-flex gap-3 p-2 justify-content-between'>
                                    <Button variant="outline-secondary" disabled>
                                        ${product.price}
                                    </Button>
                                    <Button variant="primary" onClick={() => dispatch(Addtocart(product))}>
                                        Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Product
