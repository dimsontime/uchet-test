<script>

</script>

<template>
  <header class="header">
    <div class="container header-container">
      <router-link to="/" class="header-logo">
        Uchet store
      </router-link>

      <nav class="header-nav">
<!--        <router-link to="/favorites">-->
<!--          избранное-->
<!--        </router-link>-->
        <router-link to="/cart">
          корзина <span v-if="$store.state.cart.length">({{ $store.state.cart.length }})</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 10;
  background: rgba(#fff, .4);
  backdrop-filter: blur(6px);

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    font-weight: bold;
    font-size: 32px;
    color: #010101;
  }

  &-nav {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      font-size: 18px;
      text-transform: uppercase;
      transition: .2s ease;
      color: #101010;
      font-weight: 500;

      &:hover {
        opacity: .8;
      }
    }
  }
}
</style>
