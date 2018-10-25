  export default {
      //context:上下文,类似store对象
    //方式一
    //  asyReduce(context,n){
    //    //异步请求成功后,触发mutations函数
    //    setTimeout(() => {
    //      context.commit('reduce',n);
    //    },1000);
    //  }
      //方式二
      //{commit} = context 
     //{name} = {name:"张三"}  对象的解构赋值
     asyReduce({commit},n){
        setTimeout(() => {
           commit('reduce',n);
        },1000);
       }
  }
