module.exports = function check(str, bracketsConfig) {
  const BracketsPattern = Object.fromEntries(bracketsConfig);

  let stack = [];

  for (let char of str) {
    if (BracketsPattern[char] && char !== '|' && char !== '8' && char !== '7') {
      stack.push(char);
    } else if (char === '|' && !stack.includes('|')) {
      stack.push(char)
    } else if (char === '8' && !stack.includes('8')) {
      stack.push(char);
    } else if (char === '7' && !stack.includes('7')) {
      stack.push(char)
    } else {
      
      let topElement = stack[stack.length - 1];
      let closedBracket = Object.keys(BracketsPattern).find(keys => BracketsPattern[keys] === char);

      if (topElement === closedBracket) {
        stack.pop();
      } else {
        
        return false;
      }
    }
  }

  return stack.length === 0;
}
