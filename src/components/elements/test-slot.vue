<template lang="pug">
  div
    h1 Please fill out our form...
    form
      div(id="form-header")
        slot(name="form-header")

      div(id="form-fields")
        slot(name="form-fields")

      div(id="form-controls")
        slot(name="form-controls")

      div(id="userful-links")
        ul
          li
            a(href="#") Link 1
          li
            a(href="#") Link 2
          li
            a(href="#") Link 3
          li
            a(href="#") Link 4
</template>

<script>
export default {
  name: 'test-slot'
}
</script>

<style lang="stylus" scoped>
  h1
    color red
  h2
    color green
    font 22px Academic
    text-transform uppercase
  p
    color blue
    font 32px Future
</style>
