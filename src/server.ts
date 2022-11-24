import { serverHttp } from "./app";
import './websocket'

// app.listen(3000, () => console.log("Server is running on PORT 3000"));
serverHttp.listen(3000, () => console.log("Socket.io is running on PORT 3000"));
