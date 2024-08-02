module.exports = function check(str, bracketsConfig) {
  const bracketsAdd = bracketsConfig.map((el) => el[0]);
  const bracketsDel = bracketsConfig.map((el) => el[1]);
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (bracketsAdd.includes(char)) {
      if (bracketsDel.includes(char) && char == stack.at(-1)) {
        stack.pop();
        continue;
      }
      stack.push(char);
    } else if (bracketsDel.indexOf(char) == bracketsAdd.indexOf(stack.at(-1))) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
