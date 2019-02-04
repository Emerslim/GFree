const config = {
    // Values replaced by webpack
    foodServiceToken: __FOOD_SERVICE_TOKEN__,
    foodServiceEndpoint: __FOOD_SERVICE_ENDPOINT__
}

export default {
    install: function(Vue, options) {
        Vue.configHelper = config;
        Vue.prototype.$configHelper = config;
    }
}