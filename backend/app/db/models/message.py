from pydantic import BaseModel

class Message(BaseModel):
    id: int
    user_id: int
    content: str
    timestamp: str
    chat_id: int
