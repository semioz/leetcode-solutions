var hammingWeight = function(n) {
    return (Array.from(n.toString(2), Number)).filter(i => i === 1).length;
};