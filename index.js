function distanceFromHqInBlocks(block) {
    const base = 42
    if (block > 42) {
        return block - base;
    }
    if (block < 42) {
        return base - block;
    }
}
function distanceFromHqInFeet(block) {
    const base = 42
    if (block > 42) {
        return (block - base) * 264;
    }
    if (block < 42) {
        return (base - block) * 264;
    }
}
function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock >= endBlock) {
        return (startBlock - endBlock) * 264;
    }
    if (startBlock <= endBlock) {
        return (endBlock - startBlock) * 264;
    }
}
function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400) {
        return 0;
    }
    if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * 0.02);
    }
    if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    if (distance > 2500) {
        return "cannot travel that far"
    }
}