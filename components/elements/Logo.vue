<template lang="pug">
  .container-logo(:class="{ 'logo-in-title': size, 'front-logo': pos }", :position-data="pos")
    nuxt-link(to="/", alt="Логотип Гостиниц0 Уржум")
      svg(
        xmlns="http://www.w3.org/2000/svg",
        viewBox="0 0 78.71 71.32",
        :width="size*60+60",
        :height="size*60+60",
        :class="{ 'show-branch': size }"
      )
        path.active(d="M14.87,58.1a15.24,15.24,0,0,0-1.68-13.25c-3-4.79-9.94-10-11.52-13.8-2.23-4.75-3-18.15,6.66-20.22,9.26-1.45,14,5.93,19.89,7.78,5.06,1.71,8.09-5.53,4.48-8.06a3.3,3.3,0,0,0-3.59-.18,2.69,2.69,0,0,0-1.22,3.37c.22.7,1.33,1.39,2,.88-.59-.23-.82-.59-.7-1.06s.5-.73.88-.65a.81.81,0,0,1,.62.94,1.36,1.36,0,0,1-.66,1c-.6.43-1.43.12-2.11-.63a3,3,0,0,1-.41-2.26A3.25,3.25,0,0,1,31,9.58c2.61.15,3.63,2.44,3.59,4.36A5.43,5.43,0,0,1,32,18.54c-1.63,1-3.51.75-5.48-.07l-8.23-5C25,17.16,28,24,27,27.46a3.12,3.12,0,0,1-4,2,2.09,2.09,0,0,1-1-2.79,1.1,1.1,0,0,1,1.92-.12,1.13,1.13,0,0,1-.23,1.59c-.4.29-.92-.16-.91-.55a.58.58,0,0,1,.59-.57.56.56,0,0,1,.44.35c.06.11.22,0,.21-.08a1.18,1.18,0,0,0-.69-1,1,1,0,0,0-1.18.65,1.74,1.74,0,0,0,.16,1.69,2.47,2.47,0,0,0,3.52-.11c3.76-4.15-5.07-16.32-14.22-16.91,3.43,1.57,5.53,4,5.86,8.11.27,2.71-1.94,6-4.81,6a3.82,3.82,0,0,1-3.74-5,3.18,3.18,0,0,1,3-2.21,2.19,2.19,0,0,1,2,.91,2.31,2.31,0,0,1-.28,3.08c-.72.59-1.5.64-2,.13a1.34,1.34,0,0,1-.28-1.16c.12-.57.69-.74,1-.34a.64.64,0,0,1-.19.82.52.52,0,0,1-.67-.08c.08.59.38,1,1,.91A1.82,1.82,0,0,0,14,21.34a2.1,2.1,0,0,0-1.6-2.63A3,3,0,0,0,9,21.44a3.71,3.71,0,0,0,1.61,3.39,4.1,4.1,0,0,0,4.61-.63c1.57-1.69,2.42-3.82,1-7.31-.69-1.52-2.58-4.28-5.75-4.83-2.71-.49-4.75.6-6.53,2.27a6.17,6.17,0,0,1,4-1.36,3.68,3.68,0,0,1,3.34,2.78,3,3,0,0,1-1,3c-1.07.84-2,1-2.7.31A1.66,1.66,0,0,1,7.26,17c.56-.8,1.78-.5,1.85.15a.8.8,0,0,1-.32.81c.16-.31.32-.5.13-.86s-1.41-.37-1.61.49A1.35,1.35,0,0,0,7.85,19a1.75,1.75,0,0,0,2-.33,3,3,0,0,0,.86-2.71,3.16,3.16,0,0,0-3.45-2.42,5.67,5.67,0,0,0-4.06,1.81c-1.19,1.25-.63,3.8-.07,5.75,1.55,4.61,7.59,9.45,11.29,14.61A19.89,19.89,0,0,1,18,46.75,26.8,26.8,0,0,1,14.87,58.1Z")
        path.active(d="M6.88,17.5c.55-1.76-1.24-3.26-2.58-2.36.32-.05.47.13.82.14s.48.33.54.59a1.72,1.72,0,0,0-2.38,0c.63.12,1,.83,1.35,1.15.62.53,1.31.13,1.68.17A.72.72,0,0,1,6.88,17.5Z")
        path.active(d="M25.83,20.49c.84.25,1.71-.12,2.43,0,1,.2,2,1.34,2.86,1-2.11,2.82-4,1.93-5.17-.39a1.26,1.26,0,0,1,.72.28C26.8,20.9,26,21.15,25.83,20.49Z")
        path.active(d="M21.64,17.18a9,9,0,0,0-.9,1.91c-.19,1,.52,1.69-.16,2.63,2.23-1.2,2.49-2.68,1.54-4.27-.18.41.19.55-.12,1C21.81,18.37,22,17.5,21.64,17.18Z")
        path.active(d="M16.27,10.8c.51-.53.86-1.1,1.38-1.26.67-.17,1.05.13,1.73-.6-.22,2.8-.82,3-2.92,2.3.55-.29,1.08-.28,1.21-.5C17.27,10.61,16.36,11.14,16.27,10.8Z")
        path.active(d="M4,70.53c25.6-13.38,19.57-54.68,48.19-58.94,8.17-1.11,26.25,5.93,24.56,15.14C76,30.1,72,31.05,70.49,28.8c-1-1.58-.34-3.29.85-3.34A1.65,1.65,0,0,1,73,27.7a.87.87,0,0,1-1.3.41.85.85,0,0,1-.05-1.33.76.76,0,0,1,1,.14c.09-.31,0-.59-.4-.87-.92-.52-1.61-.27-2,.57a2.37,2.37,0,0,0,2,3c1.5.29,3.12-.92,3.69-2.89.85-3.31-2.8-7.55-8.14-10.52A30.92,30.92,0,0,0,55.13,12.8c-7.47-.28-14.39,8.88-17.64,17.79C30.24,50.21,21.54,66,4,70.53Z")
        path.active(d="M64,14.91c.17.85-.56,1.55-.17,3.1.39,1.3,1.72,1.94,1.36,3.4a4.77,4.77,0,0,0,1.38-3.26c.08-1.42-.84-2.2-2-3.11a2,2,0,0,1,.37,1.38A3.61,3.61,0,0,0,64,14.91Z")
        path.active(d="M71.12,16.74c1.66-.61,2.56-1.43,3.62-1.58,1.55-.12,2.62.48,3.59-.16-1.17,5.12-4.45,4.41-6.48,2.35a5.94,5.94,0,0,0,2.93-.22A8.44,8.44,0,0,1,71.12,16.74Z")
        path.active(d="M52.91,10.38c.45-.63.53-1.57,1.07-2.32A6.56,6.56,0,0,1,55.48,7c.43-.34.34-.54.32-1,1.71,2,1.62,4-2.27,4.63a1.25,1.25,0,0,0,.83-1A2.71,2.71,0,0,1,52.91,10.38Z")
        path.active(d="M54,11c5.29-.67,11.07-.92,13-3.41,2.59-3,.13-6.83-2.4-7-2,.11-2.57,1.14-2.29,2.72a1.79,1.79,0,0,0,2,1.1c.16-.06.1-.17,0-.26l-.43-.22a.78.78,0,0,1,0-1.31.76.76,0,0,1,1.12.51,1.21,1.21,0,0,1-.41,1.41,1.71,1.71,0,0,1-1.68,0,2.11,2.11,0,0,1-1-2.11A2.12,2.12,0,0,1,63,.58a3.79,3.79,0,0,1,4.59,1.22A4.82,4.82,0,0,1,68,7.18,7.22,7.22,0,0,1,64,10,32.3,32.3,0,0,1,54,11Z")
</template>

<script>
import { eventEmitter } from '@/plugins/eventEmitter'

export default {
  name: 'logo',
  data () {
    return {
      size: 0,
      pos: 0,
      widthWindow: 0
    }
  },
  methods: {
    changeSize () {
      if (this.$route.path === '/' && this.pos < 20) {
        this.size = 1
      } else if (this.$route.path === '/' && this.pos >= 20) {
        this.size = 0
      }
    }
  },
  watch: {
    pos () {
      this.changeSize()
    },
    '$route' (to, from) {
      if (to.path !== '/') {
        this.size = 0
      } else if (to.path === '/') {
        this.changeSize()
      }
    }
  },
  mounted () {
    eventEmitter.$on('scrollable', e => {
      this.pos = e
    })
    this.changeSize()
    this.widthWindow = window.innerWidth
    this.pos = document.body.scrollTop || document.documentElement.scrollTop
    // init project
    this.timeLine = new this.$gsap.TimelineMax()
    this.timeLine.to('.container-logo', 0.8, { opacity: 1 })
  }
}
</script>

<style lang='stylus' scoped>
.container-logo
  padding 0 30px
  display flex
  align-items center
  position absolute
  left 0
  top 3px
  z-index 0
  opacity 0
  &.logo-in-title
    left calc(17vw + 16px)
    top calc(9vw - 12px)
    padding 0 20px

.show-branch
  .active
    animation dash1 2s linear forwards

path
  stroke #ff6c26
  stroke-width 0.5px
  stroke-dasharray 800
  animation dash2 2s linear forwards
  &:hover
    cursor pointer

.front-logo
  z-index 1

for dash in 1..2
  @keyframes dash{dash}
    from
      stroke-dashoffset 800
      fill rgba(0,0,0,0)
    to
      stroke-dashoffset 0
      fill #ff6c26

@media (max-width: 1024px) and (orientation: portrait)
  .container-logo
    &.logo-in-title
      top calc(20vh - 12px)

@media (max-height: 823px) and (max-width: 480px) and (orientation: portrait)
  .container-logo
    transform scale(0.7)
    &.logo-in-title
      top calc(14vh - 8px)
      left calc(7vw + 40px)

@media screen and (max-height: 768px)
  .container-logo
    transform scale(0.7)
    &.logo-in-title
      left calc(4vw + 45px)
</style>
