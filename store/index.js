import jsonGoods from "~/public/goods.json";

export const state = () => ({
  goods: [],
  favorites: [],
  cart: [],
  archive: []
})

export const mutations = {
  setGoods(state, goods) {
    state.goods = goods;
  },
  setFavorites(state, favs) {
    state.favorites = favs;
  },
  setCart(state, cart) {
    state.cart = cart
  },
  setArchive(state, archive) {
    state.archive = archive
  },
  pushRemoveFavorites(state, id) {
    if (state.favorites.includes(id)) {
      let index = state.favorites.indexOf(id);
      state.favorites.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      state.favorites.push(id)
    }
    window.localStorage.setItem("favorites", JSON.stringify(state.favorites));
  },
  pushToCart (state,id) {
    let found = false;
    let element = {};
    element.id = id;
    element.count = 1;

    if (state.cart.length > 0) {
      state.cart.forEach((item) => {
        if (item.id == id) {
          found = true;
          return;
        }
      });

      if (!found) {
        state.cart.push(element)
        window.localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    } else {
      state.cart.push(element)
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  setCartCount (state, countObj) {
    let targetItemIndex = state.cart.filter(item => {
      return item.id == countObj.id
    })
    targetItemIndex = state.cart.indexOf(targetItemIndex[0])
    state.cart[targetItemIndex].count = countObj.count;
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  removeFromCart(state, id) {
    state.cart.forEach((item, index) => {
      if(item.id == id) {
        state.cart.splice(index, 1)
        return
      }
    })
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  pushToArchive(state) {
    let archiveItem = {date: Date.now(), goods: []} ;
    state.cart.forEach(cartItem => {
      let archiveGood = state.goods.filter( item => {
        return item.id == cartItem.id
      })
      let calculated = {
        id: archiveGood[0].id,
        image: archiveGood[0].image,
        name: archiveGood[0].name,
        price: archiveGood[0].price,
        count: cartItem.count,
        cost: cartItem.count * archiveGood[0].price,
      }
      archiveItem.goods.push( calculated)
       let targetItemIndex = state.goods.indexOf(archiveGood[0])
      state.goods[targetItemIndex].ordercount += cartItem.count;
    })
    state.archive.push(archiveItem);
    state.cart = [];
    window.localStorage.setItem('goods', JSON.stringify(state.goods));
    window.localStorage.setItem('archive', JSON.stringify(state.archive));
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  }
}
