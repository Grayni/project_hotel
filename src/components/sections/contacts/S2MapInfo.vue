<template lang="pug">
  yandex-map(
    class="my-map"
    :coords="[57.095530, 50.048738]"
    zoom="13.6"
    :behaviors="['dblClickZoom', 'drag']"
    :controls="['rulerControl','zoomControl']"
    map-type="map"
  )

    ymap-marker(
      marker-id="marker"
      marker-type="placemark"
      :icon="marker"
      :coords="[57.095530, 50.048738]"
      hint-content="База отдыха Уржум"
      :balloon="baloon"
    )

  </yandex-map>
</template>

<script>
// marker-type="circle" circle-radius="160"
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import {TweenMax, Power2} from 'gsap'

export default {
  name: 's2-map-info',
  components: {
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      parameters: {
        options: {
          visible: true
        }
      },
      marker: {
        layout: 'default#image',
        imageHref: '/static/svg/marker.png',
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
  mounted () {
    TweenMax.fromTo('.my-map', 1, {'y': '40%', 'autoAlpha': 0}, {'delay': 1.3, 'y': '0%', 'autoAlpha': 1, 'ease': Power2.easeIn})
  }
}
</script>

<style lang="stylus">
  .my-map
    background #f1eee9
    width 100vw
    min-height 400px
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
</style>
