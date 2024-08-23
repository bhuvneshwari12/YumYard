import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const HomePage = () => {
  const history=useHistory()

  const viewMenu=()=>{
   history.push('/menu')
  }

  return (
    <div>
      <div className="homepage">
        <section className="hero">
          <h1>Welcome to the Flavor Factory</h1>
          <p>Where every bite tells a story!</p>
          <p>Indulge your senses in a symphony of flavors, textures, and aromas that will transport you to culinary paradise.</p>
        </section>


        <section className="menu-preview">
          <h2 className='todays'>Today's Highlights</h2>
          <div className="dish">
            <img src="https://images.pexels.com/photos/16153968/pexels-photo-16153968/free-photo-of-closeup-of-a-chocolate-cream-cake-with-strawberries.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dish 1" />
            <h3>Truffle Risotto</h3>
            <p>Indulge in our creamy truffle-infused risotto, a symphony of flavors in every spoonful.</p>
            <span>$18</span>
          </div>
          <div className="dish">
            <img src="https://images.pexels.com/photos/1458426/pexels-photo-1458426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dish 2" />
            <h3>Crunch Pizza</h3>
            <p>Our perfectly grilled dish, drizzled with balsamic glaze, is a seafood lover's dream come true.</p>
            <span>$22</span>
          </div>
          <div className="dish">
            <img src="https://images.pexels.com/photos/1025316/pexels-photo-1025316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dish 4" />
            <h3>Vegetarian Pad Thai</h3>
            <p>Enjoy the vibrant flavors of our vegetarian Pad Thai, bursting  aromatic spices.</p>
            <span>$14</span>
          </div>
          <div className="dish">
            <img src="https://images.pexels.com/photos/3356412/pexels-photo-3356412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dish 5" />
            <h3>Classic Cheeseburger</h3>
            <p>Indulge in the timeless comfort of burger with  cheese especially for summers!</p>
            <span>$12</span>
          </div>
        </section>
      </div>





<div class="content">
  <h2><i class="icon icon-utensils fas fa-utensils"></i>Welcome to Our Unique Dining Experience</h2>
  <p><i class="icon icon-leaf fas fa-leaf"></i><span>Embark on a culinary journey that awakens your senses and leaves a lasting impression.</span></p>
  <p><i class="icon icon-glass-cheers fas fa-glass-cheers"></i><span>Indulge in our carefully crafted menu, featuring a fusion of flavors and locally sourced ingredients.</span></p>
  <img src="https://images.pexels.com/photos/2901214/pexels-photo-2901214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant Interior" className="restaurant-image"/>
  <a href="#" onClick={viewMenu} class="btn">Explore more<i class="icon fas fa-chevron-right"></i></a>
</div>





<div className="specials-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="specials-heading">Today's Specials</h2>
              <p className="specials-description">Indulge in our chef's handpicked specials for today, featuring a tantalizing array of flavors and ingredients. From succulent seafood to savory steaks, there's something for everyone to enjoy.</p>
              <ul className="specials-list">
                <li className="specials-item">
                  <span className="specials-name">Grilled Lobster Tail</span>
                  <span className="specials-price">$29.99</span>
                </li>
                <li className="specials-item">
                  <span className="specials-name">Filet Mignon</span>
                  <span className="specials-price">$34.99</span>
                </li>
                <li className="specials-item">
                  <span className="specials-name">Vegetarian Risotto</span>
                  <span className="specials-price">$22.99</span>
                </li>
              </ul>
              <a href='#'>   <Button variant="primary" className="specials-button" onClick={viewMenu}>View Full Menu</Button></a>
              <img src='https://images.pexels.com/photos/750843/pexels-photo-750843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='second-image'></img>
            </Col>
          </Row>
        </Container>
      </div>





      <div className="ambiance-section">
        <h2>Discover Our Ambiance</h2>
        <div className="image-gallery">
          <img src="https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Interior 1" />
          <img src="https://images.pexels.com/photos/16935912/pexels-photo-16935912/free-photo-of-an-elegant-table-setting-at-a-banquet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Interior 2" />
          <img src="https://images.pexels.com/photos/10666408/pexels-photo-10666408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Interior 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgziZo8Q7EToVr7pR_Ze2vewQIqMNcctxjpg&usqp=CAU" alt="Interior 4" />
          <img src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Interior 5" />
          <img src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Interior 6" className='img-6' />
          <img src="https://images.pexels.com/photos/4819658/pexels-photo-4819658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Interior 7" className='img-7' />
          <img src="https://images.pexels.com/photos/13045657/pexels-photo-13045657.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Interior 8" />
        </div>
      </div>



      <div className="combined-content">
        <div className="additional-footer-content">
          <div className="additional-content">
            <h2>Our Commitment to Quality</h2>
            <p>At our restaurant, we are committed to providing our guests with the highest quality dining experience possible. From sourcing the freshest ingredients to delivering exceptional service, quality is at the heart of everything we do.</p>
            <p>We work closely with local farmers and producers to ensure that our ingredients are of the finest quality and ethically sourced. Our chefs are passionate about creating delicious and innovative dishes that showcase the best flavors of the season.</p>
            <p>Join us and experience the difference that quality makes!</p>
          </div>
          <div className="footer-content">
            <div className="catchy-content-bottom">
              <h2>Discover Exquisite Flavors</h2>
              <div className="highlighted-text-bottom">
                <p>Indulge your senses in a symphony of flavors crafted by our expert chefs.</p>
                <p>From succulent steaks to delicate desserts, each dish is a masterpiece.</p>
              </div>
              <div className="quote-bottom">
                <p>"A culinary journey unlike any other."</p>
                <p>- Food Critic Magazine</p>
              </div>
            </div>
          </div>
        </div>
      </div>








      <h2 className='customer-heading'>What Our Customers Say</h2>
      <div className="testimonial-section">

        <div className="testimonial">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzOtsUs8xvAPRtgeDkXikcDA771Ohd1kSlA&usqp=CAU" alt="Customer 1" />
          <p>"The food was exceptional and the service was impeccable. I can't wait to visit again!"</p>
          <p>- John Doe</p>
        </div>
        <div className="testimonial">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxJvk4gw0NqqW6qEqj11J_lDhlSGe_8S-Vg&usqp=CAU" alt="Customer 2" />
          <p>"A truly memorable dining experience. Each dish was a work of art and bursting with flavor."</p>
          <p>- Jane Smith</p>
        </div>
        <div className="testimonial">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6do4lHioQ-fObiq9M8spPNWz9uPz0322xw&usqp=CAU" alt="Customer 4" />
          <p>"Absolutely fantastic dining experience! Every dish was bursting with flavor, and the service was top-notch."</p>
          <p className="author">- Sarah Johnson</p>
        </div>
        <div className="testimonial">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Jkd98uzRWGQFMwNMXJi5q2JzQzT-q5xN5Q&usqp=CAU" alt="Customer 3" />
          <p>"I highly recommend this restaurant to anyone looking for a unique and delicious meal."</p>
          <p>- Michael Johnson</p>
        </div>

      </div>

    </div>
  );
}

export default HomePage;
