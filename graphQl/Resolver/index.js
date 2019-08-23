// import package, moduls, etc...
const haditsResolver = require('./hadits');

// merge all resolver
const rootResolver = {
    ...haditsResolver,
}

// export resolver
module.exports = rootResolver;