import React, {useState} from "react";
import Products from './product'

const App = () => {
  const [search,setsearch]= useState("");
  const [data,setdata]= useState([]);
  const YOUR_APP_ID = "29e487e5";
  const YOUR_APP_KEY = "3b1a21dcd0e1e057eee123fee7362d64";

  const submithandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
    ).then (response => response.json()
    ).then ( data => setdata(data.hits))
    
  }
  return(
    <div>
      <center>
       <h4>Food recipe App</h4><br/>
       <form onSubmit={submithandler}>
           <input type="text" value={search}  onChange={(e) => setsearch(e.target.value)}/> <br/>
           <br/><input type="submit" className="btn btn-primary" value="Search" />
        </form>
        {data.length >=1 ? <Products data={data} /> : null}
      </center>  
    </div>
  )
}



export default App;