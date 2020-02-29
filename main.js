//add an onSale property to data object
//use v-if to display a span that says "On Sale!" whenever onSale is true
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Christmas socks with the Vue brand',
    image: './assets/vmSocks-green-onWhite.jpg',
    linkedImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    inStock: true,
    inventory: 100,
    onSale: true,
    onSaleMessage: 'On Sale!'
  }
})
