import { IBaseItem } from "src/backend/Interfaces/Items/IBaseItem";
import { Range } from "../Utility/Range";

export type ItemStackSpec<T extends IBaseItem> = {stackSize: Range<64>, item: T};