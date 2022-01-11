(function () {
  const NxCollection = require('../src');

  describe('next/collection', function () {

    test('nx.Collection union', function () {
      var arr1 = [1, 2, 3];
      var arr2 = [2, 3, 4];
      var arr3 = [3, 4, 5, 6, 'a'];
      var arr4 = ['a', 'b', 1];


      var col1 = nx.Collection.union([], arr1, arr2, arr3, arr4);
      expect(col1).toEqual([1, 2, 3, 4, 5, 6, 'a', 'b']);
    });

    test('nx.Collection intersect', function () {
      var arr1 = [1, 2, 3, 3];
      var arr2 = [2, 3, 4, 3];
      var arr3 = [3, 3, 4, 5, 6, 'a'];

      var col1 = nx.Collection.intersect(arr1, arr2, arr3);
      expect(col1.length).toBe(1)
      expect(col1).toEqual([3]);
    });

    test("nx.Collection diff => NxCollection.diff([1, 2, 3], [4, 2]); ", function () {
      var arr1 = [1, 2, 3];
      var arr2 = [4, 2];

      var col1 = nx.Collection.diff(arr1, arr2);
      expect(col1).toEqual([1, 3]);
    });

    test("nx.Collection diff => NxCollection.diff([1, '2', 3], [4, 2]); ", function () {
      var arr1 = [1, '2', 3];
      var arr2 = [4, 2];

      var col1 = nx.Collection.diff(arr1, arr2);
      expect(col1).toEqual([1, "2", 3]);
    });

    test("nx.Collection minus => NxCollection.minus([1, 2, 3], [1,5,2,6]); ", function () {
      var arr1 = [1, 2, 3]
      var arr2 = [1, 5, 2, 6]

      var col1 = nx.Collection.minus(arr1, arr2);
      var col2 = nx.Collection.minus(arr2, arr1);
      expect(col1).toEqual([3]);
      expect(col2).toEqual([5, 6]);
    });


  });
})();
