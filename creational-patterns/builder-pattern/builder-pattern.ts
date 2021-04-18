/**
 * WHEN TO USE THE BUILDER PATTERN
 *
 * - When dealing a complex object that requires a lot of parammeters
 * - When trying to prevent mistakes from creating a complex objects
 * - When trying to avoid unreadable, big constructors that are sometimes required complex object creation
 */

;(() => {
    const NonePattern = () => {
        class OnlineStoreAccount {
            private id: string
            private name: string
            private address: string
            private budget: number
            private discountRate: number

            constructor(
                id: string,
                name: string,
                address: string,
                budget: number,
                discountRate: number
            ) {
                this.id = id
                this.name = name
                this.address = address
                this.budget = budget
                this.discountRate = discountRate
            }
        }

        const johnSmith = new OnlineStoreAccount('1L', 'Join Smith', 'Liberty lane 23', 100, 2)
        const janeTaylor = new OnlineStoreAccount('2L', 'Jane Taylor', 'Goethe Street 55', 2, 100)
        console.log('none pattern', { johnSmith, janeTaylor })
        // it required u must put full params. but some case u don't want to put discountRate. builder pattern will help u solving
        // this thing
    }

    const applyPattern = () => {
        class OnlineStoreAccount {
            private id: string
            private name: string
            private address: string
            private budget: number
            private discountRate: number

            static Builder = class {
                private id: string
                private name: string
                private address: string
                private budget: number
                private discountRate: number

                constructor(id: string) {
                    this.id = id
                }

                public withName(name: string) {
                    this.name = name
                    return this
                }

                public withAdress(address: string) {
                    this.address = address
                    return this
                }

                public withBudget(budget: number) {
                    this.budget = budget
                    return this
                }

                public withDiscountRate(discountRate: number) {
                    this.discountRate = discountRate
                    return this
                }

                public build() {
                    const onlineStoreAccount = new OnlineStoreAccount()
                    onlineStoreAccount.id = this.id
                    onlineStoreAccount.name = this.name
                    onlineStoreAccount.address = this.address
                    onlineStoreAccount.budget = this.budget
                    onlineStoreAccount.discountRate = this.discountRate

                    return onlineStoreAccount
                }
            }
        }

        // Client code
        function clientCode() {
            const joinSmith = new OnlineStoreAccount.Builder('1L')
                .withName('JoinSmith')
                .withAdress('Oxford lane 35A')
                .withBudget(100)
                .build()
            console.log('applyPattern', { joinSmith })
        }

        clientCode()
    }

    console.log('>>>> BUILDER PATTERN')
    NonePattern()
    applyPattern()
    console.log('BUILDER PATTERN <<<<')
})()
