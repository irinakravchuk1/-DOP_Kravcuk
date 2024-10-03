// 2.1 Визначення інтерфейсу Employee (замість Worker)
interface Employee {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: 'Junior' | 'Middle' | 'Senior';
}

// 2.1.2
function getAllEmployees(): Employee[] {
    return [
        { id: 1, name: 'John', surname: 'Smith', available: true, salary: 'Middle' },
        { id: 2, name: 'Anna', surname: 'Baker', available: false, salary: 'Senior' },
        { id: 3, name: 'David', surname: 'Taylor', available: true, salary: 'Junior' }
    ];
}

// 2.1.3
function getEmployeeByID(id: number): Employee | undefined {
    const employees = getAllEmployees();
    return employees.find(employee => employee.id === id);
}

// 2.1.4
function PrintEmployee(employee: Employee): void {
    console.log(`${employee.name} ${employee.surname} got salary ${employee.salary}`);
}

// Виклики функцій для перевірки
const employees = getAllEmployees();
const employee = getEmployeeByID(1);
if (employee) {
    PrintEmployee(employee);
}


// 2.2 Визначення інтерфейсів для типів функцій
// 2.2.1
interface PrizeLogger {
    (message: string): void;
}

// 2.2.2
interface Worker {
    markPrize?: PrizeLogger;
}

// 2.2.3
let logPrize: PrizeLogger = (message: string) => {
    console.log(message);
};

logPrize('Prize has been marked!');

// 2.3 Розширення інтерфейсів
// 2.3.1
interface Person {
    name: string;
    email: string;
}

// 2.3.2
interface Author extends Person {
    numBooksPublished: number;
}

// 2.3.3
interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

// 2.3.4
let favoriteAuthor: Author = {
    name: 'George Orwell',
    email: 'george.orwell@example.com',
    numBooksPublished: 6
};

// 2.3.5
let favoriteLibrarian: Librarian = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    department: 'History',
    assistCustomer: (custName: string) => {
        console.log(`${custName}, welcome to the library!`);
    }
};

// 2.4 Інтерфейси для типів класів
// 2.4.1
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

// 2.4.3
let newLibrarian = new UniversityLibrarian();
newLibrarian.name = 'Emily Brown';
newLibrarian.assistCustomer('John');

// 2.5 Створення та використання класів
// 2.5.1
class ReferenceItem {
    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Library';

    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
}

// 2.5.5
let ref = new ReferenceItem('Book Title', 2022);
ref.publisher = 'Publisher Name';
console.log(ref.publisher);

// 2.6 Розширення класів
// 2.6.1
class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    // 2.6.3 Перевизначення printItem()
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}

// 2.6.2
let refBook = new Encyclopedia('Encyclopedia Title', 2023, 2);
refBook.printItem();

// 2.7 Створення абстрактних класів
// 2.7.1
abstract class AbstractReferenceItem {
    constructor(public title: string, protected year: number) {
        console.log('Creating an abstract ReferenceItem...');
    }

    abstract printCitation(): void;

    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
    }
}

// 2.7.3
class AbstractEncyclopedia extends AbstractReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

// Ініціалізація AbstractEncyclopedia
let abstractRefBook = new AbstractEncyclopedia('Abstract Encyclopedia Title', 2023, 2);
abstractRefBook.printCitation();
