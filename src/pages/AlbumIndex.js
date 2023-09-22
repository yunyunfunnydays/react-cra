import { useOutletContext } from "react-router-dom"
import List from "../components/List";

export default function AlbumIndex() {
  const list = useOutletContext();
  return(<>
    <p>right photo</p>
    <List list={list}/>
  </>)
}
