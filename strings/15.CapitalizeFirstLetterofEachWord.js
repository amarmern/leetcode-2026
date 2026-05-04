//"hello world" → "Hello World"
let str = 'hello word';
let result = str[0].toUpperCase();

for (let i = 1; i < str.length; i++) {
  if (str[i - 1] == ' ') {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}

console.log(result);
