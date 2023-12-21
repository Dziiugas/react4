import { useState } from "react"
const AddUser = (props)=>{
    const [showForm, setShowForm] = useState(false);
        setShowForm(true)
    
    return(
        <>
        <button onClick={()=>{setShowForm(true)}}>Naujas vartotojas</button>
        {showForm?
        <form>
            <input type="text" onChange={props.onSave} placeholder="iveskite"/>
        </form>:
        <p>Naujas</p>
        }
        </>
    )
}

export default AddUser