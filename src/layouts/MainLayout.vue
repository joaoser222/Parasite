<template>
  <q-layout view="lHh Lpr lFf">
      <q-drawer
        show-if-above
        :mini="icon_mode"

        :width="200"
        :breakpoint="500"
        bordered
        dark
      >
        <q-list>
          <q-item clickable v-ripple @click="icon_mode = !icon_mode">
            <q-item-section avatar>
              <q-icon color="primary" name="eva-home"/>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item
          class="q-ma-sm rounded-borders"
          v-for="(item,index) in $router.options.routes.find(route=>route.name=='Home').children"
          clickable
          v-ripple
          :key="index"
          :to="item.path"
          >
            <q-item-section avatar>
              <q-icon color="primary" :name="item.icon"/>
            </q-item-section>
            <q-item-section>{{item.name}}</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

    <q-page-container>
      <transition name="slither">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      icon_mode: true,
    }
  }
}
</script>
<style>
.slither-enter-active, .slither-leave-active {
  transition: transform 1s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}
</style>
