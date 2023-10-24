import { helloWorld } from "./helloWorld";
import { setup, teardown } from "./testUtils";

describe("helloWorld", () => {
  beforeEach(setup);
  afterEach(teardown);

  it("prints hello world", () => {
    helloWorld();

    expect(console.log).toHaveBeenCalledWith("Hello, World!");
  });
});
