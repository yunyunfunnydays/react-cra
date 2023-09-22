import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_API;

export default function AlbumSearch() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {

    (async () => {
      const response = await axios.get(`${api}?client_id=${accessId}&&query=${search}`);
      const { results } = response.data;
      setList(results);
    })()
  }, [search])

  useEffect(() => {
    setSearch(searchParams.get('query'));
  }, [searchParams])

  return (<>
    <div>AlbumSearch</div>
    <input type="text" className="form-control"
      defaultValue={search}
      onKeyUp={(e) => {
        if (e.code === 'Enter') {
          setSearchParams({ query: e.target.value });
        }
      }} />
    {list.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/album/${item.id}`}>{item.id}
          </Link>
        </li>
      )
    })}
  </>)
}
