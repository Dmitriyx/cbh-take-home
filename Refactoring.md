# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
- I noticed test required '0' to come back when no input is give, so i fixed the return. I moved the environment named looking variables outside of the function scope because it can be used for testing. I removed `typeof candidate !== "string"` because candidate will always be a string, the environment variable `TRIVIAL_PARTITION_KEY` indicates that partition key should be a string (assuming). Adding some extra returns to terminate the job function earlier. I return early on line 40 because it will never pass truthy on line 44 due to hashing functions returning a fixed length and it will never be more than `MAX_PARTITION_KEY_LENGTH`. the sha3-512 hash returns length 128.