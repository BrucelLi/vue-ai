<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)
const { increment } = counter

const buttonClick = () => {
  console.log('buttonClick:', count.value)
  increment()
}
</script>

<template>
  <div>
    <h1>counter</h1>
    <div>
      <p>
        counter num: <span class="">{{ count }}</span>
      </p>
      <p>counter double num: {{ doubleCount }}</p>
      <p><button @click="buttonClick">increment</button></p>
    </div>
  </div>
</template>

<style scoped></style>
