<template lang="pug">
  <model class="wrapper_blur" :class="{'is-call': downcomponent}" :titleText="'Кафе-Ресторан.Цены'" #default>
    h1 Caffee
  </model>
</template>

<script>
import Model from '../../slots/model'

export default {
  name: 'Caffee',
  metaInfo: {
    title: 'Кафе-ресторан'
  },
  props: ['downcomponent'],
  components: {
    Model
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
</style>
