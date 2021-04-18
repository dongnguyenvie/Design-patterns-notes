/**
 * FEATURES OF THE FACTORY PATTERN
 *
 * >> Advantages
 * - Hides the internal logic of creating objects
 * - Enables the programmer to add new different object of the same type
 *
 * >> Disadvantages
 * - The complexity of this pattern tends to be high
 * - Cannot be refactored into
 */

;(() => {
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

    interface ComputerFactory {
        getComputer(): Computer
    }

    class RandomComputerFactory implements ComputerFactory {
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

    // Client code
    function clientCode() {
        const randomComputerFactory = new RandomComputerFactory()
        const computer1 = randomComputerFactory.getComputer()
        computer1.Compute()
        const randomComputerFactory2 = new RandomComputerFactory()
        const computer2 = randomComputerFactory2.getComputer()
        computer2.Compute()
    }

    console.log('>>> FACTORY PATTERN')
    clientCode()
    console.log('FACTORY PATTERN <<<')
})()
