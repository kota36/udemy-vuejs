export const tokyoNumber = {
  data() {
    return {
      title: "welcome to Tokyo",
      subTitle: "Tokyo is City",
      number: 0
    };
  },
  filters:  {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
}