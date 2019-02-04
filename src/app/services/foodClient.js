import axios from 'axios';

export default {
    methods: {
        getFood: function(foodId) {
            var endpoint = this.$configHelper.foodServiceEndpoint;
            var token = this.$configHelper.foodServiceToken;
            return axios({ 
                method: 'GET', 
                url: endpoint + 'reports/',
                params: {
                    ndbno: foodId,
                    type: 'f',
                    format: 'json',
                    api_key: token
                }})
                .then(
                    result => {
                        return result.data.report.food || {}; // TODO: reformat into custom definition
                    }, 
                    error => {
                        console.log(error); // Logging service here
                        throw error;
                    }
                );
        }
    }
}