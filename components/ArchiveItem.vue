<script>
 export default {
  props: {
    item: {
      type: Object
    },
  },
   data() {
    return {
      date: ''
    }
   },
   beforeMount() {
     let unix_timestamp = this.item.date;
     let date = new Date(unix_timestamp );
     this.date = date.toDateString();
   }
 }
</script>

<template>
 <div class="archive-item">
   <div class="date">
     {{ date }}
   </div>
   <div class="archive-good" v-for="good in item.goods">
     <div class="name">
       {{ good.name }}
     </div>
     <div class="price">
       Цена: {{ good.price }}
     </div>
     <div class="count">
       Количество: {{ good.count }}
     </div>
     <div class="cost">
       Итого: {{ good.cost }}
     </div>
   </div>
 </div>
</template>

<style scoped lang="scss">
  .archive-item {
    background: #ddd;
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 20px;

    .date {
      font-size: 18px;
      font-weight: 600;
    }

    &:nth-of-type(2n) {
      background: #bbb;
    }
  }
  .archive-good {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    border-bottom: 1px solid black;
  }
</style>
