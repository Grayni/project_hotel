<template lang="pug">
  Services
    template(#img-background="")
      img.background(src="~/assets/images/services/caffee/caffee.jpg")
    template(#text-left="")
      .text-left
        p Кафе предоставляет:
        p -Комплексное меню
        p -Меню для проведения
        p &nbsp;праздников и мероприятий
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
