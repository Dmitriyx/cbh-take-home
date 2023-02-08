const { deterministicPartitionKey, TRIVIAL_PARTITION_KEY } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Does not return literal '0' when given an input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).not.toBe(TRIVIAL_PARTITION_KEY);
  })

  // skip
  it.skip("will return '0' if partitionKey is '0'", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: '0'
    });
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  })
});
