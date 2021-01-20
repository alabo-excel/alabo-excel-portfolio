<template>
  <div class="hello">
    <nav data-aos="fade-down" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="ml-lg-5">
          <img src="../assets/logo.png" alt="" />
        </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <img src="../assets/hamburger.svg" alt="">
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div class="toggler">

          </div>
          <div id="hide">
                      <a class="nav-link" href="#home">Home</a>
          <a class="nav-link" href="#about">About</a>
          <a class="nav-link" href="#projects">Projects</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
img{
    width: 50px;
}
#hide{
    display: none;
}
a{
  color: black;
}
.navbar{
  position: fixed!important;
  width: 100%;
  z-index: 1000;
}
.toggler{
  margin-left: 1150px;
}
.bi{
  width: 200px!important;
}
.navbar-light .navbar-toggler{
  border: none;
}
@media (max-width: 700px) {
    #hide{
        display: block;
    }
.toggler{
  margin-left: 0px;
}
}
</style>
