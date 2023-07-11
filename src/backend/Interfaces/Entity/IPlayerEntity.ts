import { PlayerDetailSpec } from "src/backend/Types/Player/PlayerDetailSpec";
import { IBaseEntity } from "./IBaseEntity";

export interface IPlayerEntity extends IBaseEntity {
    details: PlayerDetailSpec;
    //Space for magicks
}