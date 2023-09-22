export default function List({list,children}) {
  return (<>
    {list.map((item) => {
      return <li key={item.id}>
        <Link to={item.id}>{item.id}</Link></li>
    })}
  </>)
}