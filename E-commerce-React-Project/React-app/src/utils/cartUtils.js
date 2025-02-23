
export const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    cartItems.push(product);
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    window.dispatchEvent(new Event('storage'));
  };
  