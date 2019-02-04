<template>
	<div id="foodContainer">
		<p v-if="loading">Loading...</p>
		<transition name="food" mode="out-in">
			<div v-if="food">
				<div v-if="!isGlutenFree" class="result result-bad">
					<i class="material-icons">error</i>
					<h2>That contains gluten.</h2>
				</div>
				<div v-else-if="isGlutenPossible" class="result result-warn">
					<i class="material-icons">info</i>
					<h2>That doesn't naturally contain gluten, but contamination is possible.</h2>
				</div>
				<div v-else class="result result-good">
					<i class="material-icons">check_circle</i>
					<h2>That is gluten free.</h2>
				</div>
				<div id="ingredients">
					<h3>Ingredients:</h3>
					<p>
						<!--TODO: Ingredients adjacent to parenthesis are including the parenthesis in the span -->
						<template v-for="(ingredient, index) in food.ing.desc.split(/[\s,]+/)">
							<span v-bind:class="{ 'result-bad': glutens.find(gluten => ingredient.toLowerCase().includes(gluten.toLowerCase()))}" v-bind:key="index">
								{{ingredient}}
							</span>
						</template>
					</p>
				</div>
			</div>
			<p v-else-if="error" class="result-bad">{{error}}</p>
		</transition>
	</div>
</template>

<script>
	import FoodClient from '../services/foodClient';
	import AllergenClient from '../services/allergenClient';

	export default {
		props: {
			foodId: String
		},
		data() {
			return {
				loading: true,
				error: null,
				food: null,
				glutens: [],
				contaminates: []
			}
		},
		computed: {
			isGlutenFree: function() {
				return this.glutens.every(gluten => !this.food.ing.desc.toLowerCase().includes(gluten.toLowerCase()));
			},
			isGlutenPossible: function() {
				return !this.food.ing.desc.toLowerCase().includes('gluten-free')
					&& !this.food.ing.desc.toLowerCase().includes('gluten free')
					&& this.contaminates.find(risk => this.food.ing.desc.toLowerCase().includes(risk.toLowerCase()));
			}
		}, 
		watch: {
			'foodId': function() {
				this.fetchData();
			}
		},
		mixins: [FoodClient, AllergenClient],
		created() {
			this.fetchData();
		},
		methods: {
			fetchData: function() {
				this.food = null;
				this.getFood(this.foodId)
					.then(result => {
						this.food = result;
						this.loading = false;
					})
					.catch(error => {
						this.error = "There was an error retrieving the ingredients. Please try again."
					});
				this.glutens = this.getGlutens();
				this.contaminates = this.getContaminates();
			}
		}
	}
</script>

<style scoped>
#foodContainer {
	text-align: left;
}

#ingredients {
	margin: 0px auto;
}

.result-good {
	color: #4F8A10;
}

.result-warn {
	color: #9F6000;
}

.result-bad {
    color: #D8000C;
}

.result {
	text-align: center;
}

.result i {
	margin: 5px;
}

.result i, .result h2 {
	display: inline-block;
	vertical-align: middle;
}

/*Animations*/
.food-enter-active, .food-leave-active  {
  transition: all .4s ease;
  max-height: 600px;
  overflow: hidden;
}
.food-enter, .food-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>