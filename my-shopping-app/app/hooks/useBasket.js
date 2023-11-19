import { useState } from 'react';

const useBasket = () => {
  const [basket, setBasket] = useState([]);

  function addToBasket(mug) {
    console.log(mug);
  };

  return { basket, addToBasket };
};

export default useBasket;