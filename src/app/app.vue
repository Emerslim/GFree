<template>
	<div id="app">
		<app-header />
		<router-view></router-view>
		<app-footer />
	</div>
</template>

<script>
	import AppHeader from './components/appHeader.vue';
	import AppFooter from './components/appFooter.vue';

	export default {
		name: 'app',
		components: {
			AppHeader,
			AppFooter
		}
	}
</script>

<style>
	html, body {
		background-color: #f9f9f9;
		color: #333;
    font-family: Helvetica, Arial, sans-serif;
    color: #333;
	}

  body {
    width: 80%;
    margin: 0px auto;
		margin-top: 20px;
  }
	
	@media only screen 
	and (max-device-width: 1440)
	and (orientation: portrait) {
		html {
			font-size: 2em;
		}
		body {
			width: 100%;
			padding: 10px;
			margin: 0;
		}
		h1, h2, h3, h4 {
			font-size: 2.2em !important;
			width: auto !important;
		}

		div, 
		p, 
		header, 
		table,
		input, button {
			max-width: 100% !important;
			width: auto !important;
			margin: 0 !important;
			font-size: 100% !important;
		}

		input, button {
			height: 100px !important;
			font-size: 1.4em !important;
			margin-bottom: 10px !important;
		}

		input {
			width: 75% !important;
		}

		button {
			width: 20% !important;
		}

		.material-icons {
			font-size: 48px !important;
			margin: 0 !important;
			padding: 0 !important;
			width: auto !important;
		}
	}

	@media only screen and (max-device-width: 480px) { 
		html {
			-webkit-text-size-adjust: none;
		}
	}
</style>