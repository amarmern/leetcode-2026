const products = [
  { category: 'Electronics', price: 100 },
  { category: 'Clothes', price: 50 },
  { category: 'Electronics', price: 200 },
  { category: 'Clothes', price: 70 },
];

const result = products.reduce((acc, item) => {
  if (acc[item.category]) {
    acc[item.category] += item.price;
  } else {
    acc[item.category] = item.price;
  }
  return acc;
}, {});

console.log(result);

// let obj = {};
// for (let item of products) {
//   let itemCategry = item.category;
//   if (!obj[itemCategry]) {
//     obj[category.price] = 1;
//   } else {
//     obj[category.price]++;
//   }
// }
// console.log(obj);
