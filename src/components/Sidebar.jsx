const rooms = [
  "General",
  "Programming",
  "Movies",
  "Gaming",
  "Sports"
];

function Sidebar({ setRoom }) {
  return (
    <div className="sidebar">
      <h2>Chat Rooms</h2>

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