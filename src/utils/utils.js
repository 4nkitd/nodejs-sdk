import crypto from 'crypto';

const createHash = (body, secret) => {
    const keys = Object.keys(body).sort();
    let values = [];
    
    keys.forEach(key => {
        if(typeof(body[key]) != 'object'){
            values.push(body[key])
        }
    })

    let sortedValues = values.join('|');
    sortedValues = sortedValues.concat(`|${secret}`);
    return crypto.createHash('sha512').update(sortedValues).digest('hex');
}

const verifyHash = (body, secret, hash) => {
    const generatedHash = createHash(body, secret);
    return generatedHash === hash;
}

export {
    createHash,
    verifyHash
}