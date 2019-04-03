<template lang="pug">
  div(id="offers")
    .offers
      .row
        offer(v-for="offer in offers" :key="offer[0]")
          template(#img="")
            img.img(
              :src="'/static/services/rooms/offers/'+offer[0]+'.png'",
              width="100",
              height="100"
            )

          template(#title-offer="")
            h2.title {{ offer[1] }}

          template(#description="")
            p.description {{ offer[2] }}

    p.star * периодичность зависит от снятого номера
</template>

<script>
import Offer from '@/components/slots/Offer'

export default {
  name: 's2-offers',
  components: {
    Offer
  },
  data () {
    return {
      offers: [
        ['booking', 'Круглосуточное бронирование', 'Услуги службы приёма и размещения'],
        ['parking', 'Парковка', 'Всегда чистая и освещенная'],
        ['breackfast', 'Горячий завтрак', 'Бесплатный завтрак за каждый день прибывания'],
        ['cleaning', 'Уборка номеров', 'Ежедневная и промежуточная*'],
        ['tv', 'Телевидение', 'Телевизор со спутниковым ТВ'],
        ['wifi', 'Wi-Fi', 'Скорость до 100мбит/с'],
        ['alarm', 'Побудка', 'Разбудим к нужному времени'],
        ['towel', 'Смена постельного белья', 'a также халатов и полотенец*']
      ]
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
  .star
    font 14px Futura
    margin-left 4vw
    margin-top 2vh
    border-top 1px solid #6f5c56
    display inline-block
    color #6f5c56
  @media (max-width: 1240px)
    .offers
      padding-top 20px
</style>
