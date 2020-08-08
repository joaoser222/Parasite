export default {
  name:'Database',
  data:()=>({
    selected:{},
    items:[],
    table: null
  }),
  methods:{
    saveData(){
      let _this = this;
      if(_this.selected._id){
        _this.$db.put(_this.selected);
      }else{
        _this.$db.post(Object.assign({},_this.selected,{'table':_this.table}));
      }
      _this.selected = {};
      _this.listData();
    },
    readData(data){
      let _this = this;
      _this.selected = Object.assign({},data);
    },
    deleteData(id){
      let _this = this;
      _this.$db.get(id).then((doc)=>_this.$db.remove(doc));
      _this.listData();
    },
    listData(){
      let _this = this;
      _this.$db.find({
        selector: {
          table: {$eq: _this.table}
        }
      }).then(resp=>_this.items=resp.docs);
    }
  },
  mounted(){
    this.listData();
  }
}
