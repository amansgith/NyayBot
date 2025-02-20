import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Send } from "lucide-react";
import ParticlesBackground from "../../components/Particle";

const userId = `user_${Math.random().toString(36).substring(2, 10)}`; // Unique user ID

const socket = io("https://your-backend.onrender.com", {
  transports: ["websocket", "polling"],
  reconnection: true, // Try reconnecting if connection is lost
  reconnectionAttempts: 5, // Limit retries
  reconnectionDelay: 5000 // Wait 5 sec before retry
});

const Livechat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("user_connected", (data) => {
      setMessages((prevMessages) => [...prevMessages, { sender_id: "System", message: `User ${data.sid} connected` }]);
    });

    socket.on("user_disconnected", (data) => {
      setMessages((prevMessages) => [...prevMessages, { sender_id: "System", message: `User ${data.sid} disconnected` }]);
    });

    return () => {
      socket.off("receive_message");
      socket.off("user_connected");
      socket.off("user_disconnected");
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const messageData = { sender_id: userId, message: input };
    socket.emit("send_message", messageData);
    setInput(""); // Clear the input after sending the message
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ParticlesBackground/>
      <div className="bg-yellow-600 z-1 text-white p-4 text-lg font-semibold text-center">
        Live Chat with Lawyers
      </div>

      <div className="z-1 flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded-lg ${msg.sender_id === userId ? "bg-blue-500 text-white self-end" : msg.sender_id === "System" ? "bg-green-300 text-black self-center" : "bg-gray-300 text-black self-start"}`}>
            <strong>{msg.sender_id}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <div className=" z-1 sticky bottom-0 left-0 w-full bg-white shadow-md p-3 flex rounded-lg">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="bg-blue-600 text-white p-2 rounded-r-lg" onClick={sendMessage}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Livechat;
