// let mostSalesBox = document.querySelector(".product")
// function data() {
//     axios.get('https://dummyjson.com/products')
//         .then(res => {
//             db = res.data.products
//             db.forEach(item => {
//                 let box = document.createElement('div')
//                 box.className = 'product'
//                 box.innerHTML = `
//             <img src=${item.thumbnail} alt="">
//             <div>
//              <h3>${item.de scription}</h3>
//              <p>${item.title}</p>
//              <button class=cartBtn><i class="fa-solid fa-cart-shopping"></i> ADD</button>
//             </div>
//             `
//             mostSalesBox.appendChild(box)
//             });
//         })

// }

// data()

  


// //  CHAT GPT 



fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        const productContainer = document.querySelector('.product');

        json.forEach(product => {
            const cartDiv = document.createElement('div');
            cartDiv.classList.add('cart');

            const cartImgDiv = document.createElement('div');
            cartImgDiv.classList.add('cartImg');
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            cartImgDiv.appendChild(img);

            const cartDescDiv = document.createElement('div');
            cartDescDiv.classList.add('cartDesc');
            const title = document.createElement('p');
            title.textContent = product.title;
            const priceWrapper = document.createElement('div');
            const price1 = document.createElement('span');
            price1.textContent = `$${product.price}`;
            const price2 = document.createElement('span');
            price2.textContent = `$${product.price * 1.2}`;
            priceWrapper.appendChild(price1);
            priceWrapper.appendChild(price2);
            cartDescDiv.appendChild(title);
            cartDescDiv.appendChild(priceWrapper);

            cartDiv.appendChild(cartImgDiv);
            cartDiv.appendChild(cartDescDiv);

            productContainer.appendChild(cartDiv);
        });
    })
    .catch(err => console.error('Error fetching products:', err));