/**
 * SINGLETON PATTERN
 *
 * Prevents the instantiation of a class more than once
 * Provides single access to an object
 *
 * use case:
 * Logger
 * Report
 * Thread pool
 * Cache
 */
;(() => {
    class SingletonLogger {
        private static instance = new SingletonLogger()

        static getInstace() {
            return this.instance
        }

        message() {
            console.log('SingletonLogger is created')
        }
    }

    class LazySingletonLogger {
        private static instance
        static getInstace() {
            if (!this.instance) {
                this.instance = new LazySingletonLogger()
            }
            return this.instance
        }
        message() {
            console.log('LazySingletonLogger is created')
        }
    }

    // client code
    function clientCode() {
        const singletonLogger = new SingletonLogger()
        singletonLogger.message()

        const lazySingletonLogger = new LazySingletonLogger()
        lazySingletonLogger.message()
    }

    console.log('>>> SINGLETON PATTERN')
    clientCode()
    console.log('SINGLETON PATTERN <<<')
    console.log('\n')
})()
