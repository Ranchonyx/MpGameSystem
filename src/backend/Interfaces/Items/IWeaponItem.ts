import { IBaseEntity } from "../Entity/IBaseEntity";
import { IUsableItem } from "./IUsableItem";

export interface IWeaponItem extends Omit<IUsableItem, "use"> {
    damagePerHit: number;
    critChance: number;
    use(target: IBaseEntity): boolean;
};