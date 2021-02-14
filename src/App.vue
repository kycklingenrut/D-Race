<template>
  <div id="app">
    <div id="nav">
      <b-nav>
        <b-nav-item class="homeBtn" to="/">Home</b-nav-item>
        <b-nav-item class="navBtn" to="/winners">Winners</b-nav-item>
        <b-nav-item class="navBtn" to="/judges">Judges</b-nav-item>
      </b-nav>
    </div>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from './components/Footer.vue'
 
export default {
    components: { myFooter },
  
}
</script>

<style>
#app {
  font-family: "Fjalla One", sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #B963F2;
}

#nav a {
  font-weight: bold;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
.homeBtn {
  font-size: 24px;
  padding-right: 25px;
}
.navBtn {
  margin-top: 7px;
}
</style>
