const
    yargs = require('yargs'),
   quiz = require('./app')

const flags = yargs.usage('$0: usage cli.js')
    .options('h', {
        alias: 'help',
        describe: 'displays help'
    })
    .options('d', {
        alias: 'difficulty',
        describe: 'sets the difficulty of the game  [choices: "easy", "hard"]'
    })

    .argv
 

if (flags.help)
    yargs.showHelp()
else
    quiz.run(flags)