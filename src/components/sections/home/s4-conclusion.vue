<template lang="pug">
  .conclusion
    .wrap-text-block(id="closure")
      svg.wrap-text-block__frame
        rect(x="0" y="0" width="100%" height="100%" fill="none" stroke="#6f5c56" style="stroke-width: 4;")
      span.wrap-text-block__content.
        Безупречная чистота, превосходный пар, возможность водных процедур, разнообразие травяных и
        витаминных чаев, удобные зоны отдыха, высококлассное обслуживание персонала, экологически
        чистые продукты, а также широкий выбор развлечений оставят после себя незабываемые
        впечатления и только радужные эмоции.

</template>

<script>
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

import {TimelineMax, Back} from 'gsap'

export default {
  name: 's4-conclusion',
  data () {
    return {
      timeLine1: null
    }
  },
  mounted () {
    const controller = new ScrollMagic.Controller()

    this.timeLine1 = new TimelineMax()
    let tween1 = this.timeLine1
      .addLabel('closure')
      .fromTo('#closure rect', 1, {'stroke-dashoffset': 2200, 'stroke-dasharray': 2200}, {'stroke-dashoffset': 0}, 'closure')
      .fromTo('#closure .wrap-text-block__content', 1, {opacity: 0}, {opacity: 1, ease: Back.easeIn}, 'closure')
      .fromTo('.conclusion .wrap-text-block', 0.5, {y: '0%'}, {y: '-50%'}, 'closure')

    new ScrollMagic.Scene({
      triggerElement: '.offer__unit-part:nth-child(4)'
    }).setTween(tween1).addTo(controller)
  }
}
</script>

<style lang="stylus" scoped>
  .conclusion
    width 100vw
    display flex
    flex-direction column
    min-height 250px
  .wrap-text-block
    transform: translate(0, -50%)
    position absolute
    display flex
    max-width 45vw
    z-index 1
    left 3vw
    &__frame
      width 100%
      height 100%
      position absolute
      top 0
      left 0
    &__content
      font: bold 14px 'Academic', Arial, 'sans-serif'
      letter-spacing 3px
      background #fff
      color #3e3937
      display inline-block
      margin 2vh 2vh 2vh 2vh
      padding 3vh
      text-transform uppercase
      border-radius 3px
      letter-spacing 7px
      line-height 30px

</style>
