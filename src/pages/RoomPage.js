import { useParams } from "react-router-dom";
import RoomItem from "../components/Room/RoomItem";
import { rooms } from "../store/searchSlice";

function RoomPage() {
  const { roomId } = useParams();
  const currentRoom = rooms.find((room) => room.id === parseInt(roomId));
  return <RoomItem currentRoom={currentRoom} />;
}

export default RoomPage;
