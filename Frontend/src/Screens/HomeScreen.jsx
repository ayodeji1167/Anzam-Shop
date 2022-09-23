import React from 'react'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import { selectAllProducts, fetchProductsList } from '../features/productListSlice'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'

export default function HomeScreen() {
  const { products, status, error } = useSelector(selectAllProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsList())

    }
  }, [status, dispatch])

  return (
    <>
      {
        status === 'loading' ? <Loader />
          : status === 'failed' ? <Message variant='danger'>{error}</Message>
            : <Row>
              {products.map((prod, ind) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} key={ind}>
                    <Product product={prod} />
                  </Col>)
              })}
            </Row>
      }
    </>
  )
}
