<template>
	<header>
		<ul class="navigation">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/about">About</router-link></li>
		</ul>
		<h1>Is that gluten free?</h1>
	</header>
</template>

<script>
	export default {
	}
</script>

<style scoped>
.navigation {
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	text-align: right;
}

.navigation li {
	display: inline-block;
	padding: 5px;
}

.navigation li a {
	text-decoration: none;
}

.navigation li a, .navigation li a:visited {
	color: #333;
}

.navigation li a:hover {
	cursor: pointer;
	color: #111;
}

.navigation + h1 {
	width: 100%;
	text-align: center;
}
</style>