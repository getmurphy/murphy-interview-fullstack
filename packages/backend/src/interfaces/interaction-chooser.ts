import { Debtor } from "./debtor";
import { CommunicationChannel } from "./interaction";

export interface IInteractionChooser {
  determineNext(debtor: Debtor): CommunicationChannel;
}
