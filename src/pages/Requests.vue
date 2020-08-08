<template>
    <q-page>
      <div class="row">
        <div
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-pa-sm"
        v-for="(item,key) in items"
        :key="key"
        >
          <q-card
            flat
            class="flex items-end"
            style="min-height: 200px; "
            dark
            @dblclick="dialog.request=true;readData(item);"
          >
          <q-toolbar class="self-start">
            <q-space />
            <q-btn flat round color="primary" icon="eva-trash" @click="deleteData(item._id)"/>
          </q-toolbar>

            <q-card-section
            class="row"
            style="background-color:rgba(255,255,255,0.1); width:100%;"
            >
              <q-btn
                fab
                unelevated
                style="position: absolute;right: 12px;transform: translateY(-75%);z-index: 99;"
                color="primary"
                icon="eva-arrow-right"
              />
              <div class="col-12"> {{item.name}}</div>
              <div class="col-12"> {{item.url}}</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-pa-sm" >
          <q-btn
            color="primary"
            style="min-height: 200px; width: 100%"
            @click="dialog.types=true;"
            unelevated
            stack
          >
            <q-icon center size="80px" name="eva-plus-circle" />
            <div>Criar novo</div>
          </q-btn>
        </div>

      </div>
      <q-dialog v-model="dialog.types">
        <q-card class="bg-primary">
          <q-card-section class="row items-center" style="min-width: 200px;min-height: 200px">
            <q-btn unelevated stack color="primary" @click="selected.type='request';dialog.request=true;" v-close-popup>
              <q-icon center size="40px" name="eva-swap" />
              <div>Requisição</div>
            </q-btn>
            <q-btn unelevated stack color="primary" @click="selected.type='socket';dialog.request=true;" v-close-popup>
              <q-icon center size="40px" name="eva-sync" />
              <div>Socket</div>
            </q-btn>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="dialog.request" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <div class="col-12">Nova Requisição</div>
            <div class="row">
              <div class="q-pa-sm col-xs-12 col-sm-6">
                <q-input standout="bg-primary text-white"  label="Nome" v-model="selected.name" dense/>
              </div>
              <div class="q-pa-sm col-xs-12 col-sm-6">
                <q-select standout="bg-primary text-white"  label="Método" v-model="selected.method" :options="methods" dense dropdown-icon="las la-angle-down"/>
              </div>
              <div class="q-pa-sm col-xs-12">
                <q-input standout="bg-primary text-white"  label="URL" v-model="selected.url" dense/>
              </div>
            </div>

                <q-tab-view :tabs="tabs">
                  <template v-slot:headers>
                    header
                  </template>
                  <template v-slot:params>
                    params
                  </template>
                  <template v-slot:body>
                  body
                  </template>
                </q-tab-view>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="primary" @click="selected = {};dialog.types=false;" v-close-popup />
            <q-btn flat label="Salvar" color="primary" @click="saveData();dialog.types=false;" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
</template>

<script>
import QTabView from 'components/QTabView.vue';
import Database from 'components/Database.js';
export default {
  extends: Database,
  name: 'Requests',
  components:{
    QTabView
  },
  data:()=>({
    _this: this,
    dialog: {
      types: false,
      request: false
    },
    table: 'requests',
    tabs:[
        {name:'headers',label:'Cabeçalho',icon:'eva-hash'},
        {name:'params',label:'Parâmetros',icon:'eva-at'},
        {name:'body',label:'Corpo',icon:'eva-code'},
    ],
    types:[
      {label:'Requisição',value:'request'},
      {label:'WebSocket',value:'socket'},
    ],
    methods:['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  })
}
</script>
