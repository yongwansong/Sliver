document.querySelector('.cart_clear').addEventListener('click', function(){
    fetch('/cart/clear.js')
    .then(response => response.json())
    .then(data => {
      console.log(data.items, 'data');
      document.querySelector('cart-items').classList.add('is-empty');
      document.querySelector('.cart-count-bubble [aria-hidden="true"]').textContent = '0';
      document.querySelector('.cart-count-bubble .visually-hidden').textContent = '0 items';
    })
    .catch(error => {
      console.error('Error fetching cart data:', error);
    });
})