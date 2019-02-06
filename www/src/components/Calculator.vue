<template>
<div class="Calculator">
  <input class="left" type="number" v-model="left" />
  <!--
  <select name="operator" v-model="operator">
    <option :value="Operators.ADD"> + </option>
    <option :value="Operators.SUB"> - </option>
    <option :value="Operators.MUL"> * </option>
    <option :value="Operators.DEV"> / </option>
  </select>
  -->
  <input class="right" type="number" v-model="right" />
  <div class="answer"> = {{ answer }} </div>
</div>
</template>

<script lang="ts">
// <script lang="ts" src="./calculator.script.ts">
import Vue from 'vue'

// enum Operators {
//   ADD, SUB, MUL, DEV
// }

interface IData {
  // Operators: typeof Operators
  left: string | null
  right: string | null
  // operator: Operators
}

export default Vue.extend({
  data(): IData {
    return {
      // Operators,
      left: null,
      right: null,
      // operator: Operators.ADD
    }
  },
  computed: {
    answer(): number {
      if (!this.left || !this.right) return 0

      const left = Number(this.left)
      const right = Number(this.right)

      return left + right

      /*
      switch (this.operator) {
        case Operators.ADD:
          return left + right
        case Operators.SUB:
          return left - right
        case Operators.MUL:
          return left * right
        case Operators.DEV:
          return left / right
        default:
          return 0
      }
      */
    }
  }  
})
</script>

<style scoped>
.Calculator {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

input {
  border: solid 1px #ddd;
  margin: 0 8px;
}
</style>
