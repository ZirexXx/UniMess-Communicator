from fastapi import WebSocket, WebSocketDisconnect
from typing import List

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, WebSocket] = {}

    async def connect(self, websocket: WebSocket, user_id: str):
        await websocket.accept()
        self.active_connections[user_id] = websocket

    async def disconnect(self, user_id: str):
        if user_id in self.active_connections:
            del self.active_connections[user_id]

    async def send_private_message(self, recipient_id: str, message: str, sender_id: str):
        if recipient_id in self.active_connections:
            await self.active_connections[recipient_id].send_json({"sender": sender_id, "message": message})

manager = ConnectionManager()