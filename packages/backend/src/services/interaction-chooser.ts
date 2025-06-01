import { Debtor } from "../models/debtor";
import { CommunicationChannel } from "../models/interaction";

export interface IInteractionChooser {
  determineNext(debtor: Debtor): CommunicationChannel;
}
