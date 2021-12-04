import { html, define } from 'hybrids';
import globals from './index.css'

const render = () => html`
	<div class="w-screen font-sans py-12 background bg-indigo-900 h-screen flex justify-center items-center">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<h2 data-test-id="logo" class="text-base text-indigo-300 font-semibold tracking-wide uppercase">Project Perspective</h2>
				<p data-test-id="heading" class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
					Different perspectives lead to a better understanding
				</p>
				<p data-test-id="description" class="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
					Perspective.wiki is a decentralised graph wiki without censorship. <br />Anyone can add and learn from each others perspectives
				</p>
				<a data-test-id="github-link" class="text-white my-8 inline-block" href="https://github.com/project-perspective">github</a>
			</div>
		</div>
	</div>
`.style(globals)

const HomePage = define<HTMLElement>('home-page', { render })

export default HomePage;