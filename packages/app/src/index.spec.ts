import index from './index'

describe('index', () => {
	it('should contain logo', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="logo"]')).not.to.equal(null)
	})
	
	it('should contain heading', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="heading"]')).not.to.equal(null)
	})

	it('should contain description', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="description"]')).not.to.equal(null)
	})

	it('should have correct github link', () => {
		const element = new index().render();
		const link = element.querySelector('[data-test-id="github-link"]');
		expect(link.getAttribute('href')).to.equal("https://github.com/project-perspective")
	})
})