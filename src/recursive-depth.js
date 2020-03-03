  module.exports = class DepthCalculator {
    calculateDepth(arr) {
	    let depth = 1;

	    for (let i = 0; i < arr.length; i++) {
	        if (Array.isArray(arr[i])) {
	            const currentDepth = this.calculateDepth(arr[i]) + 1;

	            if (currentDepth > depth) {
	            	depth = currentDepth;
	            }
	        }
	    }

	    return depth;
	}
};