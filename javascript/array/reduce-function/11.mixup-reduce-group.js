/*To find duplicate use SKU,wayBill,carrier are same that object is duplicate, 
//and sum of the quantity*/
const obj = [
  [
    {
      qty: 1,
      SKU: 'SXW12X',
      item: 'Laptop',
      price: '1000',
      wayBill: 123,
      carrier: 'fedx',
    },
    {
      qty: 2,
      SKU: 'SXW13X',
      item: 'Mouse',
      price: '200',
      wayBill: 124,
      carrier: 'fedx',
    },
  ],
  [
    {
      qty: 1,
      SKU: 'SXW12X',
      item: 'Laptop',
      price: '100',
      wayBill: 123,
      carrier: 'fedx',
    },
    {
      qty: 3,
      SKU: 'SXW12X',
      item: 'Laptop',
      price: '100',
      wayBill: 123,
      carrier: 'dtdc',
    },
    {
      qty: 1,
      SKU: 'SXW15X',
      item: 'Keyboard',
      price: '200',
      wayBill: 125,
      carrier: 'fedx',
    },
  ],
];

let products = obj.flat();

const result = products.reduce((acc, item) => {
  //key
  let key = `${item.SKU}-${item.wayBill}-${item.carrier}`;
  // if already exists -> add qty
  if (acc[key]) {
    acc[key].qty += item.qty;
  } else {
    acc[key] = { ...item };
  }
  return acc;
}, {});

console.log(Object.values(result));

//another approach
/*let flatObj = obj.flat();
let map = {};
for (let item of flatObj) {
  let key = `${item.SKU}-${item.wayBill}-${item.carrier}`;
  if (map[key]) {
    // add qty if duplicate
    map[key].qty += item.qty;
  } else {
    //store first object
    map[key] = { ...item };
  }
}
const result = Object.values(map);
console.log(result);

*/
