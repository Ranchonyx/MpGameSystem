import { AngularRotationSpec } from "../General/AngularRotationSpec";
import { AreaSpec } from "../General/AreaSpec";
import { CoordinateSpec } from "../General/CoordinateSpec";

export type EntitySpatialSpec = {
    area: AreaSpec;
    position: CoordinateSpec;
    rotation: AngularRotationSpec
}