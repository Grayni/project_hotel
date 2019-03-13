<template lang="pug">
  model(
    :titleText="'Сауна.Цены'",
    #default=""
  )
    h1 Sauna
</template>

<script>
import Model from '@/components/slots/Model'

export default {
  name: 'sauna',
  metaInfo: {
    title: 'Сауна'
  },
  components: { Model }
}
</script>

<style lang="stylus" scoped>

</style>
