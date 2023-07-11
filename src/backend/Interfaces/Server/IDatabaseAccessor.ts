import { IBaseClient } from "../Player/IBaseClient";
import { IPlayerClient } from "../Player/IPlayerClient";

export interface IDatabaseAccessor {
    getPlayerStateForClient(client: IBaseClient): IPlayerClient;
}