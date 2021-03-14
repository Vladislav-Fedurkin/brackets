module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i<str.length; i++) {
      for (let t = 0; t<bracketsConfig.length; t++) {
      if (str.includes(bracketsConfig[t][0] + bracketsConfig[t][1])) {
        str = str.replace(bracketsConfig[t][0] + bracketsConfig[t][1], "");
        i--;
      }
    }
  }
  if (str.length != 0) {
    return false;
  } else {
    return true;
  }
}