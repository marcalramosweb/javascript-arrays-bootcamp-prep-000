var chocolateBars = ['snikers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, element){
  chocolateBars = ['foo', 1]
  return chocolateBars;
}

addElementToBeginningOfArray('foo', 1);

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars = ['foo', 1];

  var newarr = ['chocotate', ...chocolateBars];

  chocolateBars = chocolateBars.unshift(1);

  return chocolateBars;
}

destructivelyAddElementToBeginningOfArray(1);
