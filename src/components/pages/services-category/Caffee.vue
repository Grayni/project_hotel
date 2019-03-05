<template lang="pug">
  <model class="wrapper_blur" :class="{'is-call': downcomponent}" :titleText="'Кафе-Ресторан.Цены'" #default>
    h1 Caffee
  </model>
</template>

<script>
import Model from '@/components/slots/Model'

export default {
  name: 'caffee',
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
