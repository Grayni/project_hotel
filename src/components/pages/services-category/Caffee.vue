<template lang="pug">
  model(
    :titleText="'Кафе-Ресторан.Цены'",
    #default=""
  )
    h1 Caffee
</template>

<script>
import Model from '@/components/slots/Model'

export default {
  name: 'caffee',
  metaInfo: {
    title: 'Кафе-ресторан'
  },
  components: {
    Model
  }
}
</script>

<style lang="stylus" scoped>
</style>
