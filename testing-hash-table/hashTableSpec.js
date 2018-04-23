// Create your tests for the hashTable here...
describe('test load', function() {
  it('loads well', function() {
    expect(1+1).toEqual(2);
  });
});

describe('Create Hash', function() {
  var myHash = makeHash();
  beforeEach(function() {
    myHash.insert('hi', 'jamie');
    myHash.insert('jamieage', 23);
    myHash.insert('lol', 'hi');
    myHash.insert(4, 5);
    myHash.insert('324829342', 5);
  });
  it('should find the right value for one given key', function() {
    expect(myHash.retrieve('jamieage')).toEqual(23);
  });
  it('should find the right value for another given key', function() {
    expect(myHash.retrieve('hi')).toEqual('jamie');
  });
  it('should find the right value for ALL KEYS', function() {
    expect(myHash.retrieve('jamieage')).toEqual(23);
    expect(myHash.retrieve('hi')).toEqual('jamie');
    expect(myHash.retrieve('lol')).toEqual('hi');
    expect(myHash.retrieve(4)).toEqual(5);
    expect(myHash.retrieve('324829342')).toEqual(5);

  })
});




//https://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229