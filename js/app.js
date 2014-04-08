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

var parseGroup = function(result, temp) {
  var counted = _.countBy(temp, function(t) {
    return t;
  });

  _.each(counted, function(count, digit) {
    if (count > 1 && count <= 10) {
      result.push(sizes[count]);
    }

    result.push(stringNumbers[digit]);
  });

  return result;
};

var parseNumber = function(digits, groups) {
  var result = [];
  var temp = [];

  if (groups && groups.length) {
    _.each(groups, function(group) {
      temp = _.first(digits, group);
      digits = digits.splice(group);

      parseGroup(result, temp);
    });
  } else {
    parseGroup(result, digits);
  }

  return result.join(' ');
};
