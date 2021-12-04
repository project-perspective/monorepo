import { html, define } from 'hybrids';
import globals from './index.css'

const render = () => html`
	<main class="w-screen font-sans background bg-indigo-900 h-screen flex flex-col justify-center">
		<h1 class="italic text-white text-3xl self-center flex-grow-0">Different perspectives lead to better knowledge</h1>
		<p class="text-white text-lg self-center my-8 flex-grow-0">Perspective is a decentralised graph wiki without censorship. <br />Anyone can add and learn from each others perspectives</p>
	</main>
`.style(globals)

define('home-page', { render })