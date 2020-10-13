export default function getNumbersOfStonesToRemove(stones) {
    let remove = 0;

    for (let i = 0; i < stones.length - 1; i++) {
        if (stones[i] === stones[i + 1]) {
            remove++;
        }
    }

    return remove;
}