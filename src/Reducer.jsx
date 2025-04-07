

const Reducer=(state={current:true},action)=>{
    switch(action.type){
        case "RED":
            return state={current:false}
    
        case "BLUE":
            return state={current:true}
        default:
            return {current:true}
      }      

}
export default Reducer