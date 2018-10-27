 export default {
       //store.commit("方法名",附加参数)  触发increment,会把state给带过来
      //state是自动带过来的,n是附加参数
      increment (state,obj) {
        // this.state.count++   this指代store
        state.count += obj.n1;// +=10
        // state.count += obj.n2;// +=20
      },
      //点击减少
      reduce(state,n=1){
        //数据请求,请求完成后递减
          //  state.count -= n;
          //  setTimeout(() => {
             //文档意思:不能同步刷新了
             //测试结果:可以同步刷新
            state.count -= n;
          //  },1000)
      },
      // 赋值测试
      Givetext(state,el){
        this.state.count = el
      }
}
