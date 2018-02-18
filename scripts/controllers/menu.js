import {Controller} from 'stimulus'

export class MenuController extends Controller {

	static targets = ['item']

	connect() {
		// Click anywhere on the page to close the menu.
		document.documentElement.addEventListener('click', e => this.exclude(e))
	}

	exclude(event) {
		// Close all menus except the one triggering this event.
		for (const target of this.itemTargets) {
			if (target !== event.target && target.checked) {
				target.checked = false
			}
		}
	}
}
