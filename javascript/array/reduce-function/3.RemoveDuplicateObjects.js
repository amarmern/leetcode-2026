const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'A' },
];
const res = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(Object.values(res));

//alternate approach

let map = {};
for (let i = 0; i < users.length; i++) {
  map[users[i]['id']] = users[i];
}
let newUser = [];
for (let user in map) {
  newUser.push(map[user]);
}
console.log(newUser);
