<template lang="pug">
  .conclusion.wrapper_blur
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
export default {
  name: 's4-conclusion',
  data () {
    return {
      timeLine1: null,
      timeLine2: null,
      scene1: null,
      scene2: null,
      tween1: null,
      tween2: null
    }
  },
  methods: {
    animateScroll () {
      this.timeLine1 = new this.$gsap.TimelineMax()

      this.tween1 = this.timeLine1
        .addLabel('closure')
        .fromTo('#closure rect', 1, { 'stroke-dashoffset': 2200, 'stroke-dasharray': 2200 }, { 'stroke-dashoffset': 0 }, 'closure')
        // eslint-disable-next-line
        .fromTo('#closure .wrap-text-block__content', 1, { opacity: 0 }, { opacity: 1, ease: Back.easeIn }, 'closure')

      this.scene1 = new this.$scrollmagic.Scene({
        triggerElement: '.offer__unit-part:nth-child(4)'
      }).setTween(this.tween1)

      this.$ksvuescr.$emit('addScene', 'animateScroll', this.scene1)
    },
    animateText () {
      this.timeLine2 = new this.$gsap.TimelineMax()

      this.tween2 = this.timeLine2.fromTo('.conclusion .wrap-text-block', 0.5, { y: '0%' }, { y: '-50%' }, 'closure')

      this.scene2 = new this.$scrollmagic.Scene({
        triggerElement: '.offer__unit-part:nth-child(4)'
      }).setTween(this.tween2)

      this.$ksvuescr.$emit('addScene', 'animateText', this.scene2)
    }
  },
  mounted () {
    this.animateScroll()
    this.animateText()
  }
}
</script>

<style lang="stylus" scoped>
  .conclusion
    width 100vw
    display flex
    flex-direction column
    min-height 250px
    position relative
    top 0
    z-index 3
    margin-bottom 120px
  .wrap-text-block
    transform: translate(0, -50%)
    position absolute
    display flex
    max-width 45vw
    bottom -30vh
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
  @media (max-width 868px)
    .wrap-text-block
      display none
    .conclusion
      margin-bottom 0
</style>
