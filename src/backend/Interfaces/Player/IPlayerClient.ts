import { IBaseClient } from "./IBaseClient";
import { IPlayerEntity } from "../Entity/IPlayerEntity";

export interface IPlayerClient extends IBaseClient, IPlayerEntity {
    //Direct message another player.
    dm(target: IPlayerClient, message: string): boolean;

    //Broadcast a message to the current room.
    chat(message: string): boolean;
}