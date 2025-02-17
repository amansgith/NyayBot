from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_socketio import SocketManager
import uvicorn

app = FastAPI()

# ✅ Fix: Allow CORS (Important for WebSockets)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# ✅ Fix: Ensure Socket.IO handles WebSockets properly
socket_manager = SocketManager(app=app, mount_location="/socket.io")
app.mount("/socket.io", socket_manager)

@app.get("/")
async def root():
    return {"message": "FastAPI Socket.IO Server is Running!"}

# Handle New Connection
@socket_manager.on("connect")
async def connect(sid, environ):
    print(f"✅ Client {sid} connected")
    await socket_manager.emit("user_connected", {"sid": sid})

# Handle Disconnection
@socket_manager.on("disconnect")
async def disconnect(sid):
    print(f"❌ Client {sid} disconnected")
    await socket_manager.emit("user_disconnected", {"sid": sid})


# Handle Chat Messages
@socket_manager.on("send_message")
async def handle_message(sid, data):
    sender_id = data.get("sender_id")
    message = data.get("message")
    print(f"📩 Message from {sender_id}: {message}")
    
    # Broadcast message to all clients
    await socket_manager.emit("receive_message", {"sender_id": sender_id, "message": message})


if __name__ == "__main__":
    uvicorn.run("socket_server:app", host="0.0.0.0", port=8000, reload=True)
