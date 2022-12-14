console.log('yo');

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

function buyIcecream(icecreamName) {
    let foundIcecream = iceCream.find(ice => ice.name == icecreamName)
    foundIcecream.quantity++
    drawCart()
}

function drawCart() {
    let template = ''
    iceCream.forEach(ice => {
        if (ice.quantity > 0) {
            console.log('drawing cart', ice);
            template += ` 
            <div class="d-flex justify-content-between">
            <p>${ice.name}</p>
            <p>${ice.quantity}</p>
            <p>${ice.price}</p>
        </div>`
        }
        document.getElementById('cart').innerHTML = template
        drawTotal()
    })
}

function drawTotal() {
    let total = 0
    iceCream.forEach(ice => {
        total += ice.price * ice.quantity
    })
    document.getElementById('total').innerText = total.toFixed(2)
}

function checkout() {
    if (window.confirm('would you like to clear cart?')) {
        iceCream.forEach(ice => {
            ice.quantity = 0
        })
    }
    drawCart()
}