<template lang="pug">
  .wrap-map
    .preloader
      .sk-spinner-pulse
    .test
      no-ssr
        yandex-map(
          class="my-map",
          id="my-map",
          :coords="[57.095530, 50.048738]",
          zoom="13.6",
          :behaviors="['dblClickZoom', 'drag']",
          :controls="['rulerControl', 'zoomControl']",
          map-type="map",
          @map-was-initialized="showMap"
        )
          ymap-marker(
            ref="mark",
            marker-id="marker",
            marker-type="placemark",
            :icon="marker",
            :coords="[57.095530, 50.048738]",
            hint-content="База отдыха Уржум",
            :balloon="baloon"
          )
</template>

<script>
export default {
  name: 's2-map-info',
  data () {
    return {
      parameters: {
        options: {
          visible: true,
          timeLine: null
        }
      },
      marker: {
        layout: 'default#image',
        imageHref: '/marker.png',
        imageSize: [52, 48],
        imageOffset: [-22, -55]
      },
      baloon: {
        header: 'База отдыха Уржум',
        body:
          `<div class="services">
             <a href=rooms>Гостиничные номера</a><br>
             <a href=sauna>Сауна, банный комплекс</a><br>
             <a href=caffee-restorant>Кафе-ресторан</a>
           <div>`,
        footer: '+7 (909) 720-10-58'
      },
      placemarks: [
        {
          coords: [57.095530, 50.048738],
          clusterName: '1'
        }
      ]
    }
  },
  methods: {
    showMap () {
      this.timeLine = new this.$gsap.TimelineMax()
      // eslint-disable-next-line
      this.timeLine.to('.test', 1, { delay: 1.3, opacity: 1, ease: Power3.easeIn })
    }
  }
}
</script>

<style lang="stylus" scoped>
  spinkit-size = 4em
  spinkit-spinner-color = #ff952b

  .test
    opacity 0
  .wrap-map
    position relative
  .my-map
    background #f1eee9
    width 100vw
    min-height 600px
    height 70vh
    .ymaps-2-1-72-balloon-pane
      transition all 1s ease
    .ymaps-2-1-72-balloon__close+.ymaps-2-1-72-balloon__content
      padding-right 10px
      padding-bottom 20px
  .services
    min-width 200px
    a, a:visited
      font 16px Futura
      color #708090
      &:hover
        color #ff6c26
  [class*="ymaps-2"][class*="-ground-pane"]
    filter hue-rotate(25deg)
    -webkit-filter hue-rotate(270deg) sepia(10%) saturate(100%) brightness(96%)
  .preloader
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    position absolute
    .sk-spinner-pulse
      width spinkit-size
      height spinkit-size
      margin auto
      background-color spinkit-spinner-color
      border-radius 100%
      animation sk-spinner-pulse 1.0s infinite ease-in-out

  @keyframes sk-spinner-pulse
    0%
      transform: scale(0)
    100%
      transform: scale(1.0)
      opacity: 0

</style>
