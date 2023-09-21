import AlbumIndex from "./AlbumIndex";

export default function AlbumLayout() {
  return (
    <div className="row">
      <div className="col-4">
        left list
      </div>
      <div className="col-8">
        <AlbumIndex></AlbumIndex>
      </div>
    </div>
  )
}