<template lang="pug">
  div(id="offers")
    .offers
      .row
        offer(v-for="offer in caffee" :key="offer.id")
          template(#img="")
            img.img(
              :src="'/static/caffee/icons/'+offer.icon+'.png'",
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
import caffee from '@/json/caffee.json'

export default {
  name: 's2-offers',
  components: {
    Offer
  },
  data () {
    return {
      caffee: caffee
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
  .row
    display flex
    flex-wrap: wrap
    justify-content center
    align-items center
    max-width 1600px
    div
      text-align center
</style>
