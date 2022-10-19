import React, {useState} from "react";
import "../Components/style.css";



const Meme = ()=>{

const [search, setSearch] = useState("");

const getMeme = async()=>{
     
      const url = " https://meme-api.herokuapp.com/gimme";
      const response = await fetch(url);
      const data = await response.json();
      setSearch(data);
      console.log(data);

    
    }

 return(
    <>
     <div className="container">
          <div className="head">
         <h1>{search.title}</h1>
         </div>
        <div className='Memes'>
          {/* <img src="https://cdn.kapwing.com/collections/image_633305942c31ae00bc414f75_531028.png"
           alt="hello" className="img-meme" /> */}
          <img src={search.url} alt="" className="img-meme" />
        </div>
        <div className="head">
         <h1>Hahaha!</h1>
         </div>
        <div className="btn">          
        <button className="button" onClick={()=>{getMeme()}}>Get Meme</button>
         </div>
      </div>
    </>
  )
}

export default Meme;
   
    
   
  

 

  


 