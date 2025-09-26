<script setup lang="ts">
import { ref } from 'vue'

const loginState = ref<boolean>(false)
const LoginCallbakc = () => {
  loginState.value = true
}
const goBack = () => {
  loginState.value = false
}
</script>
<template>
  <div>
    <h3>login</h3>
    <div><button @click="LoginCallbakc">login</button></div>
    <div><button @click="goBack">cancel</button></div>
  </div>
</template>
