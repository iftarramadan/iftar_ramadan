import React,{useState} from 'react'

const CreateData = ({mekla}) => {
    const [url,setUrl]= useState("")
    const [price,setPrice]= useState("")
    const [categories,setCategories]= useState("")
    const [name,setName]= useState("")
    const [description,setDescription]=useState('')


    const addFood=()=>{
        axios.post('http://localhost:3000/api/food/add',{imageUrl:url,name:name,price:price,description:description,categories:[categories]}).then((result)=>{
            mekla()
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
    <input type="text" placeholder='url' onChange={(e)=>{setUrl(e.target.value)}}/>
    <input type="number" placeholder='number'onChange={(e)=>{setPrice(e.target.value)}}/>
    <input type="text" placeholder='categories' onChange={(e)=>{setCategories(e.target.value)}}/>
    <input type="text" placeholder='create name' onChange={(e)=>{setName(e.target.value)}}/>
    <input type="text" placeholder='create description' onChange={(e)=>{setDescription(e.target.value)}}/>
   <input type="button" value="added"  onClick={addFood}/>
    </div>
   
   
  )
}


export default CreateData
