import { useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth, provider } from "./firebase";
import Sidebar from "./components/Sidebar";
import ChatRoom from "./components/ChatRoom";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState("General");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });

    return () => unsub();
  }, []);

  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <div className="login">
        <h1>React Firebase Chat</h1>
        <button onClick={login}>Login With Google</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar setRoom={setRoom} />

      <div className="chat-section">
        <div className="topbar">
          <h2>{room}</h2>

          <button onClick={logout}>
            Logout
          </button>
        </div>

        <ChatRoom room={room} user={user} />
      </div>
    </div>
  );
}

export default App;