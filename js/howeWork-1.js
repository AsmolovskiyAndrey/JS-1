// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

// for (const product of products) {
//   if (productName === products.name) {
//      console.log(products.name);
//   return products.price;
//   }

// } return null;
// }
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (let i = 0; i < products.length; i++) {
    if (productName === products[i].name) {
      return products[i].price
    }
  }
  return null


  // Change code above this line
}

  // Change code above this line
  console.log(getProductPrice("Radar"));