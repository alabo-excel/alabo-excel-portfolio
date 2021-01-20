<template>
  <div class="hello">
    <div class="row pt-5 ">
      <div class="container mt-5">
        <div class="d-flex mt-5 pt-5 justify-content-center">
          <div id="text" class="pt-5 mt-5" data-aos="fade-up-right">
            <h1>Alabo <span>Excel</span></h1>
            <h6>Frontend Web <span>Developer</span></h6>
            <p>Port Harcourt, <span>Nigeria</span></p>
            <div id="mobile" class="d-flex flex-column ">
              <a href="https://twitter.com/alaboExcel">
              <i class="bi bi-twitter"></i>              
              </a>
              <a href="mailto:iamalaboexcel@gmail.com">
                <i class="bi bi-envelope-fill"></i>
              </a>
              <a href="https://www.facebook.com/alabo.kurotams">
              <i class="bi bi-facebook"></i>
              </a>
              <a href="https://github.com/alabo-excel">
              <i class="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/alabo-excel/">
              <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          
          <img data-aos="fade-down-left" src="../assets/bg.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="row">
      <!-- <div id="web" class="p-3">
        <a href="https://twitter.com/alaboExcel">
              <i class="bi bi-twitter"></i>              
              </a>
              <a href="mailto:iamalaboexcel@gmail.com">
                <i class="bi bi-envelope-fill"></i>
              </a>
              <a href="https://www.facebook.com/alabo.kurotams">
              <i class="bi bi-facebook"></i>
              </a>
              <a href="https://github.com/alabo-excel">
              <i class="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/alabo-excel/">
              <i class="bi bi-linkedin"></i>
              </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
img {
  width: 25%;
  height: 20%;
  border-radius: 50%;
}
#text {
  letter-spacing: 2px;
  margin-right: -100px;
  z-index: 100;
}
span {
  color: white;
  text-shadow: 1px 1px black;
  padding-left: 15px;
}
#mobile {
  visibility: hidden;
}
#web{
  display: initial;
  width: 100%;
  background-color:#f8f9fa;
  position: absolute;
  bottom: 0px;
}
.bi{
  margin: 6px;
}
.icons{
  background-color:#f8f9fa;
}
a{
  color: #16181a;
}
@media (max-width: 700px) {
  img {
    width: 100%;
    margin-right: -50%;
  }
  #mobile {
    margin-top: 40px;
    visibility: initial;
  }

  #web{
    display: none;
  }
}
</style>
