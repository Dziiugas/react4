const Cat = (props)=>{
    return(
        <div>{props.name}</div>,
        <div><img src={props.url}></img></div> 
    ) 
}
export default Cat