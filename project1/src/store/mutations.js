 export default {
   //store.commit("方法名",附加参数)  触发increment,会把state给带过来
   //state是自动带过来的,n是附加参数
   change(state, value) {
     state.denglu = value;
   },
   changeusermsg(state, value) {
     state.usermsg = value;
   },
   changeusermsg(state, value) {
    state.usermsg = value;
  },
   //receiveid
   receiveid(state, value) {
     alert(value)
     state.id = value;
   },
   receivegeohash(state, value) {
     state.geohash = value;
   },
   shopFoods(state,el){
    state.shopFoods = el
  },
    //向购物车添加数据,循环数据
  //如果商品ID存在(购物车的id和传进来的ID比对)，就设置count++
  addCartData(state,data){
    let flag = true;
    state.cartData.forEach( (goods) => {
       if(goods.name == data.name){
         goods.count1 ++;
         goods.price += data.price;
         flag = false;
       }
    })
    if(flag){
      let goodsData = data;
      state.cartData.push(goodsData);
    }
   //  console.log(state.cartData);
 },
 //从购物车删除数据
 deleteCartData(state,data){
   let flag = true;
   state.cartData.forEach( (goods) => {
      if(goods.name == data.name){
       if(goods.count1 == 0) return;
        goods.count1 --;
        goods.price -= data.price;
        flag = false;
      }
   })
   if(flag){
     let goodsData = data;
     state.cartData.pop(goodsData);
   }
   // console.log(state.cartData);
 },
 clearCart(state){
    state.cartData = []
 }
 }
