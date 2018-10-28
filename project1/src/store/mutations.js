 export default {
       //store.commit("方法名",附加参数)  触发increment,会把state给带过来
      //state是自动带过来的,n是附加参数
      change(state,value){
        state.denglu = value;
     },
     changeusermsg(state,value){
       state.usermsg = value;
     },
     editinfo(state,value){
        state.info = value;
     },
      // 赋值测试
      Givetext(state,el){
        this.state.count = el
      }
}
