<template>
    <div>
        <table id="foodList" v-if="foods && foods.item && foods.item.length > 0">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Brand</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="food in foods.item" v-bind:key="food.ndbno" v-on:click="foodSelected(food)" v-bind:class="{selected: food.ndbno == selectedFoodId}">
                    <td class="name">{{food.name}}</td>
                    <td class="brand">{{food.manu}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2">
                        <!-- TODO: Change to actual pager and hide excessive page numbers -->
                        <ul class="pager" v-if="pageCount > 1">
                            <li v-for="page in pageCount" v-bind:key="page">
                                <span v-bind:class="{current: page === currentPage}" v-on:click="pageSelected(page)">{{page}}</span>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tfoot>
        </table>
        <p v-else>No results</p>
    </div>
</template>

<script>
export default {
    props: {
        foods: Object,
        selectedFoodId: String
    },
    computed: {
        pageCount: function() {
            if (!this.foods) { return 0; }
            return Math.floor(this.foods.total/this.foods.item.length);
        },
        currentPage: function() {
            if (!this.foods) { return 0; }
            console.log(this.foods);
            return Math.floor(this.foods.start/this.foods.item.length);
        }
    },
    methods: {
        foodSelected: function(food) {
            this.$emit('foodSelected', food);
        },
        pageSelected: function(page) {
            this.$emit('pageSelected', page);
        }
    }
}

</script>

<style scoped>
#foodList {
    text-align: left;
    width: 100%;
    border-collapse: collapse;
}

#foodList td, #foodList th {
    padding: 10px;
}

#foodList tbody tr + tr {
    border-top: 1px solid #333;
}

#foodList tbody tr:hover {
    background-color: lightgray;
    color: #333;
    cursor: pointer;
}

#foodList tbody tr:hover {
    background-color: lightgray;
    cursor: pointer;
}

#foodList tfoot {
    text-align: right;
}

.brand {
    max-width: 450px;
    width: auto;
}

.pager {
    margin: 0;
    padding: 0;
    list-style: none;
}

.pager li {
    display: inline-block;
    padding: 3px;
}
.pager li:hover {
    cursor: pointer;
    color: #111;
}

.pager li .current {
    color: lightslateGray;
    font-weight: bold;
}

.selected {
    background-color: lightslategray;
    color: lightgray;
}
</style>