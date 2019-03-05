<template lang="pug">
  div.bedroom
    img.background(src="/static/backgrounds/bedroom.jpg")
    div.bed-text
      p База отдыха «Уржум» предлагает своим гостям настоящее гостеприимство:
      p -домашняя обстановка и уют
      p -современный дизайн номеров
      p -традиционная русская парная
      p -круглосуточно парковка
      p -доброжелательный персонал
</template>

<script>
export default {
  name: 's1-about-room'
}
</script>

<style lang="stylus" scoped>
  .bedroom
    position relative
    margin-top 10vh
  .background
    max-width 100vw
  .bed-text
    position absolute
    z-index 1
    top 0
    height auto
    width 46%
    min-width 500px
    padding 20px
    right 5vw
    top 10vh
    margin auto
    border-radius 3px
    background-color rgba(255, 255, 255, .5)
    font 18px Academic
    text-transform uppercase
    line-height 30px
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #3e3937;
</style>
