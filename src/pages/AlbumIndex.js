import { useOutletContext } from "react-router-dom"

export default function AlbumIndex() {
  const list = useOutletContext();
  return(<>
    <p>right photo</p>
    {list.map((item) => {
      return <li key={item.id}>{item.id}</li>
    })}
  </>)
}