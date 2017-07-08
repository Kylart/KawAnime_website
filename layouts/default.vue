<template>
  <div>
    <el-menu theme="dark"
             :default-active="activeIndex"
             id="menu"
             mode="horizontal"
             @select="handleSelect">
      <template v-for="item in items">
        <el-menu-item :index="item.index"
                      v-scroll-to="{ element: item.to, duration: 1500, easing: [.6, .80, .30, 1.2] }">
          {{ item.title }}
        </el-menu-item>
      </template>
    </el-menu>
    <nuxt></nuxt>
    <footer-custom></footer-custom>
  </div>
</template>

<script>
  import FooterCustom from '~components/footer.vue'

  export default {
    data () {
      return {
        items: [
          {to: '#title', title: 'Home', index: 'Home'},
          {to: '#features', title: 'Features', index: 'Features'},
          {to: '#about', title: 'About', index: 'About'},
          {to: '#download', title: 'Download', index: 'Download'},
          {to: '#contribute', title: 'Contribute', index: 'Contribute'},
          {to: '#contact', title: 'Contact', index: 'Contact'}
        ],
        activeIndex: 'Home'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    components: {
      FooterCustom
    }
  }
</script>

<style>
  html
  {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after
  {
    box-sizing: border-box;
    margin: 0;
  }

  #menu
  {
    width: 100%;
    padding-left: 15%;
  }
</style>
