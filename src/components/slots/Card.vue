<template lang="pug">
  .card
    slot.img(name="img-start")
    .block.name-room
      span Номер
      slot(name="name-room")
    .block.bed-size
      span Кровать
      slot(name="bed-size")
    .block.icons
      ul.icons-services
        li(v-for="(icon, index) in icons" :key="'icon-service'+index")
          .wrap-icons-services
            slot(name="icon" :icon="icon")
    .block.picking
      slot(name="picking")
    .block.price-room
      .prices
        ul.person-price
          li(v-for="(tariff, index) in price" :key="'price-'+index")
            .wrap-value-person
              .value-person(v-for="num in index+1")
                img(src="/static/services/rooms/icons-rooms/man.png" width="36" height="36")
                span(v-if="num === 1 && index+1 > 1 || num === 2 && index+1 > 2") +
            slot.price(name="price" :tariff="tariff")
    .block.booking
      button-call(#button-call="")
        .button-call Забронировать
</template>

<script>
import ButtonCall from '@/components/elements/ButtonCall'

export default {
  name: 'card',
  props: ['price', 'icons', 'id'],
  components: { ButtonCall }
}
</script>

<style lang='stylus' scoped>
  .card
    width 25vw
    color #434343
    min-height 400px
    margin 2vw
    min-width 318px
    display flex
    flex-direction column
    box-shadow 0px 1px 2px rgba(4,4,4,0.1)
  .block
    display flex
    flex-grow 1
    justify-content space-between
    padding 10px
    font 16px Futura
    span
      font-weight bold
    &.price-room
      flex-direction column
      padding 20px 0 10px 0
      .prices
        display flex
        flex-direction row
        justify-content space-between
      .price
        border 1px solid #000
        width 100%
        text-align center
    &:nth-child(odd)
      background rgba(242, 204, 204, 0.3)
    &:last-child
      background transparent
  .wrap-value-person
    width 100%
    display flex
  .value-person
    width 100%
    display flex
    justify-content center
    span
      display flex
      align-items center
  .img
    width 100%
    &:hover
      cursor pointer
  .name-room
    font-size 20px
  .booking
    display flex
    justify-content center
  .picking
    display flex
    flex-grow 3
    div
      width 100%
      text-align left

  .person-price
    display flex
    width 100%
    justify-content space-around
    li
      display flex
      flex-direction column
      span
        text-align center
  .icons
    display flex
    justify-content center
    .icons-services
      display flex
      .wrap-icons-services
        width 35px
        display flex
        justify-content center
  @media (max-width: 820px)
    .card
      margin-left 0
      margin-right 0
</style>
