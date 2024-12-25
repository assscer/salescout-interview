// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library

import { createClient } from 'redis';

async function manageRedis(): Promise<void> {
    const client = createClient();

    try {
        await client.connect();

        const data = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
        };

        for (const [key, value] of Object.entries(data)) {
            await client.set(key, value);
        }

        const keyToRead = 'key1';
        const value = await client.get(keyToRead);

        console.log(`Value for "${keyToRead}": ${value}`);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.disconnect();
    }
}

module.exports = { manageRedis };
