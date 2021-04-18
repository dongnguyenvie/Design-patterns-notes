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
const applyPattern = () => {
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
    const singletonLogger = new SingletonLogger()
    singletonLogger.message()

    const lazySingletonLogger = new LazySingletonLogger()
    lazySingletonLogger.message()
}

console.log('>>> FACTORY PATTERN')
applyPattern()
console.log('FACTORY PATTERN <<<')
