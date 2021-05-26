<template>
 <div>
     <section class="hero is-medium" :style="{ backgroundImage: `url(${image})`}">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Celebrate Uniquesness</h1>
          <h2 class="is-size-3 has-text-weight-light">
            Beautiful mobile covers that <br>
            reflect your personality.
          </h2>
        </div>
      </div>
    </section>
    <section class="section category-list">
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth">
            <div class="box">
              <h2 class="subtitle has-text-weight-bold has-text-black">Filter by type:</h2>
              <div class="field" v-for="type in types" :key="type">
                <b-checkbox v-model="selectedTypes"
                  :native-value="type" class="is-warning">{{ type }}</b-checkbox>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns is-multiline is-variable is-2">
              <div class="column is-one-third" v-for="product in products" :key="product._id">
                <product-item :product="product"></product-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="Free"
        icon="github"
      >
        Open source on <a href="vue-nuxt-cosmic-store">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js,
        </a> <a href="https://www.cosmicjs.com/">
          Cosmic JS
        </a> and <a href="http://bulma.io/">
          Buefy
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency (much)
      </card>
    </div>
  </section>
  </div>
</template>

<script>
import heroImg from "assets/hero.jpg";
export default {
  name: 'HomePage',
   data() {
    return {
      image: heroImg,
    };
  }


}
</script>

<style scoped>
.hero-is-medium {
background-image: 'hero.jpg'
}
</style>
