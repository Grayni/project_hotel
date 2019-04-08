import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const options = {
  apiKey: '447e33e3-ae1b-4b9f-af57-ab467ccda698',
  lang: 'ru_RU',
  version: '2.1'
}

Vue.use(YmapPlugin, options)
