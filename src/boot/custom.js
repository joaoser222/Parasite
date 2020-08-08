import Vue from 'vue';
import { Dialog } from 'quasar';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);

const db = new PouchDB('parasite');
db.createIndex({
  index: {fields: ['table']}
});
Vue.prototype.$alert = (title,type,message,buttons={'ok':'OK'},func=()=>{})=>{
  let props = {
    title: title,
    message: message,
    persistent: true,
    class: `bg-${type}`,
  }
  for(let btn in buttons){
    props[btn]={label: buttons[btn],color: type};
  }
  Dialog.create(props).onOk(func);
};

Vue.prototype.$db = db;
window.db = db;
