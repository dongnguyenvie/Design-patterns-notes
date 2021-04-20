/**
 * WHEN TO USE THE BRIDGE PATTERN
 *
 * When having a complex structure of classes with similar implementations
 * When want to impose the same implementation for multiple objects
 * When providing a map between orthogonal class hierarchies
 * Split abstraction and implementation for easy to manage
 */
;(() => {
    // Abstraction
    interface Account {
        openAccount: () => void
    }
    abstract class Bank {
        protected account: Account

        constructor(account: Account) {
            this.account = account
        }
    }

    // Implementation
    class CheckingAccount implements Account {
        openAccount() {
            console.log('Checking account')
        }
    }

    class TPBank extends Bank {
        openAccount() {
            console.log('Open your account at TPBank is "name_AAABBB"')
            this.account.openAccount()
        }
    }

    class Vietcombank extends Bank {
        openAccount() {
            console.log('Open your account at Vietcombank is "name_CCAAABBB"')
            this.account.openAccount()
        }
    }

    const clientCode = () => {
        const vietcombank = new Vietcombank(new CheckingAccount())
        vietcombank.openAccount()

        const tpBank = new TPBank(new CheckingAccount())
        tpBank.openAccount()
    }

    console.log('>>> BRIDGE PATTERN')
    clientCode()
    console.log('BRIDGE PATTERN<<<')
    console.log('\n')
})()
