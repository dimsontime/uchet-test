<script >
export default {
  props: {
    good: {
      type: Object
    },
  },
  data () {
    return {
      goodC: {},
    }
  },
  beforeMount() {
    this.$store.state.goods.forEach(good => {
      if (this.good.id == good.id) {
        this.goodC = good;
        return;
      }
    })
  },
  methods: {
    removeBtnClick (id) {
      this.$store.commit('removeFromCart', id)
    },
    inputNumber (event, id) {
      this.$store.commit('setCartCount', {count: event.target.value, id: id})
    }
  }
}
</script>

<template>
  <div class="cartgood">
    <div class="img">
      <img
        :src="`/${goodC.image}`">
    </div>
    <div class="name">
      {{goodC.name}}
    </div>
    <div class="price">
      {{goodC.price}}
    </div>
    <div class="count">
      <input type="number" v-bind:value="good.count" min="1" @input="inputNumber($event, good.id)">
      {{ good.count }}
    </div>
    <div class="cost">
      {{ goodC.price * good.count}}
    </div>
    <div class="removebtn" @click="removeBtnClick(good.id)">
      Удалить
    </div>
  </div>
</template>

<style scoped lang="scss">
    .cartgood {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
      margin-bottom: 50px;

      .name {
        flex-grow: 1;
      }

      .img {
        width: 400px;
        height: 250px;
        position: relative;
        overflow: hidden;
        border-radius: 10px;

        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }

      .removebtn {
        font-size: 24px;
        border: 1px solid black;
        padding: 8px 12px 9px;
        cursor: pointer;
      }
    }
</style>
