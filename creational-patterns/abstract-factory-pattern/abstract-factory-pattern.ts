/**
 * FEATURES OF THE FACTORY PATTERN
 *
 * >> Advantages
 * - Hides the internal logic of creating objects
 * - Enables the programmer to add new different object of the same type
 *
 */

const applyFactoryPattern = () => {
    interface Computer {
        Compute(): void
    }

    class Laptop implements Computer {
        Compute(): void {
            console.log('Laptop computes')
        }
    }

    class Phone implements Computer {
        Compute(): void {
            console.log('Phone computes')
        }
    }

    class SmartTV implements Computer {
        Compute(): void {
            console.log('SmartTV computes')
        }
    }

    /**
     * Implement factory pattern
     * Move logic creating new instance into factory
     *
     */

    interface AbstractFactory {
        getComputer(): Computer
    }

    class ComputerFactory implements AbstractFactory {
        getComputer(): Computer {
            const pickRandom = Math.floor(Math.random() * 3)
            switch (pickRandom) {
                case 0:
                    return new Laptop()
                case 1:
                    return new Phone()
                case 2:
                    return new SmartTV()
                default:
                    return null
            }
        }
    }

    class PortableComputer implements AbstractFactory {
        getComputer(): Computer {
            const pickRandom = Math.floor(Math.random() * 2)
            switch (pickRandom) {
                case 0:
                    return new Laptop()
                case 1:
                    return new Phone()
            }
        }
    }

    class FactoryProducer {
        public static getFactory(portable: boolean): AbstractFactory {
            if (portable) {
                return new PortableComputer()
            } else {
                return new ComputerFactory()
            }
        }
    }

    const computerFactory = FactoryProducer.getFactory(true)
    const computer1 = computerFactory.getComputer()
    computer1.Compute()
}
console.log('>>> ABSTRACT FACTORY PATTERN')
applyFactoryPattern()
console.log('ABSTRACT FACTORY PATTERN <<<')
