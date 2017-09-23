const isCloseBracket = (config, bracket) => {
  for (let i = 0; i < config.length; i++) {
    if (config[i][1] === bracket) {
      return i;
    }
  }
  return -1;
}

const isOpenBracket = (config, bracket) => {
  for (let i = 0; i < config.length; i++) {
    if (config[i][0] === bracket) {
      return i;
    }
  }
  return -1;
}

module.exports = function check(str, bracketsConfig) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    let tempOpen = isOpenBracket(bracketsConfig, str[i]);
    let tempClose = isCloseBracket(bracketsConfig, str[i]);

    // open bracket
    if (tempOpen !== -1 && tempOpen !== tempClose) {
      result.push(tempOpen);
    }

    // close bracket or break loop
    if (tempClose !== -1 && tempOpen !== tempClose) {
      if (result[result.length - 1] === tempClose) {
        result.pop();
      } else {
        result.push(false);
        break;
      }
    }

    // check same open and close brackets
    if (tempOpen === tempClose) {
      if (result[result.length - 1] === tempClose) {
        result.pop();
      } else {
        result.push(tempOpen);
      }
    }
  }
  if (result.length) {
    return false;
  }
  return true;
}
