<template lang="pug">
  .price-block
    h2.header Комплексное меню*
    .table
      .wrap-row(v-for="section in complex" :key="section.id")
        .row
          h3.title {{ section.head }}
          .col(v-for="item in section.list")
            .wrap-item
              .name {{ item }}
            .wrap-sizes
              .sizes
    .note Комплексное меню на сайте может отличаться от настоящего. В штатном режиме кафе предоставляет только комплексное меню.
    h2.header Меню для проведения мероприятий*
    .table
      .warp-row(v-for="section in menu" :key="section.id")
        .row
          h3.title {{ section.head }}
          .col(v-for="item in section.list")
            .wrap-item
              .name {{ item.name }}
              .desc(v-if="item.description") {{ item.description }}
            .wrap-sizes
              .sizes(v-for="size in item.sizes")
                span.weight {{ size.weight }}
                span.price {{ size.price }} рублей
    .note Перед проведением торжества, состав меню обсуждается при личном присутствии заказчика.
</template>
<script>
import menu from '~/assets/json/menu.json'
import ShowBlock from '@/components/mixins/ShowBlock'

export default {
  name: 's3-price',
  mixins: [ShowBlock],
  data () {
    return {
      menu,
      complex: [
        {
          id: 'breackfast',
          head: 'Комплексный завтрак (250 рублей)',
          list: [
            'Яичница с сосиской',
            'Оладьи с вареньем',
            'Чай, кофе'
          ]
        },
        {
          id: 'lanch',
          head: 'Комплексный обед (350 рублей)',
          list: [
            'Пельмени домашние',
            'Салат',
            'Чай, кофе'
          ]
        }
      ],
      element: '.price-block'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .price-block
    padding 0 5vw
    margin 5vw 0
  .header
    display inline-block
    width 100%
    font bold 18px Futura
    text-align center
    text-transform uppercase
    margin-bottom 20px
    color #6f5c56
    letter-spacing 2px
  .table
    width 100%
    font 15px Futura
    column-count 2
    column-gap 1em
    box-orient vertical
    margin-bottom 20px
    .title
      width calc(100% - 4px)
      text-align center
      font 20px Futura
      margin 0 2px 2px 2px
      background #6f5c56
      padding 10px
      display flex
      color #fff
      box-shadow 0 1px 2px rgba(111, 92, 86, 0.5)
    .warp-row
      display inline-block
      width 100%
      margin-top 20px
      .row
        display flex
        flex-direction column
        justify-content center
  .col
    display flex
    margin 2px
    box-shadow 0 1px 2px rgba(111, 92, 86, 0.3)
    &:nth-child(odd)
      background #ffecdf
    &:nth-child(even)
      background #fff
    & > div
      padding 10px

  .wrap-item
    display flex
    flex-direction column
    min-width 280px
    .name
      font-size 16px
      font-weight bold
    .desc
      max-width 340px
      margin-top 7px
  .wrap-sizes
    display flex
    flex-direction column
    width 100%
    .sizes
      display flex
      .price
        width 100%
        text-align right

  .weight
    min-width 160px
  .note
    font 14px Futura
    max-width 480px
    display inline-block
    position relative
    padding-top 3px
    margin 5px 0 3vw 10px
    border-top 1px solid #6f5c56
    color #6f5c56
    &:before
      content '*'
      padding-top 3px
      position absolute
      top 0
      left -10px
      color #6f5c56

  @media (max-width: 1160px)
    .table
      column-count 1
    h2
      margin-top 20px

  @media (max-width: 1160px)
    .table
      .col
        flex-direction column
</style>
