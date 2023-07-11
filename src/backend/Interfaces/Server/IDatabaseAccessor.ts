import { UserAuthDetail } from "src/backend/Types/Utility/UserAuthDetail";
import { IBaseClient } from "../Player/IBaseClient";
import { IPlayerClient } from "../Player/IPlayerClient";

export interface IDatabaseAccessor {
    compareAuthDetailsAndCreateBaseClient(authDetail: UserAuthDetail): IBaseClient;
    getPlayerStateForClient(client: IBaseClient): IPlayerClient;
}