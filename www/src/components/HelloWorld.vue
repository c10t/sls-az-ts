<template>
<div>
  <span class="first">{{ first }}</span>, <span class="second">{{ second }}</span>
</div>
</template>
<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      first: 'Hello',
      second: 'World'
    }
  }
})
</script>
<style scoped>
.first {
  color: #f78055;
}

.second {
  color: #ac94e8;
}
</style>