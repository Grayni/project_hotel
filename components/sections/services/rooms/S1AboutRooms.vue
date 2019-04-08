<template lang="pug">
  Services
    template(#img-background="")
      img.background(src="~/assets/images/services/rooms/bedroom.jpg")
    template(#text-background="")
      p База отдыха «Уржум» предлагает своим гостям настоящее гостеприимство:
      p -домашняя обстановка и уют
      p -современный дизайн номеров
      p -традиционная русская парная
      p -круглосуточно парковка
      p -доброжелательный персонал
</template>

<script>
import Services from '@/components/slots/Services'

export default {
  name: 's1-about-room',
  components: { Services }
}
</script>

<style></style>
