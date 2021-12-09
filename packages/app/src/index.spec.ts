import index from './index'

describe('project-perspective', () => {
	it('should tell vision', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="vision"]')).not.to.equal(null)
	})
	
	it('should tell why', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="why"]')).not.to.equal(null)
	})

	it('should tell what', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="what"]')).not.to.equal(null)
	})

	it('should tell who', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="who"]')).not.to.equal(null)
	})

	it('should have contribution link', () => {
		const element = new index().render();
		const link = element.querySelector('[data-test-id="contribute"]');
		expect(link.getAttribute('href')).to.equal("https://github.com/project-perspective")
	})

	it('I am present', () => {
		const element = new index().render();
		const input = element.querySelector('[data-test-id="IAM"]');
		expect(element.querySelector('[data-test-id="IAM"]')).not.to.equal(null)
	})

	it('I attaches to a object and creates subject', () => {
		const element = new index().render();
		const form = element.querySelector('[data-test-id="maya"]');
		expect(element.querySelector('[data-test-id="maya"]')).not.to.equal(null)
	})
})