import { useState } from "react";
import { useEffect } from "react";
import Cat from "../cat/Cat";
import Search from "../datalist/Datalist";
const  App = ()=> {
  const [cats, setCats] = useState([])
  const [search, setSearch] = useState()
 
  const handleSearch = (data)=>{
        setSearch(data)
    }
   

  useEffect(()=>{
    try{
      fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
      .then(response=>response.json()
      .then(data=>setCats(data))
      )
    }catch(msg){
      console.log(msg)
    }
  },[])
  console.log(cats)
  return (
    <div>
     <Search/>
     {cats?.map((cat)=>
      <Cat name={cat.name}/>)}
     
    </div>
  );
  }

export default App;


