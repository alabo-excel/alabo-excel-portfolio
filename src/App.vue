<template>
  <div id="app">
    <Nav />
    <Home id="home" />
    <About id="about" />
    <Projects id="projects" />
    <Footer id="footer" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Nav from "./components/Nav.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Nav,
    About,
    Projects,
    Footer
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
  color: black;
  font-family: flamenco;
}
#about {
  margin-top: 150px;
}
#footer{
  margin-top: 120px;
}
@media (max-width: 700px) {
  #about {
    margin-top: 70px;
  }
  
#footer{
  margin-top: 50px;
}
}
</style>
