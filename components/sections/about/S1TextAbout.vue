<template lang="pug">
  .text-about
    .wrap-text
      p.
        Когда насыщенный рабочий день, полный напряжения и суеты, подходит к
        завершению, хочется устроить себе настоящий отдых, который поможет
        забыть о будничной рутине, а также избавит от накопленной усталости.

      p Мы позаботились о Вашем отдыхе и создали гостиничный комплекс Уржум.

</template>

<script>
</script>

<style lang="stylus" scoped>
  .text-about
    width 100vw
    display flex
    justify-content flex-end
    position relative
    z-index 3
  .wrap-text
    max-width 800px
    font 22px Futura
    padding 4vw 4vw 0 4vw
    margin-right 5vw
    p:first-child
      margin-bottom 32px
  .letter
    border-bottom 1px solid #6f5c56

  @media (max-width: 1360px)
    .wrap-text
      margin-top 5vh
      margin-bottom 20vh
      padding 10px

  @media (max-width: 1024px)
    .wrap-text
      background rgba(255,255,255,0.5)
      border-radius 15px

  @media (orientation: portrait)
    .wrap-text
      margin-bottom 4vh
</style>
