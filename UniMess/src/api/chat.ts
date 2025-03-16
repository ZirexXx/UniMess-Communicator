let socket: WebSocket | null = null;
let userId = "";

const users = [
  { id: "user123", name: "Alice" },
  { id: "user456", name: "Bob" },
];

function selectRandomUser() {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

export function connectWebSocket(onUserIdGenerated: (id: string) => void, onMessageReceived: (msg: any) => void) {
  const selectedUser = selectRandomUser();
  userId = selectedUser.id;

  onUserIdGenerated(userId);
  
  socket = new WebSocket(`ws://localhost:8000/ws/${userId}`);

  socket.onopen = () => {
    console.log("WebSocket connected!");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Received message:", data);
    onMessageReceived(data);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");
  };
}

export function sendPrivateMessage(recipientId: string, message: string) {
    if (userId === "user456") {
        recipientId = "user123";
    }
    else {
        recipientId = "user456";
    }
    if (socket && socket.readyState === WebSocket.OPEN) {
        const payload = {
        recipient_id: recipientId,
        message,
        sender_id: userId
        };
        socket.send(JSON.stringify(payload));
        console.log("Sent message:", payload);
    } else {
        console.warn("WebSocket not connected");
    }
}
