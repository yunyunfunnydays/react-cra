import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import  List  from "../components/List";

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}?client_id=${ accessId }&query=animal`);
      const { results } = response.data
      setList(results);
    })()
  }, []) 

  return (
    <div className="row">
      <div className="col-4">
        left list
        <Link to="search">搜尋</Link>
        <List list={list} />
      </div>
      <div className="col-8">
        <Outlet context={list}/>
        <Outlet context={list}/>
      </div>
    </div>
  )
}

