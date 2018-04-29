export const SWITCH_VIEW = 'SWITCH_VIEW';

/**
 * Switch out content view.
 *
 * @param {String} name 
 * @param {Object} parameters
 * @return {Object}
 */
export const switchView = (name, parameters) => ({
	type: SWITCH_VIEW,
	name,
	parameters,
});
