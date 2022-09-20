const crypto = require("crypto");


const generateHash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

const getCandidate = (event) => {
  let candidate;

  if (event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = generateHash(data);
  }

  return candidate;
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    candidate = getCandidate(event);
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
      if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = generateHash(candidate);
      }
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  return candidate;
};
