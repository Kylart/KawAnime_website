<template>
  <footer>
    <div class="text">
      &copy; 2016 - {{ now }} Kylart
    </div>
  </footer>
</template>

<style scoped>
  *
  {
    width: 100%;
  }

  .text
  {
    background-color: rgb(50, 50, 50);
    text-align: right;
    font-size: 16px;
    font-weight: 400;
    color: #9abdff;
    min-height: 5vh;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding: 10px;
  }
</style>

<script>
  export default {
    computed: {
      now () {
        return (new Date()).getFullYear()
      }
    }
  }
</script>
