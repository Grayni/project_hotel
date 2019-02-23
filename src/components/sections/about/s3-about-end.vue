<template lang="pug">
  .end
    .top-block(id="target-top-cross")
      div(is="fade-string", :title="'Отдохнуть и расслабиться'", :strings="strings", :target="'.map'", :parent="'#target-top-cross'")
    .wrap-landscape
      img.landscape(src="/static/about/background-down.jpg")
</template>

<script>
import FadeString from '../../elements/fade-strings.vue'
export default {
  name: 's3-about-end',
  components: {
    FadeString
  },
  data () {
    return {
      strings: [
        ['В', 'гостиничном', 'комплексе', 'Вы'],
        ['получите', 'отдых,', 'наполненный'],
        ['тайнами', 'блаженства,', 'которые'],
        ['дарит', 'нам', 'только', 'природа']
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrap-landscape
    overflow hidden
    display flex
  #target-top-cross
    position absolute
</style>
