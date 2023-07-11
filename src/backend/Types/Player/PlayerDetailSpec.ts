import { PlayerRankSpec } from "../General/ObjectRankSpec";

export type PlayerDetailSpec = {
    timeAliveS: number,
    foesKilled: number,
    rank: PlayerRankSpec,
    friends: Array<PlayerDetailSpec | undefined>;
}