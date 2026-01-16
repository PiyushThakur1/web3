const crypto = require('crypto');

function findHashwithPrefix(prefix) {
    let inputstr = "100xdevs"
    let input = 0;
    while (true) {
        let inputStr= inputstr + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input: inputStr, hash: hash};
        }
        input++;
    }
}

const result = findHashwithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

