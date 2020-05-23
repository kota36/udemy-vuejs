<template>
  <div>
    <lavel for="title">Ivent Title</lavel>
      <input id="title" type="text" :value="value" @input="$emit('input', $event.target.value)">

      <pre> {{value}}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"]
}
</script>