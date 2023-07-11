import { Socket } from "socket.io";

export interface ISocketRoom {
    clients: Array<Socket>;
}