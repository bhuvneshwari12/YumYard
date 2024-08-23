import React from 'react';
import classes from './AdditionalSection.module.css';

const AdditionalSection = () => {
  return (
    <section className={classes.additionalSection}>
      <h2>Experience Our Specialties</h2>

      <div className={classes.specialtiesGrid}>
        
        <div className={classes.specialtyItem}>
          <img src='https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2832%2Ftrend20200515161910.jpg' alt="Specialty Dish 1" />
          <div>
            <h3>Delicious Pasta</h3>
            <p>Indulge in the rich flavors of our homemade pasta dishes. From creamy Alfredo to tangy marinara, our pasta is made with the finest ingredients and cooked to perfection every time. Whether you prefer traditional spaghetti or gourmet ravioli, our extensive menu offers something for every pasta lover.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img src='https://www.allrecipes.com/thmb/HDfp2feubnMuH_q_8mofh3xP_TA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/233446-lo-mein-noodles-dmfs-4x3-1356-1493-64be4dff0a84483b8e7716d6020fb1d5.jpg' alt="Specialty Dish 2" />
          <div>
            <h3>Sizzling Steaks</h3>
            <p>Prepare your taste buds for a culinary adventure with our sizzling steaks. Our premium cuts of beef are expertly seasoned and grilled to perfection, ensuring each bite is bursting with flavor. Whether you prefer a tender filet mignon or a hearty ribeye, our steaks will satisfy even the most discerning carnivore.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img src='https://www.corriecooks.com/wp-content/uploads/2023/05/Garden-Salad.jpg' alt="Specialty Dish 4" />
          <div>
            <h3>Fresh Garden Salad</h3>
            <p>Enjoy the crisp freshness of our garden salad. Packed with vibrant vegetables and tossed in your choice of dressing, our salad is a delightful combination of flavors and textures. Whether as a starter or a main course, our garden salad is the perfect choice for health-conscious diners.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img src='https://img.bestrecipes.com.au/i9G5gwYE/w643-h428-cfill-q90/br/2019/04/frozen-golden-gaytime-cheesecake-951597-1.jpg' alt="Specialty Dish 3" />
          <div>
            <h3>Decadent Desserts</h3>
            <p>Indulge your sweet tooth with our irresistible desserts. From decadent chocolate cakes to delicate pastries, our desserts are made with love and attention to detail. Each bite is a symphony of flavors, textures, and aromas that will transport you to dessert heaven. Treat yourself to a slice of paradise with our delectable dessert offerings.</p>
          </div>
        </div>


     
      </div>
    </section>
  );
};

export default AdditionalSection;
