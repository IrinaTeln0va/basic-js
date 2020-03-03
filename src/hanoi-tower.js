module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	turnsSpeed = changeToSeconds(turnsSpeed);
	function changeToSeconds(valueInHours) {
		return valueInHours / (60 * 60);
	}

    const turnsNumber = Math.pow(2, disksNumber) - 1;
    const time = (turnsNumber / turnsSpeed);
    
    return {"turns": turnsNumber, "seconds": time};
}