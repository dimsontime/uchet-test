<template>
  <div class="homepage container">
    <div class="homepage-nav">
      <div class="homepage-nav-wrapper">
        <div class="homepage-nav__link"
             :class="this.filter == 'all' ? 'active' : null"
             @click="filterClick('all')"
        >Все товары</div>
        <div class="homepage-nav__link"
             :class="this.filter == 'food' ? 'active' : null"
             @click="filterClick('food')"
        >Еда</div>
        <div class="homepage-nav__link"
             :class="this.filter == 'drink' ? 'active' : null"
             @click="filterClick('drink')"
        >Вода</div>
        <div class="homepage-nav__link"
             :class="this.filter == 'mebel' ? 'active' : null"
             @click="filterClick('mebel')"
        >Мебель</div>
        <div class="homepage-nav__link"
             :class="this.filter == 'dishes' ? 'active' : null"
             @click="filterClick('dishes')"
        >Посуда</div>
      </div>
    </div>
    <div class="homepage-content">
      <good-card
        v-for="good in (goodsToShow.length ? goodsToShow : goods)"
        :good="good"
        :key="good.id"
      >
      </good-card>
    </div>
  </div>
</template>

<script>
import jsonGoods from "~/public/goods.json"
export default {
  name: 'IndexPage',
  layout: 'normal',
  data() {
    return {
      filter: 'all',
      goodsToShow: []
    }
  },
  computed: {
    goods() {
      return this.$store.state.goods
    }
  },
  mounted() {
    if (!window.localStorage.goods) {
      window.localStorage.setItem("goods", JSON.stringify(jsonGoods))
      this.$store.commit('setGoods', jsonGoods);
    } else {
      this.$store.commit('setGoods', JSON.parse(window.localStorage.getItem("goods")));
    }

    if (window.localStorage.favorites) {
      this.$store.commit("setFavorites", JSON.parse(window.localStorage.getItem("favorites")))
    }

    if (window.localStorage.cart) {
      this.$store.commit("setCart", JSON.parse(window.localStorage.getItem("cart")))
    }
  },
  methods: {
    filterClick(filter) {
      if (filter == this.filter) {
        return
      }
      this.filter = filter;
      if (filter == 'all') {
        this.goodsToShow = this.goods;
      } else {
        this.goodsToShow = [];
        this.goods.forEach((good)=>{
          if (good.category == filter) {
            this.goodsToShow.push(good)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;

  &-nav {
    display: flex;
    flex-direction: column;
    width: 400px;

    &-wrapper {
      position: sticky;
      top: 100px;
      left: 0;
    }

    &__link {
      cursor: pointer;
      font-weight: 400;
      font-size: 18px;
      margin: 10px 0;

      &.active {
        font-weight: 600;
      }
    }
  }

  &-content {
    flex-grow: 1;
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
