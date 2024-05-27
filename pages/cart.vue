<script >
import jsonGoods from "~/public/goods.json";

export default {
  name: 'IndexPage',
  layout: 'normal',
  mounted() {
    if (window.localStorage.cart) {
      this.$store.commit("setCart", JSON.parse(window.localStorage.getItem("cart")))
    }
    if (window.localStorage.archive) {
      this.$store.commit("setArchive", JSON.parse(window.localStorage.getItem("archive")))
    }
    if (window.localStorage.archive) {
      this.$store.commit("setGoods", JSON.parse(window.localStorage.getItem("goods")))
    }
  },
  methods: {
    paymentClick() {
      this.$store.commit('pushToArchive')
    }
  },
  computed: {
    archive() {
      return this.$store.state.archive
    },
    totalCost() {
      let sum = 0;
      this.$store.state.cart.forEach(cartItem => {
        let targetItemIndex = this.$store.state.goods.filter(item => {
          return item.id == cartItem.id
        })
        targetItemIndex = this.$store.state.goods.indexOf(targetItemIndex[0])
        console.log(this.$store.state.goods[targetItemIndex].price)
        sum += (this.$store.state.goods[targetItemIndex].price * cartItem.count);
      })
      return sum
    }
  },
}
</script>

<template>
  <div class="cartpage container">
    <div v-if="!this.$store.state.cart.length">
      <h1>Корзина пуста</h1>
    </div>
    <div v-if="this.$store.state.cart.length">
      <cart-good v-for="(good, index) in this.$store.state.cart" :good="good" :key="index"></cart-good>
      <div class="paymentbtn-wrapper">
        <div class="total">
          {{ totalCost }} ТГ
        </div>
        <div class="paymentbtn" @click="paymentClick">
          Оплатить
        </div>
      </div>
    </div>

    <div v-if="archive.length" class="archive">
      <archive-item v-for="(item, index) in archive" :item="item" :key="index"></archive-item>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 128px;
  text-align: center;
  margin: 200px auto;
}

.paymentbtn {
  background: #FBB03B;
  color: #fff;
  border: 2px solid #FBB03B;
  font-size: 32px;
  padding: 22px 40px 22px;
  display: inline-block;
  border-radius: 200px;
  transition: .3s ease;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #fff;
    color: #FBB03B;
  }
}

.total {
  font-size: 48px;
}
.paymentbtn-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
}
</style>
