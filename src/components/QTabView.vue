<template>
<div style="min-width: 100%">
  <q-toolbar style="overflow-x: auto">
      <q-btn
        v-for="(tab,index) in tabs"
        :key="index"
        :icon="tab.icon"
        :label="tab.label"
        no-caps
        @click="selected_tab = tab.name"
        unelevated
        color="primary"
        stack
        :outline="selected_tab != tab.name"
        :size="$q.screen.width>360?'sm':'xs'"
        class="q-mr-xs"
        square
      />
  </q-toolbar>
  <q-card flat bordered class="q-pa-sm row">
    <div class="q-pa-sm col-12" v-for="(tab,index) in tabs" :key="index" v-show="selected_tab == tab.name" style="min-height: 200px;">
      <slot :name="tab.name"></slot>
    </div>
  </q-card>
</div>
</template>

<script>

export default {
  name: 'QTabView',
  props: ['tabs'],
  data:()=>({
    selected_tab:'',
    dialog: false,
    loading: false,
  })
  ,mounted(){
    this.selected_tab = this.tabs[0].name;
  }

}
</script>
