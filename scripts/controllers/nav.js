import {Controller} from 'stimulus'

export class TopNavController extends Controller {

	static targets = ['toggler']

	toggle() {
		const curr = this.togglerTarget.getAttribute('aria-expanded')
		this.togglerTarget.setAttribute(
			'aria-expanded', curr === 'true' ? 'false' : 'true',
		)
	}
}
