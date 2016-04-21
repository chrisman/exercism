"use strict";

module.exports = function(){

  function transform(o) {
    let result = {};
    Object.keys(o).forEach( k => {
      o[k].forEach( letter => {
        result[letter.toLowerCase()] = +k;
      });
    });
    return result;
  }

  return {
    transform: transform
  }
}
