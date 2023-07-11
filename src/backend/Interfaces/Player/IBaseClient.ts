import { Socket } from "socket.io";
import { ISocketRoom } from "../Server/ISocketRoom";
import { uuid_t } from "src/backend/Types/Utility/UUID";
export interface IBaseClient {
    clientId: uuid_t;
    socket: Socket;

    //The current socket.io room.
    room: ISocketRoom;

    //Join a socket.io room, replacing the current one.
    joinRoom(): boolean;

    //Leave the current socket.io room.
    leaveRoom(): boolean;
}