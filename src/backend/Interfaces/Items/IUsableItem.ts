import { AnyResult } from "src/backend/Types/Utility/ImplicitAnyResult";
import { IBaseItem } from "./IBaseItem";
import { Range } from "src/backend/Types/Utility/Range";

export interface IUsableItem extends IBaseItem {
    durability: Range<512>;
    durabilityDecrementPerUse: number; 
    use(): AnyResult;
}