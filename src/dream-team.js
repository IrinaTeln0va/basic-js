module.exports = function createDreamTeam(arr) {

	if (!(arr instanceof Array)) {
		return false;
	}

  const result = [];

  arr.forEach((elem, index) => {
  	if (typeof(elem) == 'string') {
  		result.push(elem.trim()[0].toUpperCase());
  	}
  });

  return result.sort().join('');
};