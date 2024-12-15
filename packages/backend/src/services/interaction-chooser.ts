import { Debtor } from "../interfaces/debtor";
import { CommunicationChannel } from "../interfaces/interaction";
import { IInteractionChooser } from "../interfaces/interaction-chooser";

/**
 * Instructions:
 *
 * Implement the `determineNextChannel(debtor: Debtor): CommunicationChannel` function.
 *
 * We want to choose a communication channel for the debtor based solely on past interactions.
 *
 * Channels and Availability:
 *  - If email is present, EMAIL is available.
 *  - If phone is present, PHONE_CALL and SMS are available.
 *  - LETTER is always available.
 *
 * Interactions adjust scores with these rules:
 *   POSITIVE_RESPONSE: +20
 *   NEUTRAL: +5
 *   NEGATIVE_RESPONSE: -10
 *   NO_RESPONSE: -5
 *
 * Frequency Penalty (applied after summing channel interactions):
 *   Count how many times that channel was used in the last 30 days.
 *   - 0-3 times: factor 1.0 (no penalty)
 *   - 4-5 times: factor 0.8
 *   - >5 times: factor 0.5
 *
 *
 * Start all channels at 0 score. For each interaction, add (interaction score * weight).
 *
 * Tie-breaking logic:
 *   - If multiple channels have the same maximum score, pick based on the following priority:
 *     PHONE_CALL > SMS > EMAIL > LETTER
 *   - This also applies when all scores end up at zero.
 *
 * After implementing, run:
 *    pnpm --filter ./packages/backend test
 *
 * to verify your solution.
 */

export class IntegrationChooser implements IInteractionChooser {
  determineNext(debtor: Debtor): CommunicationChannel {
    throw new Error("Not implemented");
  }
}
