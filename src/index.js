function sumArrays(arr1, arr2) {
  //join arrays into integers and add
  sumInt = parseInt(arr1.join("")) + parseInt(arr2.join(""));

  //convert sum into array of integers
  return sumInt
    .toString()
    .split("")
    .map(function(i) {
      return parseInt(i);
    });
}

exports.module = {
  sum: sumArrays
};
