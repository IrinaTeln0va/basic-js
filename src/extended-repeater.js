module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
    
	str = String(str);
	addition = String(addition);

    const result = [];
    let additionRes = addition;

    for (let j = 1; j < additionRepeatTimes; j++) {
    		additionRes += additionSeparator + addition;
    }
    
    const strRes = str + additionRes;

    for (let i = 0; i < repeatTimes; i++) {
    	result.push(strRes);
    }
    
    return result.join(separator);
};
  