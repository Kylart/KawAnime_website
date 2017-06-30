<template>
  <transition name="slide-fade">
    <div id="container">
      <el-row :gutter="10" justify="center" align="middle">
        <el-col :xs="10">
          <i class="el-icon-caret-bottom"
             v-scroll-to="{ element: '#features', duration: 1500, easing: [.6, .80, .30, 1.9] }"></i>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<style scoped>
  #container
  {
    background-color: #58b7ff;
    position: fixed;
    bottom: 50px;
    border-radius: 25px;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
    width: 50px;
  }

  #container:hover
  {
    opacity: 1;
  }

  #container i
  {
    color: #fff;
    display: block;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
  }

  .slide-fade-enter-active
  {
    transition: all .3s ease;
  }
  .slide-fade-leave-active
  {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    transform: translateY(-30px);
    opacity: 0;
  }
</style>
