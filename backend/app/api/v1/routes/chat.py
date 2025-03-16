import uuid
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.chat_service import manager

router = APIRouter()

@router.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: str):
    await manager.connect(websocket, user_id)
    try:
        while True:
            data = await websocket.receive_json()
            await manager.send_private_message(data["recipient_id"], data["message"], sender_id=user_id)
    except WebSocketDisconnect:
        await manager.disconnect(user_id)
