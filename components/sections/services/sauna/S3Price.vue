<template lang="pug">
  .price-block
    h2.header Цены за аренду сауны
    .table
      .wrap-row(v-for="section in sauna", :key="section.id")
        .row
          h3.title {{ section.name }}
          .wrap-col
            .col(v-for="item in section.cost")
              .wrap-item
                div.name {{ item.human }} человек
                div.price {{ item.price }} рублей
          .col
            .wrap-item {{ section.services }}
</template>
<script>
import ShowBlock from '@/components/mixins/ShowBlock'

export default {
  name: 's3-price',
  mixins: [ShowBlock],
  data () {
    return {
      sauna: [
        {
          id: 'mini-sauna',
          name: 'Маленькая сауна',
          cost: [
            {
              human: 'до 4',
              price: 2000
            },
            {
              human: '+1',
              price: 400
            }
          ],
          services: 'Парная, купель, комната отдыха, 1 душевая'
        },
        {
          id: 'big-sauna',
          name: 'Большая сауна',
          cost: [
            {
              human: 'до 6',
              price: 2400
            },
            {
              human: '+1',
              price: 400
            }
          ],
          services: 'Парная, хамам, большая комната отдыха, 3 душевых'
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
  .wrap-col
    display flex
  .col
    display flex
    margin 2px
    flex 1
    box-shadow 0 1px 2px rgba(111, 92, 86, 0.3)
    background #fff
    & > div
      padding 10px
   .wrap-item
    display flex
    width 100%
    justify-content space-between

  @media (max-width: 1024px)
    .table
      column-count 1
    .wrap-row:last-child
      margin-top 20px
  @media (max-width: 465px)
    .wrap-col
      flex-direction column
</style>
