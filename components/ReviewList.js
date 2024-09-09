app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
    `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating > 0 ? '⭐'.repeat(review.rating) : ' 0 stars 😔' }}
        <br/>
        "{{ review.review }}"
        <br/>
        {{ review.recommend ? 'Recommend to friend?:' + review.recommend : '' }}
        <br/>
      </li>
    </ul>
  </div>
`
})