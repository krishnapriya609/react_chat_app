import { useState } from "react";

function Sidebar({ setRoom }) {
  const [rooms, setRooms] = useState([
    "General",
    "Programming",
    "Movies",
    "Gaming",
    "Sports"
  ]);

  const [newRoom, setNewRoom] = useState("");

  const createRoom = () => {
    if (!newRoom.trim()) return;

    if (!rooms.includes(newRoom)) {
      setRooms([...rooms, newRoom]);
    }

    setRoom(newRoom);
    setNewRoom("");
  };

  return (
    <div className="sidebar">
      <h2>Chat Rooms</h2>

      <div className="room-create">
        <input
          type="text"
          placeholder="Create room"
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
        />

        <button onClick={createRoom}>
          Create
        </button>
      </div>

      {rooms.map((room) => (
        <button
          key={room}
          onClick={() => setRoom(room)}
        >
          {room}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;