<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Greeting></Greeting>
    <!-- <SubmittButton></SubmittButton> -->
    <SubmitButton msg="button" :isAdmin="true"></SubmitButton>
    <NumberRenderer :even="true"></NumberRenderer>
    <FormSubmitter></FormSubmitter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Greeting from '@/components/Greeting.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import NumberRenderer from '@/components/NumberRenderer.vue'
import FormSubmitter from '@/components/FormSubmitter.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Greeting,
    SubmitButton,
    NumberRenderer,
    FormSubmitter
  }
}
</script>
