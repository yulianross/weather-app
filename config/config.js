const argv = require('yargs')
.options({
    address: {
        alias: 'd',
        desc: 'city address to obtain the forescast',
        demand: true
    }
})
.argv;

module.exports = {
    argv
}