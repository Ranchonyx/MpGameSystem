import { ConsumableEffectSpec } from "src/backend/Types/Items/ConsumableEffectSpec";
import { IBaseItem } from "./IBaseItem";

export interface IConsumableItem extends IBaseItem {
    effects: ConsumableEffectSpec;
    consumeDurationS: number;
}