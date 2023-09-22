import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_API;

export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {	
    (async () => {	
      const response = await axios.get(`${api}?client_id=${accessId}&&query=animal`);
      const { results } = response.data;
      setList(results);
    })()
  },[])

  return (
    <div className="row">
      <div className="col-4">
        left list
        <Link to="search">搜尋</Link>
        {list.map((item) => {	
          return <li key={item.id}>
            <Link to={item.id}>{item.id}</Link></li>
        })}

      </div>
      <div className="col-8">
        <Outlet context={list}/>
      </div>
    </div>
  )
}

