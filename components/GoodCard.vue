<script>
export default {
  props: {
    good: {
      type: Object
    },
  },
  methods: {
    atFavClick (id) {
      this.$store.commit('pushRemoveFavorites', id)
    },
    addCartClick (id) {
      this.$store.commit("pushToCart", id)
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="img-wrapper">
      <img
        :src="`/${good.image}`">
    </div>
    <div class="card-bottom">
      <h5>{{good.name}}</h5>
      <p class="card-count">
        Заказов: <span>{{good.ordercount}}</span>
      </p>
      <p class="card-price">
        Цена: {{good.price}}тг
      </p>
      <p class="addToCart" @click="addCartClick(good.id)">
        В корзину
      </p>
      <div class="favorite"
           :class="this.$store.state.favorites.includes(good.id) ? 'active' : null"
           @click="atFavClick(good.id)"
      >
        <svg  id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 489.292 489.292" xml:space="preserve">
          <g id="XMLID_9_">
            <g id="XMLID_1562_" class="fill">
              <path style="fill:#F7931E;" d="M481.646,162.772c0-73.89-59.9-133.79-133.79-133.79c-43.264,0-80.821,19.594-105.276,51.449
                c-23.692-31.796-62.265-51.449-104.965-51.449C65.834,28.982,7.646,87.17,7.646,158.95c0,30.039,5.822,62.087,22.936,84.097l0,0
                L244.646,458.23L443.42,258.337l0,0C467.812,234.102,481.646,199.873,481.646,162.772z"/>
            </g>
            <g id="XMLID_1602_" class="fill">
              <path style="fill:#FBB03B;" d="M244.646,82.498c0,0,116.976,84.125,2.239,373.48L22.476,229.99l-14.83-65.396l20.421-77.871
                L83.4,40.056l60.977-12.193l69.689,24.054L244.646,82.498z"/>
            </g>
            <g id="XMLID_1699_">
              <polygon style="fill:#FFFFFF;" points="246.885,455.978 22.476,229.99 15.291,196.199 260.216,442.625 		"/>
            </g>
            <g id="XMLID_514_">
              <path style="fill:#1D1D1B;" d="M244.645,469.074L48.201,271.479C17.566,242.97,0,204.022,0,164.594
                C0,84.985,64.768,20.217,144.377,20.217c36.431,0,72.554,15.32,100.269,42.286c27.716-26.966,63.84-42.286,100.27-42.286
                c79.609,0,144.376,64.768,144.376,144.377c0,39.428-17.566,78.377-48.2,106.885L244.645,469.074z M144.377,35.508
                c-71.179,0-129.086,57.907-129.086,129.086c0,34.721,16.234,70.528,43.429,95.786l0.219,0.211l185.707,186.795l185.815-186.902
                l0.111-0.104C457.766,235.124,474,199.316,474,164.594c0-71.179-57.907-129.086-129.085-129.086
                c-34.701,0-69.206,15.722-94.668,43.135l-5.602,6.03l-5.602-6.03C213.583,51.23,179.078,35.508,144.377,35.508z"/>
            </g>
            <g id="XMLID_579_">

                <rect x="286.694" y="294.433" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 252.226 812.2708)" style="fill:#1D1D1B;" width="15.291" height="118.93"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-bottom: 1px solid #989898;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .img-wrapper {
    width: 100%;
    padding-bottom: 65%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  .addToCart {
    font-weight: 600;
    cursor: pointer;
  }

  h5 {
    margin: 0 0 10px;
    font-size: 18px;
  }

  &-bottom {
    padding: 10px;
  }

  .favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    z-index: 3;
    cursor: pointer;

    .fill {
      opacity: 0;
      transition: .2s ease;
    }

    &.active .fill {
      opacity: 1;
    }

    &:hover .fill {
      opacity: 1;
    }
  }
}
</style>
