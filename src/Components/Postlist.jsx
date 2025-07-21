import Card from "./Card";
import { useContext } from "react";
import { PostData } from "./store/Card-store";

function PostList( ) {
  const { postLine , addDataOnline } = useContext(PostData);


  return (
    <div>
      <div >
        {postLine.length === 0 && <div>No Posts Yet</div>}
      </div>

      <div>
        {postLine.map((saare) => (
          <Card key={saare.id} saare={saare} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
