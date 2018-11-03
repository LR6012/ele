let getters = {
      //购物车商品数量计算
      totleCount(state){
        let count = 0;
        state.cartData.forEach( (goods) => {
          count += goods.count1;
        })
        return count
      },
      //总价格
      totlePrice(state){
        let price = 0;
        state.cartData.forEach((goods) => {
          price += goods.price;
        })
        return price;
      }
};
export {getters};


