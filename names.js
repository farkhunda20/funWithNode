// this data is shared
const Harry = "Harry";
const Tom = "Tom";
// ths data is not shared
const Jim = "Jim";
console.log(module);

module.exports = {
  Harry,
  Tom,
};

// export is an object inside another object     or module  is an object which holds a property called (exports) which is itself an onject
