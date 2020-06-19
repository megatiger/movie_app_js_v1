import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>  
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};


const foodILike = [
  {
    id:1,
    name: "김치",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/220px-Various_kimchi.jpg",
    rating: 5,
  },
  {
    id:2,
    name: "삼겹살",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/%EC%82%BC%EA%B2%B9%EC%82%B4.jpg",
    rating: 4.5,
  },
  {
    id:3,
    name: "비빕밥",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
    rating: 4.3,
  },
  {
    id:4,
    name: "돈가스",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dongaseu_4.jpg/220px-Dongaseu_4.jpg",
    rating: 4.7,
  },
];



function App() {
  return (
  <div>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
  </div>
  );
}


export default App;
