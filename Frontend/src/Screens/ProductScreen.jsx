import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { Row, Col, Card, Button, ListGroup, Image, FormControl } from 'react-bootstrap'
import Rating from '../Components/Rating'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProoductDetails, fetchProduct } from '../features/ProductDetailsSlice'
import { useState } from 'react'



export default function ProductScreen() {
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()

  const { product, status, error } = useSelector(selectProoductDetails)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [id, dispatch])

  function addToCartHandler() {
   navigate(`/cart/${id}/?qty=${quantity}`)
  }


  return (
    <>
      <Link to='/' className='btn btn-light rounded my-3'>Go Back</Link>
      {
        status === 'loading' ? <Loader />
          : status === 'failed' ? <Message variant='danger'>{error}</Message>
            : <Row>
              <Col md={6} >
                <Image src={product.image} alt={product.name} fluid />
              </Col>

              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                  <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={3}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:
                        </Col>
                        <Col>
                          <strong>{product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:
                        </Col>
                        <Col>
                          {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col> Qty</Col>
                          <Col>
                            <FormControl as='select' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                              {
                                [...Array(product.countInStock).keys()].map(x => (<option key={x + 1} value={x + 1}> {x + 1} </option>))
                              }
                            </FormControl>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                      <Button
                        className='btn-block rounded'
                        type='button'
                        disabled={!product.countInStock === 0}
                        onClick={addToCartHandler}
                      >Add To Cart</Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>}

    </>
  )
}
