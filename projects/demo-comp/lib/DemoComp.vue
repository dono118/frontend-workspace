<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  color: 'red' | 'blue'
}>()

const text = ref<string>('这是默认内容')
function onChangeContent(content: string) {
  text.value = content
}
defineExpose({
  onChangeContent
})
</script>

<template>
  <div class="demoComp" :style="{ color }">{{ text }}</div>
</template>

<style lang="scss" scoped>
.demoComp {
  width: 300px;
  height: 300px;
  border: 1px solid lightblue;
}
</style>
