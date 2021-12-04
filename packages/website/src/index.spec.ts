import index from './index'

describe('index', () => {
	it('should contain heading', () => {
		const update = new index().render();
		// update(host, div)
		const heading = update.querySelector('[data-test-id="heading"]');
		expect(heading).not.to.equal(null)
	})
	it('should contain description', () => {
		const update = new index().render();
		// update(host, div)
		const heading = update.querySelector('[data-test-id="description"]');
		expect(heading).not.to.equal(null)
	})
})