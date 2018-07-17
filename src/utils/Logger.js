import chalk from 'chalk'

export default class Logger {
  error (s) {
    console.log(Logger.chalk.red(s))
  }

  warn (s) {
    console.log(Logger.chalk.yellow(s))
  }

  info (s) {
    console.log(Logger.chalk.blue(s))
  }

  success (s) {
    console.log(Logger.chalk.green(s))
  }

  start (s) {
    console.log(Logger.chalk.bgBlue('Start') + '    ' + this.chalk.blue(s) + '\n')
  }

  end (s) {
    console.log(Logger.chalk.bgBlue('End') + '    ' + this.chalk.blue(s) + '\n')
  }

  static STATR (s) {
    console.log(Logger.chalk.bgBlue('Start') + '    ' + this.chalk.blue(s) + '\n')
  }

  static END (s) {
    console.log(Logger.chalk.bgBlue('End') + '    ' + this.chalk.blue(s)  + '\n')
  }
}

Logger.chalk = chalk
