(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;
  var NxSet = nx.Set || require('next-set');

  var NxCollection = nx.declare('nx.Collection', {
    statics: {
      union: function () {
        var target = arguments[0];
        var length = arguments.length;
        for (var index = 1; index < length; index++) {
          var element = arguments[index];
          target = target.concat(element);
        }
        return new NxSet(target).toArray();
      },
      intersect: function () {
        var arg1 = arguments[0];
        var args_ = ARRAY_PROTO.slice.call(arguments,1);
        return args_.reduce(function(result,next){
          var nextSet = new NxSet(next);
          var filters = result.filter(function(item){
            return nextSet.has(item);
          });
          return new NxSet(filters).toArray();
        },arg1);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCollection;
  }

}());
