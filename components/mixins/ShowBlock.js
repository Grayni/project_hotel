export default {
  data () {
    return {
      tween: null,
      scene: null
      // element: 'name-class-animate-element' -> in component
    }
  },
  methods: {
    showBlock (element) {
      this.tween = this.$gsap.TweenMax.fromTo(element, 0.6, { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: 'Power1.easeOut' })

      this.scene = new this.$scrollmagic.Scene({
        triggerElement: element,
        offset: -150
      }).setTween(this.tween)

      this.$ksvuescr.$emit('addScene', 'showBlock', this.scene)
    }
  },
  mounted () {
    this.showBlock(this.element)
  }
}
