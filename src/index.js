Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = compose;

function compose() {
  var fns = [].slice.call(arguments);
  var context = this;
  return function() {
    return fns.reduceRight(function(args, fn) {
      return fn.apply(context, [].concat(args));
    }, [].slice.call(arguments));
  };
}
