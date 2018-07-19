import chalk from 'chalk'

export default class Logger {
  /**
   * error
   * @param s
   */
  error (s) {
    console.log(Logger.chalk.red(s))
  }

  /**
   * warn
   * @param s
   */
  warn (s) {
    console.log(Logger.chalk.yellow(s))
  }

  /**
   * info
   * @param s
   */
  info (s) {
    console.log(Logger.chalk.blue(s))
  }

  /**
   * success
   * @param s
   */
  success (s) {
    console.log(Logger.chalk.green(s))
  }

  /**
   * start
   * @param s
   */
  start (s) {
    console.log(Logger.chalk.bgBlue('Start') + '    ' + this.chalk.blue(s) + '\n')
  }

  /**
   * end
   * @param s
   */
  end (s) {
    console.log(Logger.chalk.bgBlue('End') + '    ' + this.chalk.blue(s) + '\n')
  }

  /**
   * START
   * @param s
   * @constructor
   */
  static STATR (s) {
    console.log(Logger.chalk.bgBlue('Start') + '    ' + this.chalk.blue(s) + '\n')
  }

  /**
   * END
   * @param s
   * @constructor
   */
  static END (s) {
    console.log(Logger.chalk.bgBlue('End') + '    ' + this.chalk.blue(s)  + '\n')
  }
}

Logger.chalk = chalk
