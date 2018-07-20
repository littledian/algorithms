import chalk from 'chalk'

const showLog = false

export default class Logger {
  /**
   * error
   * @param s
   */
  error (s) {
    showLog && console.log(Logger.chalk.red(s))
  }

  /**
   * warn
   * @param s
   */
  warn (s) {
    showLog && console.log(Logger.chalk.yellow(s))
  }

  /**
   * info
   * @param s
   */
  info (s) {
    showLog && console.log(Logger.chalk.blue(s))
  }

  /**
   * success
   * @param s
   */
  success (s) {
    showLog && console.log(Logger.chalk.green(s))
  }

  /**
   * start
   * @param s
   */
  start (s) {
    showLog && console.log(Logger.chalk.bgBlue('Start') + '    ' + Logger.chalk.blue(s) + '\n')
  }

  /**
   * end
   * @param s
   */
  end (s) {
    showLog && console.log(Logger.chalk.bgBlue('End') + '    ' + Logger.chalk.blue(s) + '\n')
  }

  /**
   * START
   * @param s
   * @constructor
   */
  static STATR (s) {
    showLog && console.log(Logger.chalk.bgBlue('Start') + '    ' + Logger.chalk.blue(s) + '\n')
  }

  /**
   * END
   * @param s
   * @constructor
   */
  static END (s) {
    showLog && console.log(Logger.chalk.bgBlue('End') + '    ' + Logger.chalk.blue(s) + '\n')
  }
}

Logger.chalk = chalk
