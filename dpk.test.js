const { deterministicPartitionKey } = require("./dpk");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const sampleEvent = { name: "sample_event", data: "1324343434343" };


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Return the same key if the event already has a partition key", () => {
    const newEvent = { name: "new_event", partitionKey : deterministicPartitionKey(sampleEvent)};
    const partitionKey = deterministicPartitionKey(newEvent);
    expect(partitionKey).toBe(newEvent.partitionKey);
  })

  it("The partiton key length is  <= 256", () => {
    
    const partitionKey = deterministicPartitionKey(sampleEvent)
    expect(partitionKey).not.toBe(TRIVIAL_PARTITION_KEY)
    expect(partitionKey.length).toBeLessThan(MAX_PARTITION_KEY_LENGTH);
  });
});
