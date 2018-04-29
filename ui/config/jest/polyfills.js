
// Fix issues with request animation frame being undefined.
if (typeof requestAnimationFrame === 'undefined') {
	global.requestAnimationFrame = function (cb) {
		return setTimeout(cb, 0);
	};
}
