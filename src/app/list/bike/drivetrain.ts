import { Cassette } from "./cassette";
import { ChainRing } from "./chain-ring";

export interface Drivetrain {
  chainring:ChainRing,
  cassette:Cassette,
}
