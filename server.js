import { PeerServer } from "peer";

const peerServer = PeerServer({
  port: 9000,
  path: "/myapp",
});

console.log("PeerJS server running on port 9000");
