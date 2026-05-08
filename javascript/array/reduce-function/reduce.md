I need grouping here.
I will create unique key.
Then I will use object/hashmap.
If key exists I'll update quantity.
Else I'll create new object.

// for rememebering
array.reduce((acc, item) => {
const key = something;
if(acc[key]) {
// update existing
} else {
// create new
}
return acc;
}, {})

//
| Parameter | Meaning |
| --------- | --------------------------------------- |
| `acc` | Accumulator (stores final/result value) |
| `item` | Current array element |
| `intial` |
