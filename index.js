function compose(){var e=[].slice.call(arguments),c=this;return function(){return e.reduceRight(function(e,o){return o.apply(c,[].concat(e))},[].slice.call(arguments))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.compose=compose;