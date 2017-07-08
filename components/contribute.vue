<template>
  <section id="contribute">
    <h3 class="title">Contribute & help</h3>
    <div class="description">
      There are several ways to help this project.
    </div>
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="description">
        Help us develop KawAnime
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="description">
        Donate
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"  class="description">
        Report bugs or propose features
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
  #contribute
  {
    height: 100vh;
    text-align: center;
  }

  .title
  {
    text-align: center;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 40px;
    color: #526488;
    word-spacing: 3px;
    margin-bottom: 5vh;
  }

  .description
  {
    height: 150px;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 30px;
    color: #526488;
    word-spacing: 3px;
  }
</style>
