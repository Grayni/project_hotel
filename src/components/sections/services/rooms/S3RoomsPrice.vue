<template>
  <div class="price-wrap">
    <div class="rooms-price">
      <card
        v-for="(room, index) in rooms"
        :key="'room-'+index"
        @menublur="blurOutButton($event)"
        :id="room.id"
        :price="room.price"
        :icons="room.icons"
      >
        <template #img-start>
          <img class="img" :src="'/static/test-img/'+room.img+'.jpg'">
        </template>
        <template #name-room>
          <div>{{ room['name-room'] }}</div>
        </template>
        <template #bed-size>
          <div>{{ room['bed-size'] }}</div>
        </template>
        <template #icon="{ icon }">
          <img :src="'/static/icons-rooms/'+icon[0]+'.png'" :alt="icon[1]" :title="icon[1]" width="25" height="25">
        </template>
        <template #picking>
          <div>{{ room.picking }}</div>
        </template>
        <template #price="{ tariff }">
          <span> {{ tariff }} ₽/сут</span>
        </template>

        <template #booking="props">
          <button name="booking">Забронировать</button>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/slots/Card'
import BlurOutButton from '@/components/mixins/BlurOutButton'

export default {
  name: 's3-rooms-price',
  components: {
    Card
  },
  mixins: [BlurOutButton],
  data () {
    return {
      blurFromHTML: false,
      rooms: [
        {
          id: 'econome-1',
          img: 'about',
          'name-room': 'Эконом',
          'bed-size': '160*200см',
          picking: `
            Санузел,
            гигиенический душ,
            комплект махровых полотен,
            мыльные принадлежности,
            телевизор,
            wi-fi
          `,
          icons: [
            ['toilet', 'Личный санузел'],
            ['towel', 'Комплект махровых полотенец'],
            ['tv', 'Спутниковое телевидение'],
            ['wi-fi', 'Доступ в интернет'],
            ['breackfast', 'Завтрак'],
            ['cleaner', 'Уборка номеров']
          ],
          price: [ 1700, 2000 ]
        },
        {
          id: 'econome-2',
          img: 'about',
          'name-room': 'Эконом +',
          'bed-size': '160*200см',
          picking: `
            Удобная рабочая зона со столом и стулом,
            санузел,
            гигиенический душ,
            комплект махровых полотен,
            мыльные принадлежности,
            телевизор,
            wi-fi
          `,
          icons: [
            ['table', 'Стул и стол'],
            ['toilet', 'Личный санузел'],
            ['towel', 'Комплект махровых полотенец'],
            ['tv', 'Спутниковое телевидение'],
            ['wi-fi', 'Доступ в интернет'],
            ['breackfast', 'Завтрак'],
            ['cleaner', 'Уборка номеров']
          ],
          price: [ 1350, 1700 ]
        },
        {
          id: 'standart',
          img: 'about',
          'name-room': 'Стандарт',
          'bed-size': '160*200см',
          picking: `
            Удобная рабочая зона со столом и стулом,
            санузел,
            душевая кабина,
            комплект махровых полотен,
            мыльные принадлежности,
            телевизор,
            wi-fi
          `,
          icons: [
            ['table', 'Стул и стол'],
            ['toilet', 'Личный санузел'],
            ['shower', 'Душевая кабина'],
            ['towel', 'Комплект махровых полотенец'],
            ['tv', 'Спутниковое телевидение'],
            ['wi-fi', 'Доступ в интернет'],
            ['breackfast', 'Завтрак'],
            ['cleaner', 'Уборка номеров']
          ],
          price: [ 2000, 2500 ]
        },
        {
          id: 'family',
          img: 'about',
          'name-room': 'Семейный',
          'bed-size': '160*200см x 1, 90*200см x 2',
          picking: `
            Удобная рабочая зона со столом и стулом,
            cанузел,
            душевая кабина,
            комплект махровых полотен,
            мыльные принадлежности,
            телевизор,
            wi-fi
          `,
          icons: [
            ['table', 'Стул и стол'],
            ['toilet', 'Личный санузел'],
            ['shower', 'Душевая кабина'],
            ['towel', 'Комплект махровых полотенец'],
            ['tv', 'Спутниковое телевидение'],
            ['wi-fi', 'Доступ в интернет'],
            ['breackfast', 'Завтрак'],
            ['cleaner', 'Уборка номеров']
          ],
          price: [ 2500, 3200, 4200 ]
        },
        {
          id: 'vip',
          img: 'about',
          'name-room': 'VIP',
          'bed-size': '160x200 см',
          picking: `
            Удобная рабочая зона со столом и стулом,
            санузел,
            душевая кабина,
            комплект махровых полотен,
            мыльные принадлежности,
            телевизор,
            wi-fi,
            сауна 2 часа
          `,
          icons: [
            ['table', 'Стул и стол'],
            ['toilet', 'Личный санузел'],
            ['shower', 'Душевая кабина'],
            ['towel', 'Комплект махровых полотенец'],
            ['tv', 'Спутниковое телевидение'],
            ['wi-fi', 'Доступ в интернет'],
            ['breackfast', 'Завтрак'],
            ['cleaner', 'Уборка номеров'],
            ['sauna', 'Сауна на 2 часа']
          ],
          price: [ 4500, 4500 ]
        }
      ]
    }
  }
}
</script>

<style lang='stylus'>
  .price-wrap
    margin 10vh 0
    display flex
    width 100vw
    justify-content center
  .rooms-price
    display flex
    justify-content center
    flex-wrap wrap
    width 90vw

</style>
