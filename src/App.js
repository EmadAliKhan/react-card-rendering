import './App.css'
import Button  from "./components/button";
import {useEffect,useState} from 'react'
import axios from 'axios'
function App() {
  const[productData,setProductData] = useState([])
  const[isLoading,setIsLoading]= useState(false)
  const getData = async()=>{
    setIsLoading(true)
    try{
      const response =  await axios.get("https://fakestoreapi.com/products/")
      setIsLoading(false)
      console.log(response.data);
      setProductData(response.data)
    }catch{
      setIsLoading(false)
      console.log("err");
    }
  }
  useEffect(()=>{
getData()
  },[])

  return (
<div className="mainContainer">
  {
    isLoading?<img src='https://i.stack.imgur.com/8puiO.gif'/>:productData.map((e,i)=><div key={i} className='cardParent'>
  <section className='card'>
  <img src={e.image} width={200}/>
  <h3 style={{fontSize:22}}>{e.title}</h3>
  <hr/>
  <p style={{fontWeight:"bolder"}}>{e.category}</p>
  <p>{e.description}</p>
      
  <Button label={e.price}/>
  </section>
  </div>
)
  }
</div>
  );
}
export default App;
