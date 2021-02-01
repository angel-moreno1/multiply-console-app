const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { createFile, listTable } = require('./multiplicar/multiply');

let comando = argv._[0];
switch (comando) {
    case 'list':
        listTable(argv.base, argv.limit);
        break
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`${colors.yellow('file created:')} ${colors.green(file)}`))
            .catch(e => console.log(e));
        break
    default:
        console.log('unrecognized command');
}
