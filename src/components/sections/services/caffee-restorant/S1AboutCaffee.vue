<template lang="pug">
  Services
    template(#img-background="")
      img.background(src="/static/backgrounds/caffee.jpg")
    template(#text-background="")
      p Преимущества кафе Уржум:
      p -Только свежие ингридиенты
      p -Только натуральные продукты
      p -Приемлемые цены
</template>

<script>
import Services from '@/components/slots/Services'

export default {
  name: 's1-about-room',
  components: { Services }
}
</script>

<style></style>
