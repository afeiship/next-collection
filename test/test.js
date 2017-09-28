var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-collection');

describe('next/collection', function () {

  it('nx.Collection union', function () {
    var arr1 =[1,2,3];
    var arr2 =[2,3,4];
    var arr3 =[3, 4,5,6,'a'];
    var arr4 =['a','b',1];


    var col1 = nx.Collection.union([],arr1,arr2,arr3,arr4);

    assert.equal(col1.length,8)
    assert.deepEqual(col1,[1,2,3,4,5,6,'a','b']);

  });

  it('nx.Collection intersect', function () {
    var arr1 =[1,2,3,3];
    var arr2 =[2,3,4,3];
    var arr3 =[3, 3,4,5,6,'a'];

    var col1 = nx.Collection.intersect(arr1,arr2,arr3);
    assert.equal(col1.length,1)
    assert.deepEqual(col1,[3]);
  });

  it(" nx.Collection difference => NxCollection.difference([1, 2, 3], [4, 2]); ", function () {
    var arr1 =[1, 2, 3];
    var arr2 =[4, 2];

    var col1 = nx.Collection.difference(arr1,arr2);
    assert.deepEqual(col1,[1,3]);
  });

  it(" nx.Collection difference => NxCollection.difference([1, '2', 3], [4, 2]); ", function () {
    var arr1 =[1, '2', 3];
    var arr2 =[4, 2];

    var col1 = nx.Collection.difference(arr1,arr2);
    assert.deepEqual(col1,[1, "2", 3]);
  });

});
