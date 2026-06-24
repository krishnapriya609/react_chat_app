import {
  addDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { db } from "../firebase";

function ChatRoom({ room, user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "rooms", room, "messages"),
      orderBy("createdAt")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });

    return () => unsub();
  }, [room]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    await addDoc(
      collection(db, "rooms", room, "messages"),
      {
        text: message,
        uid: user.uid,
        name: user.displayName,
        createdAt: serverTimestamp()
      }
    );

    setMessage("");
  };

  return (
    <>
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.uid === user.uid
                ? "my-message"
                : "message"
            }
          >
            <strong>{msg.name}</strong>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Type message..."
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
}

export default ChatRoom;