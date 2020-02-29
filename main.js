//add an array of sizes property to data object
//use v-for to display them as a list
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Christmas socks with the Vue brand',
    image: './assets/vmSocks-green-onWhite.jpg',
    linkedImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender neutral"],
    variants: [
      {
        variantID: 2234,
        variantColor: 'green'
      },
      {
        variantID: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: [
      {
        sizeID: 100,
        sizeName: 'small'
      },
      {
        sizeID: 101,
        sizeName: 'medium'
      },
      {
        sizeID: 102,
        sizeName: 'large'
      }
    ],
    inventory: 100,
    onSale: true,
    onSaleMessage: 'On Sale!'
  }
})
