var app = new Vue({
    el:'#app',
    data:{
        info:null,
        hasError:false,
        loading:true
    },
    mounted(){
        var url = "https://api.coindesk.com/v1/bpi/currentprice.json"

        axios
        .get(url)
        // .then(function(response){
        //     this.info = response
        // })
        .then(response => (this.info = response.data.bpi))  
        .catch(error => this.hasError = true)
        .finally(() => this.loading = false)
    },
    filters:{
        currencyDecimal(value){
            return value.toFixed(2)
        }
    }

})


