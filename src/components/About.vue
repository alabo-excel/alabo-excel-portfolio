<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-sm-10 p-5 mx-auto mt-5 text-center">
        <div data-aos="flip-left">
          <h6>A little bit about me</h6>
          <p id="line"></p>
        </div>
        <div class="mt-5" data-aos="flip-up">
          <p>
            I have one year experience building Websites mainly using Html, Css,
            Vue and React. I love and make responsive and colourful websites. My
            goal is to learn, practice and build more applications while i aim
            towards being a Design Developer.
          </p>
        </div>
        <div data-aos="zoom-in-left"  class="m-5">
          <a href="https://github.com/alabo-excel">
          <button>
            More about me <i class="bi bi-arrow-right-circle-fill"></i>
          </button>
          </a>
        </div>
        <a href="https://drive.google.com/file/d/18XY47y0GL-8xq4wok1U_kqnldwUgl9U4/view?usp=sharing">
          <div class="m-5" data-aos="flip-right">
            <button id="btn">View Resume</button>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "About"
};
</script>

<style scoped>
#line {
  width: 80px;
  background-color: #16181a;
  height: 1px;
  margin: auto;
}
#btn {
  background-color: #16181a;
  color: white;
  border: none;
  padding: 10px;
}
button {
  background-color: white;
  border: none;
}
@media (max-width: 700px) {
}
</style>