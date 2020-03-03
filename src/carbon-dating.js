const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const ln2 = 0.693;

const radioactiveDecay = ln2 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {

	if (typeof(sampleActivity) !== 'string' || 
		isNaN(parseFloat(sampleActivity)) || 
		parseFloat(sampleActivity) <= 0 || 
		parseFloat(sampleActivity) >= 15) {
		
		return false;
	}

  const result = (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / radioactiveDecay;
  
  return Math.ceil(result);
};
