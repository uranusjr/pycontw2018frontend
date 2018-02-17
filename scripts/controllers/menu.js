import {Controller} from 'stimulus'

export class MenuController extends Controller {

	static targets = ['item']

	connect() {
		document.documentElement.addEventListener('click', e => this.exclude(e))
	}

	exclude(event) {
		this.itemTargets.forEach(target => {
			if (target !== event.target && target.checked) {
				target.checked = false
			}
		})
	}
}
