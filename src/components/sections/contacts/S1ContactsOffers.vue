<template lang="pug">
  .block-wrap
    .block-info
      .adress
        h2 Адрес гостиничного комплекса: 193 км автодороги Киров-Малмыж-Вятские поляны
      .gmail
        h2 Почта для связи:
        p
          span info.urzhum@gmail.com
      .phone
        h2 Номера телефонов:
        .position
          p Aдминистратор:
            span  Ольга Владимировна
          p +7 (909) 720-10-58
        .position
          p Заместитель:
            span  Сергей Генадьевич
          p +7 (922) 908-55-60
      .time
        h2 Прием звонков 24/7
</template>

<script>
import {TweenMax} from 'gsap'

export default {
  name: 's1-contacts-offers',
  mounted () {
    TweenMax.fromTo('.block-wrap', 1, {'y': '40%', 'autoAlpha': 0}, {'y': '240%', 'autoAlpha': 1})
  }
}
</script>

<style lang="stylus" scoped>
.block-wrap
  padding-top 50px
  position relative
  width 100vw
  display flex
  justify-content flex-end
  z-index 2
  pointer-events none
.block-info
  position absolute
  margin-right 5vw
  font 16px Futura
  border 2px solid #6f5c56
  display inline-block
  color #6f5c56
  padding 20px
  border-radius 3px
  div
    margin-bottom 10px
  p
    font-weight bold
  span
    font-weight normal
  h2
    font-size 18px
    font-weight bold
  .position
    margin 10px

@media (max-width: 620px)
  .block-wrap
    pointer-events auto
    transform translate(0,0)!important
    padding 10px
    display flex
    align-items center
    justify-content center
  .block-info
    position relative
    margin-right 0
</style>
