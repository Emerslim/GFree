import axios from 'axios';

export default {
    methods: {
        search: function(query, page) {
            var endpoint = this.$configHelper.foodServiceEndpoint;
            var token = this.$configHelper.foodServiceToken;
            var recordsPerPage = 40
            return axios({ 
                method: 'GET', 
                url: endpoint + 'search/',
                params: {
                    format: 'json',
                    q: query,
                    ds: 'Branded Food Products',
                    sort: 'n',
                    max: recordsPerPage,
                    offset: (page * recordsPerPage) || 0,
                    api_key: token
                }})
                .then(
                    result => {
                        return result.data.list
                    }, 
                    error => {
                        console.log(error); // Logging service here
                        throw error;
                    }
                );
        }
    }
}