var ArrayPrototypeSlice = Array.prototype.slice;
Function.prototype.bind = function(otherThis) {
	var baseArgs = ArrayPrototypeSlice.call(arguments, 1),
		baseArgsLength = baseArgs.length,
		fToBind = this,
		fNOP = function() {},
		fBound = function() {
			baseArgs.length = baseArgsLength; // reset to default base arguments
			baseArgs.push.apply(baseArgs, arguments);
			return fToBind.apply(
				fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
			);
		};

	if (this.prototype) {
		// Function.prototype doesn't have a prototype property
		fNOP.prototype = this.prototype;
	}
	fBound.prototype = new fNOP();

	return fBound;
};