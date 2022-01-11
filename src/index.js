(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var ARRAY_PROTO = Array.prototype;

  var NxCollection = nx.declare('nx.Collection', {
    statics: {
      union: function () {
        var target = arguments[0];
        var length = arguments.length;
        for (var index = 1; index < length; index++) {
          var element = arguments[index];
          target = target.concat(element);
        }
        return [...new Set(target)]
      },
      intersect: function () {
        var arg1 = arguments[0];
        var args_ = ARRAY_PROTO.slice.call(arguments, 1);
        return args_.reduce(function (result, next) {
          var set = new Set(next);
          var filters = result.filter(function (item) {
            return set.has(item);
          });
          return [...new Set(filters)]
        }, arg1);
      },
      diff: function () {
        var arg1 = arguments[0];
        var args_ = ARRAY_PROTO.slice.call(arguments, 1);
        return args_.reduce(function (result, next) {
          var set = new Set(next);
          var filters = result.filter(function (item) {
            return !set.has(item);
          });
          return [...new Set(filters)]
        }, arg1);
      },
      minus: function (inCol1, inCol2) {
        var inter = this.intersect(inCol1, inCol2);
        return inCol1.filter(function (item) {
          return !inter.includes(item)
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCollection;
  }
})();
