<template>
	<div id="searchContainer">
		<input 
			type="text" 
			placeholder="Search products by name or UPC" 
			v-model="keyword"
			v-on:keyup.enter="searchFood" />
		<button type="button" v-on:click="searchFood">Search</button>
		<transition name="foodList" mode="out-in">
        	<foodList v-bind:foods="foods" v-bind:selectedFoodId="selectedFoodId" v-if="foods" @foodSelected="foodSelected" @pageSelected="pageSelected" />
			<p v-else-if="error" class="error">{{error}}</p>
		</transition>
		<transition name="infoPanel" mode="out-in">
			<div v-if="selectedFoodId" class="infoPanel">
				<i id="panelClose" class="material-icons" v-on:click="selectedFoodId = null">close</i>
				<foodDetail v-bind:foodId="selectedFoodId" />
			</div>
		</transition>
	</div>
</template>

<script>
	import SearchClient from '../services/searchClient';
	import FoodList from '../components/foodList.vue';
	import FoodDetail from '../components/foodDetail.vue';

	export default {
		data() {
			return {
				keyword: null,
				selectedFoodId: null,
				foods: null,
				page: 0,
				error: null
			}
		},
		mixins: [SearchClient],
		methods: {
			searchFood() {
				this.selectedFoodId = null;
				this.foods = null;
				this.search(this.keyword, this.page)
					.then(result => {
						this.foods = result || {};
					})
					.catch(error => {
						this.error = "An error occurred during the search. Please try again.";
					});
			},
			foodSelected(food) {
				this.selectedFoodId = food.ndbno;
			},
			pageSelected(page) {
				this.page = page;
				this.searchFood();
			}
		},
		components: {
			FoodList,
			FoodDetail
		}
	}
</script>

<style scoped>
#searchContainer {
	width: 100%;
	text-align: center;
}

#searchContainer input {
	max-width: 500px;
	width: 50%;
	padding: 10px;
	margin: 20px 0 20px 0;
}

#searchContainer button {
	padding: 10px;
	margin: 20px 20px 20px 0;
}

.infoPanel {
	position: fixed;
	width: 75%;
	bottom: 0;
	background-color: white;
	border: 1px solid #333;
	padding: 20px;
}

#panelClose {
	margin: 15px;
	padding: 10px;
	width: 25px;
	text-align: center;
	position: absolute;
	right: 0;
	top: 0;
}
#panelClose:hover {
	cursor: pointer;
	color: #111;
}

/*Animations*/
.infoPanel-enter-active, .infoPanel-leave-active, .foodList-enter-active, .foodList-leave-active  {
  transition: all .4s ease;
  overflow: hidden;
}
.infoPanel-enter-active, .infoPanel-leave-active {
	max-height: 600px;
}
.foodList-enter-active, .foodList-leave-active {
	max-height: calc(100%);
}

.infoPanel-enter, .infoPanel-leave-to, .foodList-enter, .foodList-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.error {
	color: #D8000C;
}
</style>