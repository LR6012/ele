let getters = {
     //筛选vip用户
      //普通函数
        // vipTodos(state){},
        //箭头函数
        vipTodos:(state)=>{
            return state.todos.filter(todo => todo.vip)
          }
};
export {getters};


