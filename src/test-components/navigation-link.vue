<template lang="pug">
  a(:href="url" class="nav-link")
    slot
</template>

<script>
export default {
  name: 'navigation-link',
  props: ['url']
}
</script>

<style lang='stylus'>
  .nav-link
    color white
    text-decoration none
</style>
