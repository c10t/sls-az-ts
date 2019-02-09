<template>
  <section class="container">
    <p>Hello, {{ name }}!</p>
    <HelloWorld />
  </section>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },

  data() {
    return { name: 'World' }
  }
}
</script>
