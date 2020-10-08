<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

    <div 
      class="message" 
      v-if="submitted"
    >
      {{ username }}さん、お問い合わせ、ありがとうございます。
    </div>
  </div>
</template>

<script>
  export default {
    name: "FormSubmitter",

    data() {
      return {
        username: '',
        submitted: false
      }
    },

    methods: {
      handleSubmitAsync() {
        return this.$http.get("/api/v1/register", { username: this.username })
        .then(() => {
          // メッセージを表示するなど
          this.submitted = true
        })
        .catch(() => {
          throw Error("Something went wrong", e);
          // エラーハンドル
        })
      }
    }
  }
</script>

