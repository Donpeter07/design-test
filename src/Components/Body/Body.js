import React from 'react'
import { Button, Typography, Rating } from '@mui/material'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import "./Body.css"
import { height, width } from '@mui/system'

const Body = () => {
  return (
    <div className='body-main-parent'>
      <div className='body-links' >
        <a className='body-link' href="#">Home</a>
        <a className='body-link' href="#">Category</a>
        <a className='body-link' href="#">Sub Category</a>
        <a className='body-link' href="#">Product</a>
      </div>

      <div className='body-main'>
        <div className='body-sidebar'>
          <div>
            <img src="pic1.png" alt="" className='box1' />
          </div>
          <div>
            <img src="pic2.png" alt="" className='box2' />
          </div>
          <div>
            <img src="pic3.png" alt="" className='box3' />
          </div>
          <div>
            <img src="pic4.png" alt="" className='box4' />
          </div>
        </div>
        <div className='body-second-box'>
          <img src="lady.png" className='lady-image' alt="" />
        </div>
        <div className='body-third-box' >
          <h3>Waterfall Knitted Cardigan</h3>
          <div><Rating name="half-rating" defaultValue={2.5} precision={0.5} /></div>
          <div className='dollor-rate' >$64.99</div>
          <div>Free Shipping</div>
          <hr />

          <div className='size-parent'>
            Select Size
            <div className='size-child' >
              <Button variant="outlined">S</Button>
              <Button variant="outlined">M</Button>
              <Button variant="outlined">L</Button>
            </div>
          </div>
          <div className='color'>
            Select Color
          </div>
          <div className='parent-color'>
            <div className='color1'></div>
            <div className='color2'></div>
            <div className='color3'></div>
            <div className='color4'></div>
            <div className='color5'></div>

          </div>
          <hr />
          <div className='quantity-main'>
            <div className='quantity'>
              Quantity <br />
              <Button variant="outlined">- 1 +</Button>
              <Button variant="contained">Add to cart </Button>
            </div>
            <div className='zipcode'>
              Zipcode
              <Button variant="outlined">90125</Button>
              <a href="">check availabilty</a>
              <Button variant="contained">Buy Now </Button>
            </div>
          </div>
          <hr />
          <div>Sold By  <a href="">Seller one</a>
            <div>Seller Rating   <Rating name="size-medium" defaultValue={4} />4/5 </div>

          </div>
        </div>

        <div className='body-fourth-box' >
          <div className='body-fourth-box1'>More Seller</div><hr />
          <div>$67.00<i class="fa-solid fa-cart-shopping"></i></div>
          <a href="">Seller Two</a>
          <div>Free Shopping (standard)</div>

          <div className='body-fourth-box2' >

            <div>$65.50<i class="fa-solid fa-cart-shopping"></i></div>
            <a href="">Seller Three</a>
            <div> Shopping $5.99 (Express)</div><hr />
          </div>
          <div><a href=''>Other offers starting at $91.00</a></div>

        </div>
      </div>

      <div className='description'>
        <h3 className='heading' >Description</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, optio sunt. Doloribus ducimus totam quasi eveniet rem quos necessitatibus, qui quia suscipit ratione minus fuga excepturi ut ipsa cupiditate tempora!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minima porro, reiciendis temporibus maxime nostrum quas doloribus qui, corporis vitae cumque in sequi fugiat ipsum sit dolores. Animi, esse fuga!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus corporis quasi quam. Nisi ab reiciendis exercitationem ad dicta! Labore, dicta! Ea voluptatem quibusdam eius similique maiores quisquam rerum ut.
        </h5>
        <div>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vfugiat minima vel natus voluptatem nemo quidem!</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit eveniet consectetur. Atque voluptas eius architect</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. luta aspernatur a officiis, tenetur inventore neque. Beatae, modi!</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className=' rec-product-heading'>Recommended Products</h3></div>
      <div className='rec-products'>

        <div className='rec-products-list'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="pic5.png" className='rec-pic' />
            <Card.Body>
              <Card.Title>Hoodie Sweatshirt</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>$61.20</ListGroupItem>
              <Button variant="contained">Shop Now</Button>
            </ListGroup>

          </Card>
        </div>

        <div className='rec-products-list'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="pic6.png" className='rec-pic' />
            <Card.Body>
              <Card.Title>V Neck Top</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>$56.20</ListGroupItem>
              <Button variant="contained">Shop Now</Button>
            </ListGroup>

          </Card>
        </div>

        <div className='rec-products-list'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="pic7.png" className='rec-pic' />
            <Card.Body>
              <Card.Title>Short Sleeve</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>$45.20</ListGroupItem>
              <Button variant="contained">Shop Now</Button>
            </ListGroup>

          </Card>
        </div>

        <div className='rec-products-list'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="pic8.png" className='rec-pic' />
            <Card.Body>
              <Card.Title>Full Sleeve Sweater</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>$71.20</ListGroupItem>
              <Button variant="contained">Shop Now</Button>
            </ListGroup>

          </Card>
        </div>
      </div>
    </div>

  )
}

export default Body