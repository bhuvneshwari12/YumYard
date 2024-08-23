import React, { useContext, useState } from 'react';
import classes from './AvailableMeals.module.css'
import CartContext from '../../Store/CartContext';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Cheese strawr',
    description: 'Finest fish and veggies',
    price: 22.99,
    image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm2',
    name: 'Cincinnati  chilli',
    description: 'A german specialty!',
    price: 16.5,
    image: "https://images.pexels.com/photos/4732085/pexels-photo-4732085.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 'm3',
    name: '	Étouffée',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/9399991/pexels-photo-9399991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm4',
    name: '	Goetta',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/14090828/pexels-photo-14090828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm5',
    name: 'Klobásník',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/8963467/pexels-photo-8963467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm6',
    name: 'Loco moco',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/1123252/pexels-photo-1123252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm7',
    name: 'Mission burrit',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/2365945/pexels-photo-2365945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm8',
    name: '	Pepperoni roll',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/3009323/pexels-photo-3009323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm9',
    name: '	Runza',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm10',
    name: '	Slinger',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/1199979/pexels-photo-1199979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm11',
    name: 'Spam musubi',
    description: 'American, raw, meaty',
    price: 17,
    image: "https://images.pexels.com/photos/1878344/pexels-photo-1878344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm12',
    name: 'Spoonbread',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/5339078/pexels-photo-5339078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm13',
    name: '	Utica greens',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/8954072/pexels-photo-8954072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm14',
    name: 'Derby pie',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/12737920/pexels-photo-12737920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm15',
    name: 'Gooey butter',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/13788770/pexels-photo-13788770.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 'm16',
    name: 'Key lime pie',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/5127319/pexels-photo-5127319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm17',
    name: 'eedham',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/4132167/pexels-photo-4132167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm18',
    name: 'Shoofly pi',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/6287527/pexels-photo-6287527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm19',
    name: 'Whoopie pie',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/19676018/pexels-photo-19676018/free-photo-of-top-view-of-a-delicious-lunch-meal-with-an-egg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 'm20',
    name: 'Frogeye',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://images.pexels.com/photos/2894651/pexels-photo-2894651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

];

const AvailableMeal = () => {
  const ctx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const addItemHandler = (meal) => {
    const item = { ...meal, quantity };
    ctx.addItem(item);
  }

  return (
    <div>
    

      <div className={classes.mealRow}>
        {DUMMY_MEALS.map((meal) => (
          <div key={meal.id} className={classes.mealCol}>
            <div className={classes.card}>
              <img src={meal.image} alt={meal.name} className={classes.image} />
              <div className={classes.cardBody}>
                <h3>{meal.name}</h3>
                <p>{meal.price}</p>
                <p>{meal.description}</p>
                <label>Quantity</label>
                <input
                  className={classes.input}
                  type='number'
                  min='0'
                  max='5'
                  defaultValue='0'
                  onChange={(e) => {
                    setQuantity(parseInt(e.target.value));
                  }}
                />
                <br />
                <br />
                <button className={classes.button} onClick={() => { addItemHandler(meal) }}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableMeal;
