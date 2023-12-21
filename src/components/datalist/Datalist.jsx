import { useState } from "react"
import { useEffect } from "react"
const Search = (props) =>{

   
    const [breeds, setBreeds] = useState([])

    

  useEffect(()=>{
    try{
       fetch('https://api.thecatapi.com/v1/breeds')
      .then(response=>response.json()
      .then(data=>setBreeds(data))
      )
    }catch(msg){
      console.log(msg)
    }
  },[])
  console.log(breeds)
  
    return(
        <>
        <label for="kates">Kaciu ieska</label>
        <input list="kates"  />
        <datalist id="kates">
            {breeds.map((breed)=>
           <option value={breed.name}></option>
            )}
        
        </datalist>
        </>
    )
    }
export default Search
