var app = new Vue({
    el: '#app',
    data: {
        textMessage: '',
        storeNoteLists: [],
        showNoteLists: '',
        count:0
    },
    methods: {
        addNote: function(){
            if( this.textMessage ){
                this.storeNoteLists.push({message:this.textMessage,id:this.count})
                //this.showNote()
                this.textMessage = ""
                this.$refs.inputMessage.focus()
                this.count++
            }
        },
        deleteNote: function(id){
            if( this.storeNoteLists.length == 1 ){
                this.storeNoteLists=[]
                this.count=0
            }else{
                this.storeNoteLists.splice(id,1)
            }
            this.$refs.inputMessage.focus()
        }
    }
})