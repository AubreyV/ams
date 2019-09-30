<template>
  <div class="d-flex h-100" id="login-page">
    <div class="d-flex">
      <div class="d-flex flex-column flex-even text-center carousel-container">
        <Carousel></Carousel>
        <div class="quote-of-the-day p-5">"Work smarter, not harder" - Carl Barks</div>
      </div>
      <div class="d-flex flex-column flex-even justify-content-center login-form">
        <form class="p-5" action>
          <div class="form-group">
            <input type="text" class="form-control mx-auto w-50" placeholder="user@example.com" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control mx-auto w-50" placeholder="******" />
          </div>
          <div class="form-group pt-4 text-center">
            <button class="btn btn-secondary" type="submit">Login</button>
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
  }
};
</script>