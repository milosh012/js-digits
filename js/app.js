var parseGroup = function(digits, result) {
  result = result || [];

  var sizes = {
    2 :'double',
    3 :'triple',
    4 :'quadruple',
    5 :'quintuple',
    6 :'sextuple',
    7 :'septuple',
    8 :'octuple',
    9 :'nonuple',
    10 :'decuple'
  };
  var stringNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  // count repetition of digits
  var counted = _.countBy(digits);

  _.each(counted, function(count, digit) {
    if (count > 1 && count <= 10) {
      // we have a size for this count
      result.push(sizes[count]);
    }

    // add to the end result
    result.push(stringNumbers[digit]);
  });

  return result;
};

var parseNumber = function(digits, groups) {
  var result = [];
  var groupDigits = [];

  if (groups && groups.length) {
    // groups are provided
    _.each(groups, function(group) {
      // for each group find a subset of digits
      groupDigits = _.first(digits, group);
      digits = digits.splice(group);

      // parse group numbers into string
      parseGroup(groupDigits, result);
    });
  } else {
    // groups are not provided
    result = parseGroup(digits);
  }

  // return string
  return result.join(' ');
};
