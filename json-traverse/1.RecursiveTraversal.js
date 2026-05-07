//1. Recursive Traversal (Best Approach)
/*
If value is an object → go deeper
If value is an array → loop and go deeper
Otherwise → process the value

Example JSON
const data = {
  id: 1,
  name: "A",
  details: {
    age: 25,
    address: {
      city: "Bangalore",
      geo: {
        lat: 12.9,
        lng: 77.5
      }
    }
  },
  hobbies: ["reading", { type: "sports", name: "cricket" }]
};
*/
function traverseJSON(obj) {
  if (Array.isArray(obj)) {
    for (let item of obj) {
      traverseJSON(item);
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      console.log(key, ':', obj[key]);
      traverseJSON(obj[key]);
    }
  }
}

/* o/p:
id : 1
name : A
details : {...}
age : 25
address : {...}
city : Bangalore
geo : {...}
lat : 12.9
lng : 77.5
hobbies : [...]
type : sports
name : cricket
*/

//2. If You Want Full Path (Better for Interviews)
function traverseJSON(obj, path = '') {
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      traverseJSON(item, `${path}[${index}]`);
    });
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      traverseJSON(obj[key], path ? `${path}.${key}` : key);
    }
  } else {
    console.log(path, ':', obj);
  }
}

/* o/p:
id : 1
name : A
details.age : 25
details.address.city : Bangalore
details.address.geo.lat : 12.9
details.address.geo.lng : 77.5
hobbies[0] : reading
hobbies[1].type : sports
hobbies[1].name : cricket
*/
