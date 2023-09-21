import { Outlet } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_API;
console.log(accessId);
export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {	
    (async () => {	
      // const result = await axios.get(``);
      // console.log(result);
    })()
  },[])

  return (
    <div className="row">
      <div className="col-4">
        left list
      </div>
      <div className="col-8">
        <Outlet />
      </div>
    </div>
  )
}

