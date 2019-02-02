<template lang="pug">
  .landscape(is="section")
    .wrap-landscape
      span.text-landscape Следующие дополнительные услуги мы  предоставляем бесплатно для каждого нашего посетителя:
      
      img.background-services(src="/static/backgrounds/free-services.jpg", alt="Бесплатные услуги от базы отдыха Уржум")
</template>

<script>
export default {
  name: 's3-landscape',
  mounted () {
    console.log()
  }

}
</script>

<style scoped lang="sass">
  .landscape
    height: 100vh
    position: relative
    z-index: -1
    .wrap-landscape
      width: 100%
      height: 100%
      background: #fff
      display: flex
      flex-direction: column
      align-items: center
      justify-content: flex-end
      .text-landscape
        max-width: 800px
        display: flex
        align-items: center
        justify-content: center
        text-align: center
        position: absolute
        top: -100px
        flex: 1
        z-index: 2
        font: 20px 'Futura', Arial, sans-serif
        background: rgba(255,255,255,0.7)
      .background-services
        transform: translate3d(0, 0, 0)
        top: 0
        position: fixed
        z-index: -1

</style>
