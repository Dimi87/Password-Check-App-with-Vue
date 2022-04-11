Vue.createApp({
  data() {
    return {
      inputType: "password",
      buttonText: "Show Password",

      password1: "",
      password2: "",
    };
  },
  methods: {
    changeType() {
      if (this.inputType === "password") {
        this.inputType = "text";
        this.buttonText = "Hide Password";
      } else {
        this.inputType = "password";
        this.buttonText = "Show Password";
      }
    },
  },
  computed: {
    passwordsEqual() {
      return this.password1 === this.password2 && this.password1.length > 0;
    },
    passwordsContainUppercase() {
      return /[A-Z]/.test(this.password1);
    },
    passwordsContainLowercase() {
      return /[a-z]/.test(this.password1);
    },
    passwordsContainNumbers() {
      return /[0-9]/.test(this.password1);
    },
    longs() {
      return this.password1.length >= 10;
    },
  },
}).mount("#app");
