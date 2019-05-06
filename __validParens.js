//Solution 1: Arrays
const balancedBrackets = sequence => {
  if (sequence.length % 2 !== 0) return false;

  let arrSeq = ["[", "]", "(", ")", "{", "}"];
  let stack = [];
  let val;

  for (let i = 0; i < sequence.length; i++) {
    val = arrSeq.indexOf(sequence[i]);
    // console.log("val", val);
    if (Math.abs(val - stack[stack.length - 1]) === 1) {
      stack.pop();
    } else {
      stack.push(val);
    }
    // console.log(stack);
  }

  return stack.length === 0 ? true : false;
};

console.log(balancedBrackets("[({{}()})[]]"));

/**************************************************************
**************************************************************
**************************************************************/

//Solution 2: Maps
const balancedBrackets = sequence => {
  if (sequence.length % 2 !== 0) return false;

  let arrSeq = { "[": 0, "]": 1, "(": 2, ")": 3, "{": 4, "}": 5 };
  let stack = [];
  let val;

  for (let i = 0; i < sequence.length; i++) {
    val = arrSeq[sequence[i]];
    // console.log("val", val);
    if (Math.abs(val - stack[stack.length - 1]) === 1) {
      stack.pop();
    } else {
      stack.push(val);
    }
    // console.log(stack);
  }

  return stack.length === 0 ? true : false;
};

console.log(balancedBrackets("[({{}()})[]]"));
