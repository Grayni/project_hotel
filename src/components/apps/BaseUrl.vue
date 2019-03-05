<template lang="pug">
  base(href="", :href="baseUrl", target="_blank")
</template>

<script>
export default {

  name: 'base-url',

  data () {
    return {
      baseUrl: location.protocol+"//"+location.host
    }
  }
}
</script>

<style lang="sass" scoped>
  
</style>