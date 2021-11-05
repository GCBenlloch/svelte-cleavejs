import Cleave from 'cleave.js';

export default function(node, options) {
	let cleave;

	function destroy() {
		cleave && cleave.destroy();
	}

	function update(options) {
		
		if (!options) {
			return cleave && destroy();
		}
		cleave && destroy();
		cleave = new Cleave(node, options);
		
		console.log(cleave);
	}

	update(options);

	return { update, destroy };
}