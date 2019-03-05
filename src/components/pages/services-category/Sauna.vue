<template lang="pug">
  <model class="wrapper_blur" :class="{'is-call': downcomponent}" :titleText="'Сауна.Цены'" #default>
    h1 Sauna
  </model>
</template>

<script>
import Model from '../../slots/model'
export default {
  name: 'Sauna',
  metaInfo: {
    title: 'Сауна'
  },
  props: ['downcomponent'],
  components: {
    Model
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
