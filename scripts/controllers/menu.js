import {Controller} from 'stimulus'

export class MenuController extends Controller {

	static targets = ['item']

	exclude(event) {
		this.itemTargets.forEach(target => {
			if (target !== event.target && target.checked) {
				target.checked = false
			}
		})
	}
}
