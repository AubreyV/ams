<template>
  <div class="d-flex h-100" id="login-page">
    <div class="d-flex">
      <div class="d-flex flex-column flex-even text-center carousel-container">
        <Carousel></Carousel>
        <div class="quote-of-the-day p-5">"Work smarter, not harder" - Carl Barks</div>
      </div>
      <div class="d-flex flex-column flex-even justify-content-center login-form">
        <form class="p-5" @submit.prevent="login">
          <div class="form-group text-center">
            <ValidationProvider name="email" ref="email" rules="required|email">
              <input
                type="text"
                class="form-control mx-auto w-50"
                placeholder="user@example.com"
                v-model="credentials.email"
                :class="{ 'is-invalid': hasEmailErrors }"
              />
              <span class="invalid-feedback">{{ errors.email }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group text-center">
            <ValidationProvider name="password" ref="password" rules="required|min:6">
              <input
                type="password"
                class="form-control mx-auto w-50"
                placeholder="password"
                v-model="credentials.password"
                v-bind:class="{ 'is-invalid': hasPasswordErrors }"
              />
              <span class="invalid-feedback">{{ errors.password }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group pt-4 text-center">
            <button class="btn btn-secondary" type="submit" :disabled="isRequesting">Login</button>
          </div>
          <div class="form-group text-center text-center">
            <button class="btn btn-default">QR Scan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";

export default {
  components: {
    Carousel
  },
  data: function() {
    return {
      isRequesting: false,
      credentials: {
        email: "",
        password: ""
      },
      errors: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    hasEmailErrors() {
      return this.errors.email != "";
    },
    hasPasswordErrors() {
      return this.errors.password != "";
    }
  },
  methods: {
    validate: async function() {
      let email = [];
      let password = [];

      await this.$refs.email.validate().then(function(value) {
        email = value.errors;
      });

      await this.$refs.password.validate().then(function(value) {
        password = value.errors;
      });

      return {
        email: email,
        password: password
      };
    },
    login: async function() {
      const errors = await this.validate();
      this.isRequesting = true;
      if (errors.email.length > 0 || errors.password.length > 0) {
        this.errors.email = errors.email[0];
        this.errors.password = errors.password[0];
      } else {
        axios
          .post(
            "/api/login",
            {
              email: this.credentials.email,
              password: this.credentials.password
            },
            {
              headers: {
                Accept: "application/json"
              }
            }
          )
          .then(response => {
            this.isRequesting = false;
            toast.fire({
              type: "success",
              title: response.data
            });
            this.$router.push({ path: "/employee/dashboard" });
            this.$router.go();
          })
          .catch(({ response }) => {
            this.isRequesting = false;
            toast.fire({
              type: "error",
              title: response.data
            });
          });
      }
    }
  }
};
</script>