import { UTMInsight } from "./src/utminsight";

describe("UTMInsight", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset UTMInsight instance
    (UTMInsight as any).instance = null;
  });

  test("getInstance returns a singleton instance", () => {
    const instance1 = UTMInsight.getInstance();
    const instance2 = UTMInsight.getInstance();
    expect(instance1).toBe(instance2);
  });

  // Add more tests for other methods...
});
