//"hello" → vowels: 2, consonants: 3

let str = 'hello how are you';

let v = 0,
  c = 0;
let vowels = 'aeiouAEIOU';

for (let char of str) {
  if (/[a-z]/i.test(char)) {
    vowels.includes(char) ? v++ : c++;
  }
}

console.log({ vowels: v, constonant: c });
