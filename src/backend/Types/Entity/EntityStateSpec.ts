import { EntitySpatialSpec } from "./EntitySpatialSpec"
import { Range } from "../Utility/Range";
import { InventorySpec } from "./InventorySpec";

export type EntityStateSpec = {
    spatial: EntitySpatialSpec;
    health: Range<0xff>;
    inventory: InventorySpec;
}