// Product data
        const products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
        { id: 3, name: "Product 3", price: 30 },
        { id: 4, name: "Product 4", price: 40 },
        { id: 5, name: "Product 5", price: 50 },
        ];
        let addedProduct = []
      const productList = document.getElementById("product-list");
      const cartList = document.getElementById('cart-list')

      // Render product list
      function renderProducts() {
        products.forEach((product) => {
          const li = document.createElement("li");
          li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})" class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
          productList.appendChild(li);
        });
      }


      // Render cart list
      function renderCart() {
        console.log('renderCart')
        let addedProducts = JSON.parse(localStorage.getItem('addedProducts'))
        if(addedProducts && addedProducts !== null) {
            addedProducts.forEach(product=> {
                const li = document.createElement("li");
                li.innerHTML = `${product.name} - $${product.price}`;
                cartList.appendChild(li);
            })
        } else {
            addedProduct.forEach(product=> {
                const li = document.createElement("li");
                li.innerHTML = `${product.name} - $${product.price}`;
                cartList.appendChild(li);
            })
        }  
      }

      // Add item to cart

      function addToCart(id) {
        let product = products.find((item)=> item.id === id)
        addedProduct.push(product)
        localStorage.setItem('addedProducts', JSON.stringify(addedProduct))
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - $${product.price}`;
        cartList.appendChild(li);
      }

      // Remove item from cart
      function removeFromCart(productId) {}

      // Clear cart
      function clearCart() {
        localStorage.setItem('addedProducts', null)
        addedProduct = []
        while (cartList.firstChild) {
            cartList.removeChild(cartList.firstChild);
        }
      }

      // Initial render
      renderProducts();
      renderCart();