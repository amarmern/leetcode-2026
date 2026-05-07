//⚡ Iterative Approach (Stack – Advanced)
function traverseIterative(obj) {
  let stack = [obj];

  while (stack.length) {
    let current = stack.pop();

    if (typeof current === 'object' && current !== null) {
      for (let key in current) {
        console.log(key, ':', current[key]);
        stack.push(current[key]);
      }
    }
  }
}

/*
🧠 Interview Tips
This problem is based on DFS (Depth First Search)
Key concepts:
Recursion
Type checking (Array, Object)
Handling null safely
Follow-up questions:
Flatten JSON
Find specific key/value
Modify nested structure
*/
