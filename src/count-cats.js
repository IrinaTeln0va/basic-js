module.exports = function countCats(arr) {

  let result = 0;

  arr.forEach((subArray) => {
  	subArray.forEach((elem, index) => {
  		if (elem == '^^') {
  			result += 1;
  		}
  	});
  });

  return result;
};
