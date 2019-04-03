<template lang="pug">
  Services
    template(#img-background="")
      img.background(src="/static/services/sauna/sauna.jpg")
    template(#text-background="")
      p Наш гостиничные комплекс может предложить сауну или парную.
      p  В подарок:
      p чайный сервиз с медом и вареньем.
      p Только для Вас раскроются все глубины вкуса целебных чаев, приготовленных на родниковой воде.
</template>

<script>
import Services from '@/components/slots/Services'

export default {
  name: 's1-about-room',
  components: { Services }
}
</script>

<style></style>
