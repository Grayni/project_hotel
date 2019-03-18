import { eventEmitter } from '@/main'

export default {
  data () {
    return {
      blurStatus: false
    }
  },
  created () {
    eventEmitter.$on('openCallBack', () => {
      this.blurStatus = true
    })

    eventEmitter.$on('closeCallBack', () => {
      this.blurStatus = false 
    })
  }
}
