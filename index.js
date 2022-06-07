// code your solution here
const saturdayFun = function(act= "roller-skate") {
    return `This Saturday, I want to ${act}!`
}

const mondayWork = function(text = "go to the office") {
    return `This Monday, I will ${text}.`
}

function wrapAdjective(symb) {
  const innerFunction = function (adj) {
    return `You are ${symb}${adj}${symb}!`;
  };
  return innerFunction;
}