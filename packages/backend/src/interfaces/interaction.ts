// Communication channels we might use
export type CommunicationChannel = "EMAIL" | "SMS" | "PHONE_CALL" | "LETTER";

// Intents detected from previous responses
export type InteractionIntent =
  | "POSITIVE_RESPONSE"
  | "NEGATIVE_RESPONSE"
  | "NEUTRAL"
  | "NO_RESPONSE";

// One past interaction record
export interface PastInteraction {
  channel: CommunicationChannel;
  timestamp: string;
  intent: InteractionIntent;
}
