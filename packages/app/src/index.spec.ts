import index from './index'

describe('project-perspective', () => {
	it('identify itself', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="vision"]').innerHTML).to.equal('Project Perspective')
	})
	
	it('should tell why', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="why"]').innerHTML).to.equal("Different perspectives lead to a better understanding")
	})

	it('should tell what', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="what"]').innerText).to.equal("Perspective.wiki is a decentralised graph wiki without any censorship")
	})

	it('should tell who', () => {
		const element = new index().render();
		expect(element.querySelector('[data-test-id="who"]').innerHTML).to.equal("Anyone can add and learn from each others perspectives")
	})

	it('should have contribution link', () => {
		const element = new index().render();
		const link = element.querySelector('[data-test-id="contribute"]');
		expect(link.getAttribute('href')).to.equal("https://github.com/project-perspective/monorepo")
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