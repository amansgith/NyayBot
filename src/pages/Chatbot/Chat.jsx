import { useState, useRef, useEffect } from "react";
import {
  Send,
  Paperclip,
  ShieldCheck,
  FileText,
  MessageCircle,
} from "lucide-react";
import './Chat.css'

import ParticlesBackground from "../../components/Particle";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error fetching response.", sender: "bot" },
      ]);
    }finally {
      setLoading(false); // Re-enable send button after response
    }
  };

  return (
    <div className="z-1 sticky flex flex-col h-screen">
      {/* Chat Header */}
        <ParticlesBackground/>
      <div className="z-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-4 text-lg font-semibold text-center">
        Legal Advisor Chatbot
      </div>

      {/* Welcome Message & Features */}
      {messages.length === 0 && (
        <div className="z-3 text-center text-gray-900 italic mt-6 text-xl">
          🤖 Welcome to the Legal Advisor Chatbot!
          <p className="text-blue-300">
            Ask your legal questions or upload a document for insights.
          </p>
          {/* Features Section */}
          <div className="mt-6 mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-6">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition transform hover:scale-105">
              <ShieldCheck size={40} className="text-yellow-700 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                AI Powered Legal Advice
              </h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition transform hover:scale-105">
              <FileText size={40} className="text-yellow-700 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Legal Document Summarizer
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Chat Messages Container (Now Starts from Header) */}
      <div
        ref={chatContainerRef}
        className="flex-1 z-1 p-4 overflow-y-auto space-y-3 mt-4"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs md:max-w-sm lg:max-w-md shadow-md ${
              msg.sender === "user"
                ? "bg-yellow-600 text-white self-end ml-auto"
                : "bg-yellow-200 text-gray-900 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="sticky z-10 bottom-0 left-0 w-full bg-white shadow-md p-3 flex rounded-lg mx-auto mb-2 border border-yellow-500 max-w-4xl">
        <label className="cursor-pointer p-2">
          <Paperclip size={22} className="text-yellow-700" />
          <input
            type="file"
            className="hidden"
            onChange={(e) => console.log(e.target.files[0])}
          />
        </label>

        <input
          type="text"
          className="flex-1 p-2 text-gray-800 focus:outline-none"
          placeholder="Ask something or upload a document..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        {/* Send Button (Disabled During Response) */}
        <button
          className={`cursor-pointer bg-yellow-700 text-white p-2 rounded-lg ml-2 transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-800"
          }`}
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "⏳" : <Send size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Chat;
