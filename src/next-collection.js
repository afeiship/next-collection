(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var _;
  _ = nx.concat || require('next-concat');
  _ = nx.unique || require('next-unique');

  NxCollection = nx.declare('nx.Collection',{
    statics:{
      union: function(){},
      intersection: function(){},
      difference: function(){}
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.Collection;
  }

}());
