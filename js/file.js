new Vue({
    el: ' .arrow-up',
    methods : {
        goTop : function( ){
            document.body.scrollTop = 0; 
        }
    }
});
new Vue({
    el: '.navbar ',
    data: {
        searchResult: '',
    },
    methods:{
        validate :function(){
            if ( this.searchResult =='' ){
                alert('Please enter search field ');
            }
        }
    }
  })