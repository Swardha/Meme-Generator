import React, {useState} from "react";
import "../Components/style.css";



const Meme = ()=>{


const [search, setSearch] = useState("");
const [name, setName] = useState("Search your meme");
const [image, setImg] = useState(search.url);


const getMeme = async()=>{
     
      const url = " https://meme-api.herokuapp.com/gimme";
      const response = await fetch(url);
      const data = await response.json();
      setSearch(data);
      console.log(data);
      console.log(search.title);

      setName(search.title);
      setImg(search.url);
      // setImg(console.log(search.url));   
  }

return(
    <>
     <div className="container">
          <div className="head">
         <h1 onClick={getMeme}>{name}</h1>
         </div>
        <div className='Memes'>
          <img src={image} alt=""
          className="img-meme"  onClick={getMeme} />
          {/* <img src={search.url} alt="" className="img-meme" /> */}
        </div>
        <div className="head">
         <h1>Hahaha!</h1>
         </div>
        <div className="btn">          
        <button className="button" onClick={getMeme}>Get Meme</button>
         </div>
      </div>
    </>
  )
}

export default Meme;
   
    
   
  

 

  


 