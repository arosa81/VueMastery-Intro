//add a link to data object
//use v-bind to bind link to an anchor tag's href attribute
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Christmas socks with the Vue brand',
    image: './assets/vmSocks-green-onWhite.jpg',
    linkedImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
  }
})
