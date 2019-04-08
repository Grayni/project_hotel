<template lang="pug">
  div(id="offers")
    .offers
      .row
        offer(v-for="offer in sauna" :key="offer.id")
          template(#img="")
            img.img(
              :src='"~/assets/images/services/sauna/icons/"+offer.icon+".png"',
              width="100",
              height="100"
            )

          template(#title-offer="")
            h2.title {{ offer.header }}

          template(#description="")
            p.description {{ offer.description }}
</template>

<script>
import Offer from '@/components/slots/Offer'
import sauna from '~/assets/json/sauna.json'
import ShowBlock from '@/components/mixins/ShowBlock'

export default {
  name: 's2-offers',
  mixins: [ShowBlock],
  components: {
    Offer
  },
  data () {
    return {
      sauna,
      element: '.offers'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .offers
    width 100vw
    padding 10vh 4vw 0 4vw
    display flex
    justify-content center
    opacity 0
    transform translate(0, 80px)
  .row
    display flex
    flex-wrap: wrap
    justify-content center
    align-items center
    max-width 1600px
    div
      text-align center
</style>
