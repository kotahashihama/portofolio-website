<template>
  <header class="fixed-top" data-scroll-header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">Kota Hashihama</router-link>

        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link
                to="/about-me"
                class="nav-link text-uppercase"
                exact-active-class="active"
              >About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/skills"
                class="nav-link text-uppercase"
                exact-active-class="active"
              >Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/works"
                class="nav-link text-uppercase"
                exact-active-class="active"
              >Works</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link text-uppercase"
                exact-active-class="active"
              >Contact</router-link>
            </li>
          </ul>

          <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li class="nav-item">
              <a
                class="nav-link p-2"
                href="https://github.com/kotahashihama"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link p-2"
                href="https://twitter.com/kotahashihama"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link p-2"
                href="https://www.linkedin.com/in/kotahashihama/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>


<style lang="scss">
</style>
