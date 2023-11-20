<template>
  <li>
    <a href='#' class='link' v-html="htmlContent"></a>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      htmlContent: `
        ${this.item.svgIcon}
        <span>${this.item.title}</span>
      `
    }
  }
}
</script>

<style lang="scss">
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.header__nav-inner-list svg {
  width: 35px;
  height: 40px;
  fill: white;
  stroke: white;
  object-fit: cover;
}

.header__nav-inner-list {
  display: flex;
  gap: 75px;
}

.header__nav-inner-list span {
  text-transform: capitalize;
  color: white;
  font-size: 17px;
}
</style>