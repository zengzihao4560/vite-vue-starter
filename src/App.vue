<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from '@/components/Main.vue'
import Home from '@/views/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
})
</script>

<style lang="stylus">
#app {
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  box-sizing border-box
  position relative
  height:100%;
	margin:0;
	padding:0;
}

</style>