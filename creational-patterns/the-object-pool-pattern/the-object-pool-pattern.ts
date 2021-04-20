/**
 * FEATURES OF THE OBJECT POOL PATTERN
 *
 * > Advantages
 * Object are cached
 * Enforces objects reusability
 *
 * > Disadvantages
 * The complexity of this pattern tends to be high
 * Tends to reply on other pattern
 * Low popular
 */

;(() => {
    class Employee {
        private status = ''
        constructor(private id: string, private name: string) {}

        async init() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.status = 'active'
                    console.log('init employee successfully')
                    resolve(true)
                }, 1500)
            })
        }

        getInfo() {
            return `ID: ${this.id}, Name: ${this.name}`
        }

        getId() {
            return this.id
        }

        getNames() {
            return this.name
        }
    }

    class EmployeePool {
        private occupiedEmployees: Record<string | number, Employee> = {}
        private freeEmployees: Record<string | number, Employee> = {}
        private names = ['William', 'Chris', 'Elsa', 'Jane', 'Bob']

        constructor() {}

        async getEmployee() {
            let employee: Employee
            if (Object.keys(this.freeEmployees).length === 0) {
                const id = uuidv4()
                const randomName = this.names[Math.floor(Math.random() * this.names.length)]
                employee = new Employee(id, randomName)
                await employee.init()
            } else {
                const [employeeID] = Object.keys(this.freeEmployees)
                employee = this.freeEmployees[employeeID]
                delete this.freeEmployees[employeeID]
            }
            this.occupiedEmployees[employee.getId()] = employee
            return employee
        }

        release(employee: Employee) {
            delete this.occupiedEmployees[employee.getId()]
            this.freeEmployees[employee.getId()] = employee
        }

        getFreeEmployees() {
            const employeeNames: string[] = []
            Object.keys(this.freeEmployees)
                .map((key) => this.freeEmployees[key])
                .forEach((emp) => {
                    employeeNames.push(emp.getNames())
                })
            return employeeNames
        }

        getOccupiedEmployees() {
            const employeeNames: string[] = []
            Object.keys(this.occupiedEmployees)
                .map((key) => this.occupiedEmployees[key])
                .forEach((emp) => {
                    employeeNames.push(emp.getNames())
                })
            return employeeNames
        }
    }
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
        })
    }

    async function clientCode() {
        const employeePool = new EmployeePool()
        const employee1 = await employeePool.getEmployee()
        const employee2 = await employeePool.getEmployee()
        console.log('List of occupied employees: ', employeePool.getOccupiedEmployees())
        console.log('List of free employees: ', employeePool.getFreeEmployees())
        employeePool.release(employee1)
        console.log('List of free employees: ', employeePool.getFreeEmployees())
        await employeePool.getEmployee()
    }

    clientCode().then(() => {
        console.log('THE OBJECT POOL PATTERN <<<')
        console.log('\n')
    })
})()
