<template>

  <nav class="ul">
    <ul class="header__nav-outer-list">
      <li class="left-side">
        <ul class='header__nav-inner-list'>
          <header-item
              v-for="item in headerItemsLeftSide"
              :key="item.id"
              :item="item"
          ></header-item>
        </ul>
      </li>
      <li class="right-side">
        <ul class='header__nav-inner-list'>
          <header-item
              v-for="item in headerItemsRightSide"
              :key="item.id"
              :item="item"
          >
          </header-item>
        </ul>
      </li>
    </ul>
  </nav>

</template>

<script>
import HeaderItem from "@/components/HeaderItem.vue";

export default {
  components: {
    'header-item': HeaderItem,
  },
  data() {
    return {
      headerItemsLeftSide: [
        {
          id: Date.now(),
          title: 'Home',
          svgIcon: `<svg class="svg-icon" viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <g id='SVGRepo_bgCarrier' stroke-width='0'></g> <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g> <g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18Z' ></path> </g> </svg>`
        },
        {
          id: Date.now(),
          title: 'Calendar',
          svgIcon: `<svg class="svg-icon" viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <g id='SVGRepo_bgCarrier' stroke-width='0'></g> <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g> <g id='SVGRepo_iconCarrier'> <path d='M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' fill='transparent'></path> </g> </svg>`
        }
      ],
      headerItemsRightSide: [
        {
          id: Date.now(),
          title: 'Focus',
          svgIcon: `<svg class="svg-icon" viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <g id='SVGRepo_bgCarrier' stroke-width='0'></g> <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g> <g id='SVGRepo_iconCarrier'> <path d='M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='transparent'></path> </g> </svg>`
        },
        {
          id: Date.now(),
          title: 'Profile',
          svgIcon: `<svg class="svg-icon" viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' fill='#000000'> <g id='SVGRepo_bgCarrier' stroke-width='0'></g> <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g> <g id='SVGRepo_iconCarrier'> <path d='M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z'></path> </g> </svg>`
        }
      ],
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.header__wrapper {
  padding: 15px 0;
}

.header__nav-outer-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>