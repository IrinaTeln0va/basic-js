module.exports = function getSeason(date) {

	if (typeof(date) == 'undefined') {
		return 'Unable to determine the time of year!'
	}

	let isRealDate = function (date) {
		return date.toString().includes(date.toDateString());
	}

	if (!isRealDate(date)) {
	  throw new Error();
	}

  let month = date.getMonth();

  if (month < 2 || month == 11) {
  	return 'winter';
  }

  if (month >= 2 && month < 5) {
  	return 'spring';
  }

  if (month >= 5 && month < 8) {
  	return 'summer';
  }

  if (month >= 8 && month < 11) {
  	return 'autumn';
  }
};
