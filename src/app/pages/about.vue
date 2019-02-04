<template>
	<div id="about">
		<h2>About ITGF</h2>
		<p>
			This is just a simple page to lookup whether or not a store-bought product may or may not contain gluten.
			Sure, it's easy enough to see if something lists "wheat" as an ingredient, but gluten can be found in lesser-known ingredients, 
			such as farrow or spelt. This site searches the USDA database using their provided API to analyze ingredients in popular store bought products.
			The ingredients of the products are compared to a gluten-containing list of foods provided by the Celiac Disease Foundation.
		</p>
		<h2>Why just gluten</h2>
		<p>
			Gluten is a heck of a protein. It seems unparalleled in it's ability to make foods like breads and cookies simultaneously chewy, airy, and moist.
			And while it has capabilities to be celebrated in baked goods, it can also be a dangerous threat to people whose bodies cannot process it effectively. 
			While allergies such as nut or shellfish can be more dangerous, gluten intolerance can be harder to abide by. 
			Wheat and similar products can often be found in unexpected places, such as soy sauce, and make up a dramatic portion of marketed foods. 
			It has become an interesting challenge to find food products that represent favorites in
			highly-desired categories but do not contain gluten. Furthermore, while manufacturers are required to mention allergen information on the package,
			sometimes this information is left out or is unclear.
		</p>
		<h2>A note about contamination</h2>
		<p>
			It is important to know that this site is a third-hand account of product ingredients and has no direct knowledge as to the accuracy
			of the data reported by the USDA nor to the state of the facilities producing these products. It is one thing for a company to
			not have a glutinous ingredient listed in their product, but it is another for them to be a completely gluten free facility or refrain from obfuscating an ingredients name.
		</p>
		<p>
			As a consumer, you should be aware of the risks of gluten-contamination. Contamination can occur when trace amounts of gluten-containing
			substances are left on equipment or preparers and even when gluten-containing grains are grown next to gluten free grains.
			While this site does its best to report possible contaminates, it has no way of knowing if a manufactured product is contaminated in this way.
			The USDA product list does not provide whether or not a product may contain trace amounts of wheat products. Therefore, you should
			use this site as a reference when curious about a product, not as a definitive guide to chemical composition of your food. To be truly sure,
			consult your doctor or nutritionist.
		</p>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>
	#about {
		width: 80%;
		max-width: 800px;
		margin: 0px auto;
	}
</style>