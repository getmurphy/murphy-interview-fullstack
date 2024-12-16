import { Debtor } from "../interfaces/debtor";
import { IInteractionChooser } from "../interfaces/interaction-chooser";
import { IntegrationChooser } from "../services/interaction-chooser";

function daysAgo(days: number): string {
  const now = new Date();
  now.setDate(now.getDate() - days);
  return now.toISOString();
}

describe("determineNextChannel", () => {
  const chooser = new IntegrationChooser();

  test("no interactions all channels available: PHONE_CALL should win if all zero", () => {
    const debtor: Debtor = {
      id: "1",
      name: "No Interactions",
      amountOwed: 1000,
      email: "test@example.com",
      phone: "555-1234",
      pastInteractions: [],
    };
    const result = chooser.determineNext(debtor);
    expect(result).toBe("PHONE_CALL");
  });

  test("positive response email only", () => {
    const debtor: Debtor = {
      id: "2",
      name: "Email Positive",
      amountOwed: 500,
      email: "test@example.com",
      pastInteractions: [
        {
          channel: "EMAIL",
          timestamp: daysAgo(3),
          intent: "POSITIVE_RESPONSE",
        },
      ],
    };
    const result = chooser.determineNext(debtor);
    expect(result).toBe("EMAIL");
  });

  test("negative and no response email plus phone", () => {
    const debtor: Debtor = {
      id: "3",
      name: "Unresponsive",
      amountOwed: 300,
      email: "bad@example.com",
      phone: "555-1234",
      pastInteractions: [
        { channel: "EMAIL", timestamp: daysAgo(2), intent: "NO_RESPONSE" },
        {
          channel: "EMAIL",
          timestamp: daysAgo(10),
          intent: "NEGATIVE_RESPONSE",
        },
      ],
    };
    const result = chooser.determineNext(debtor);
    expect(result).toBe("PHONE_CALL");
  });

  test("neutral responses email and letter", () => {
    const debtor: Debtor = {
      id: "4",
      name: "Neutral Debtor",
      amountOwed: 200,
      email: "neutral@example.com",
      pastInteractions: [
        { channel: "EMAIL", timestamp: daysAgo(3), intent: "NEUTRAL" },
        { channel: "LETTER", timestamp: daysAgo(20), intent: "NEUTRAL" },
      ],
    };
    const result = chooser.determineNext(debtor);
    expect(result).toBe("EMAIL");
  });

  test("tie between sms and phone_call should pick PHONE_CALL", () => {
    const debtor: Debtor = {
      id: "5",
      name: "Tie Debtor",
      amountOwed: 400,
      phone: "555-9999",
      pastInteractions: [
        { channel: "SMS", timestamp: daysAgo(10), intent: "POSITIVE_RESPONSE" },
        {
          channel: "PHONE_CALL",
          timestamp: daysAgo(10),
          intent: "POSITIVE_RESPONSE",
        },
      ],
    };
    const result = chooser.determineNext(debtor);
    expect(result).toBe("PHONE_CALL");
  });

  test("frequency penalty scenario many sms", () => {
    const debtor: Debtor = {
      id: "6",
      name: "Freq SMS",
      amountOwed: 1000,
      phone: "555-5555",
      pastInteractions: [
        { channel: "SMS", timestamp: daysAgo(1), intent: "NO_RESPONSE" },
        { channel: "SMS", timestamp: daysAgo(2), intent: "NEGATIVE_RESPONSE" },
        { channel: "SMS", timestamp: daysAgo(3), intent: "NEUTRAL" },
        { channel: "SMS", timestamp: daysAgo(4), intent: "POSITIVE_RESPONSE" },
        { channel: "SMS", timestamp: daysAgo(5), intent: "NO_RESPONSE" },
        { channel: "SMS", timestamp: daysAgo(6), intent: "NEUTRAL" },
      ],
    };
    const result = chooser.determineNext(debtor);
    expect(result).toBe("SMS");
  });

  test("all zero no interactions no phone no email means LETTER", () => {
    const debtor: Debtor = {
      id: "7",
      name: "Letter Only",
      amountOwed: 100,
      pastInteractions: [],
    };
    const result = chooser.determineNext(debtor);
    expect(result).toBe("LETTER");
  });

  test("mixed interactions multiple channels", () => {
    const debtor: Debtor = {
      id: "9",
      name: "Mixed",
      amountOwed: 900,
      email: "mix@example.com",
      phone: "555-7777",
      pastInteractions: [
        {
          channel: "EMAIL",
          timestamp: daysAgo(2),
          intent: "POSITIVE_RESPONSE",
        },
        { channel: "PHONE_CALL", timestamp: daysAgo(5), intent: "NEUTRAL" },
        { channel: "SMS", timestamp: daysAgo(3), intent: "NO_RESPONSE" },
        {
          channel: "EMAIL",
          timestamp: daysAgo(10),
          intent: "NEGATIVE_RESPONSE",
        },
      ],
    };
    // EMAIL: 20 + (-5 from neg) =15, PHONE_CALL=5, SMS=-5, LETTER=0
    // EMAIL highest score
    const result = chooser.determineNext(debtor);
    expect(result).toBe("EMAIL");
  });
});
