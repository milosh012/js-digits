describe("Parse telephone number", function() {

  it("should parse telephone number into 2 groups", function() {
    var result = parseNumber([0,1,3,3,3,3,9,9,7,7,4], [5,6]);

    expect(result).toEqual('zero one triple three three double nine double seven four');
  });

  it("should parse telephone number into 3 groups", function() {
    var result = parseNumber([0,1,3,3,3,3,9,9,7,7,4], [5,4,2]);

    expect(result).toEqual('zero one triple three three double nine seven seven four');
  });

  it("should parse telephone number into 1 group", function() {
    var result = parseNumber([0,1,2,3,4,4,6,7,8,9], [15]);

    expect(result).toEqual('zero one two three double four six seven eight nine');
  });

  it("should parse telephone number into smaller groups", function() {
    var result = parseNumber([0,1,3,3,3,3,9,9,7,7,4], [1,2]);

    expect(result).toEqual('zero one three');
  });

  it("should parse telephone number into groups (each number different)", function() {
    var result = parseNumber([0,1,2,3,4,5,6,7,8,9], [5,5]);

    expect(result).toEqual('zero one two three four five six seven eight nine');
  });

  it("should parse telephone number into groups (each number different)", function() {
    var result = parseNumber([1,1,1,1,1,1,1,1,1,1], [15]);

    expect(result).toEqual('decuple one');
  });

  it("should parse telephone number into groups (each number different)", function() {
    var result = parseNumber([1,1,1,1,1,1,1,1,1,1,1], [15]);

    expect(result).toEqual('one');
  });

  it("should parse telephone number into groups (each number different)", function() {
    var result = parseNumber();

    expect(result).toEqual('');
  });

  it("should parse telephone number into groups (each number different)", function() {
    var result = parseNumber([0,1,2,3,4,5,6,7,8,9]);

    expect(result).toEqual('zero one two three four five six seven eight nine');
  });

});
