<template>
  <div>
    <div class="row justify-content-center ">
      <div data-aos="zoom-in-right"  class="col-lg-12 col-sm-10 p-5 text-center">
        <h6>Recent Projects</h6>
        <p id="line"></p>
      </div>
      <div data-aos="zoom-in-left" class="card col-lg-3 p-2 m-4 col-sm-10">
        <div class="d-flex">
          <img src=../assets/002.png alt="">
          <div class="ml-2 mt-3">
            <h5>Nigerian Universities</h5>
            <p>An app that displays all acredited nigerian unversities.</p>
            <a href="https://nigerian-universities.netlify.app/">
              <i class="bi bi-arrow-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" id="middle" class="card col-lg-3 p-2 m-4 col-sm-10">
        <div class="d-flex">
          <img src=../assets/001.png alt="">
          <div class="ml-2 mt-3">
            <h5>Covid APP</h5>
            <p>An app that shows covid-19 records for countries..</p>
            <a href="https://covid-19-app-alabo-excel.netlify.app/">
              <i class="bi bi-arrow-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up" class="card col-lg-3 m-4 p-2 col-sm-10">
        <div class="d-flex">
          <img src=../assets/003.png alt="">
          <div class="ml-2 mt-3">
            <h5>Shortly</h5>
            <p>A UI for a supposed url shortener website.</p>
            <a href="https://flamboyant-sinoussi-73e1aa.netlify.app/">
              <i class="bi bi-arrow-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" class="col-12 mt-4">
        <a href="https://github.com/alabo-excel?tab=repositories">
          <div  class=" text-center mt-4">
            <button id="btn">View All <i class="bi bi-arrow-right-circle-fill"></i></button>
          </div>
          </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
#line {
  width: 80px;
  background-color: #16181a;
  height: 1px;
  margin: auto;
}
.card img {
  width: 25%;
}
.card {
  border: none;
  background-color: #f8f9fa ;
}
#middle {
  background-color: #16181a;
  color: white;
}
#middle a {
  color: white;
}
a {
  color: #16181a;
}

    #btn{
        background-color: #16181a;
        color: white;
        border: none;
        padding: 10px;
        width: 130px;
    }
@media (max-width: 600px) {
  .card img {
    width: 35%;
  height: 35%;
  }
}
</style>