<template>
  <div class="twelve-chairs">
    <Word :word=" 'The Twelve Chairs' "></Word>
    <h2>THE MUSE OF TRAVEL</h2>
    <p>An  hour before  the evening  mail-train was due in,  Father  Theodore,
    dressed in a  short coat  which came  just below  the  knee, and carrying  a
    wicker basket, stood in line in front of the booking-office and kept looking
    apprehensively at  the station entrance. He was afraid that  in spite of his
    insistence,  his wife might  come  to  see him  off,  and  then  Prusis, the
    stall-owner, who was sitting in the buffet treating the income-tax collector
    to a glass of beer, would immediately recognize him. Father  Theodore stared
    with shame and surprise  at his striped trousers, now exposed to the view of
    the entire laity.</p>
    <p>The process of boarding a train without reserved seats took  its normal
    and scandalous  course.  Staggering  under  the  weight  of  enormous sacks,
    passengers ran  from the front of  the train to the  back,  and then  to the
    front again. Father Theodore followed them in a daze. Like everyone else, he
    spoke to  the conductors  in an ingratiating tone, like everyone else he was
    afraid he had been  given  the  "wrong" ticket, and it was only when he  was
    finally allowed  into a coach  that his customary calm returned and  he even
    became happy.</p>
    <a href="http://lib.ru/ILFPETROV/ilf_petrov_12_chairs_engl.txt" target="_blank">Read more...</a>
  </div>
</template>

<script>
import Word from '../components/Word.vue'

export default { 
  name: 'TwelveChairs',
  components: {
    Word
  }
}
</script>

<style lang="sass" scoped>
.twelve-chairs
  margin: 7vh 7vw
  p 
    text-align: justify
  a 
    color: $lightBlue
    transition: .5s
    &:hover
      color: lighten($lightBlue, 10%)
</style>
