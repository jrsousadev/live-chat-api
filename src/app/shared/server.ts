import { serverHttp } from "./app";
import "./websocket";

const PORT = process.env.PORT || 8080;

serverHttp.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
