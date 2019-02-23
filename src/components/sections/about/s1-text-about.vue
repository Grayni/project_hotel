<template lang="pug">
  div
    div(is="title-page", :title-text="'О базе отдыха Уржум'")
    .text-about
      .wrap-text
        p.
          Когда насыщенный рабочий день, полный напряжения и суеты, подходит к
          завершению, хочется устроить себе настоящий отдых, который поможет
          забыть о будничной рутине, а также избавит от накопленной усталости.

        p Мы позаботились о Вашем отдыхе и создали гостиничный комплекс Уржум.

</template>

<script>
import TitlePage from '../../elements/title-page'
export default {
  components: {
    TitlePage
  },
  data () {
    return {
      title: 'I am a dynamic slot title1'
    }
  }
}
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
</style>
