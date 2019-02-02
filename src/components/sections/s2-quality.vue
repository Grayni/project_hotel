<!-- eslint-disable -->
<template lang="pug">
  .wrap-quality.wrapper_blur(:class="{'is-call': downcomponent}", is="section")
    svg.spirit(xmlns="http://www.w3.org/2000/svg", viewBox="0 -10 2201.46 249.45")
      defs
        div(is="Shadow")
      path.a(d="M2201.46,239.45H0V0C740, 318.16,1473.87,318.16, 2201.46,0Z")
    .content-block
      .in-wrap-content(data-sal="fade", data-sal-delay="300", data-sal-duration="1000", data-sal-easing="ease-out-bounce")
        p.
          #[b Гостиница Уржум] - это комфортабельный комплекс, который  не оставит равнодушным нашего дорогого посетителя. В состав гостиницы входят не только удобные и #[b приятные номера], но и такие прелести, как #[b сауна и кафе-ресторан].<br><br>
        p.
          Если Вы хотите остановиться на ночлег или просто хорошо провести время, то добро пожаловать к нам в гости! Мы будем Вам рады!
      slider.slider(@sendSlide='getSlide($event)')
</template>

<script>
import Shadow from '../apps/drop-shadow.vue'
import Slider from '../elements/slider.vue'
export default {
  name: 's2-quality',
  props: ['downcomponent'],
  components: {
    Shadow,
    Slider
  },
  data () {
    return {
      slide: ''
    }
  },
  methods: {
    getSlide (e) {
      this.slide = e
      this.$emit('sendSlide', this.slide)
    }
  },
  mounted () {
    this.$sal()
  }
}

</script>
<style lang="sass" scoped>
  $shift: -23vh;

  .wrap-quality
    z-index: 2
    position: relative
    margin: 0
    height: auto
    width: 100vw
    margin-right: calc(100vw - 100%)

    svg
      display: block
      &.spirit
        pointer-events: none
        position: relative
        top: $shift
  .a
    fill: #fff
    -webkit-filter: url("#dropshadow")
    -moz-filter: url("#dropshadow")
    filter: url("#dropshadow")

  .content-block
    height: 100%
    background: #fff
    top: $shift
    position: relative
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

  .in-wrap-content
    max-width: 800px
    font: 20px 'Futura', Arial, sans-serif
    text-align: center
    color: #333
    display: flex
    flex-direction: column
    margin: auto
    align-items: center
    justify-content: center
    text-align: center
    padding: 20vh 0 10vh 0
    b
      font-size: 22px
      color: #FF6C26

  .slider
    width: 100%
    padding: 4vh 0
    box-shadow: 0 14px 12px rgba(0, 0, 0, .3)
</style>
