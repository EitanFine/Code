// Using an Array as a Stack

const balanced_brackets = str => {
  let len = str.length;
  let arr = [];
  let obj = { "]": "[", ")": "(", "}": "{" };

  if (len % 2 !== 0) return false;

  for (let i = 0; i < len; i++) {
    if (str[i] === "[" || str[i] === "(" || str[i] === "{") {
      arr.push(str[i]);
    } else if (arr[arr.length - 1] !== obj[str[i]]) {
      return false;
    } else {
      arr.pop();
    }
  }
  if (arr.length === 0) return true;
};

console.log(balanced_brackets("[()]")); 
