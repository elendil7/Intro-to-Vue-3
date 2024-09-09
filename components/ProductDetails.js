app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template:
`<div class="product-details">
  <h3>Product Details</h3>
  <ul>
    <li v-for="detail in details">
      {{ detail }}
    </li>
  </ul>
</div>`
})