module.exports = function inc(n) {
    if (typeof n !== 'number') {
        throw new Error('invalid argument');
    }
    return n + 1;
}

