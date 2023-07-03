import { files } from './data.js';

const convertToBytes = (length, unit) => {
    const data = {
        'B': 1,
        'KB': 1024,
        'MB': 1048576,
        'GB': 1073741824,
    }

    return data[unit] * length
}

const getTotalSize = () => {
    let total = 0;
    files.forEach(({ size: { length, unit = 'B' } }) => total += convertToBytes(length, unit))

    return total
}

console.log(`${getTotalSize()} bajtów`)

