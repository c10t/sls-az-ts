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

<script lang="ts" src="./calculator.script.ts"></script>

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
