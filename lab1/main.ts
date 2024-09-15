// Створюємо тип для працівника
type Employee = {
    id: number,
    name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category
};

// 1.2 Enum
enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

// 1.1 Базові типи
function getAllWorkers(): Employee[] {
    let workers: Employee[] = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.BusinessAnalyst },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}

function logFirstAvailable(workers: Employee[] = getAllWorkers()): void {
    console.log(`Task 1.1.3: Number of workers: ${workers.length}`);
    
    for (let worker of workers) {
        if (worker.available) {
            console.log(`Task 1.1.3: First available worker: ${worker.name} ${worker.surname}`);
            break;
        }
    }
}

// Виклик функції logFirstAvailable()
logFirstAvailable();

// 1.2 Enum Category
function getWorkersNamesByCategory(category: Category = Category.Designer): string[] {
    const workers = getAllWorkers();
    return workers
        .filter(worker => worker.category === category)
        .map(worker => worker.surname);
}

function logWorkersNames(names: string[]): void {
    console.log(`Task 1.2.4: Workers in category:`);
    names.forEach(name => console.log(name));
}

// Виклик getWorkersNamesByCategory і logWorkersNames
let designerWorkers = getWorkersNamesByCategory();
logWorkersNames(designerWorkers);

// 1.3 Стрілочні функції
const developers = getAllWorkers().filter(worker => worker.category === Category.Developer);
console.log('Task 1.3.2: Developers:');
developers.forEach(worker => console.log(`${worker.name} ${worker.surname}`));

function getWorkerByID(id: number): Employee | undefined {
    return getAllWorkers().find(worker => worker.id === id);
}

// 1.4 Типи функцій
function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

let myID: string = createCustomerID('Ann', 10);
console.log(`Task 1.4.2: My ID: ${myID}`);

let IdGenerator: (name: string, id: number) => string;
IdGenerator = (name, id) => `${name}${id}`;
IdGenerator = createCustomerID;
console.log(`Task 1.4.4: Generated ID: ${IdGenerator('Ann', 10)}`);

// 1.5 Необхідні, додаткові та залишкові параметри
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Task 1.5.1: Customer Name: ${name}`);
    if (age !== undefined) {
        console.log(`Age: ${age}`);
    }
    if (city !== undefined) {
        console.log(`City: ${city}`);
    }
}

// Виклики функції createCustomer
createCustomer('Ivan');
createCustomer('Ivan', 30);
createCustomer('Ivan', 30, 'Kyiv');

// Функція checkoutWorkers
function сheckoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(`Task 1.5.4: Customer: ${customer}`);
    
    const availableWorkers = workerIDs
        .map(id => getWorkerByID(id))
        .filter(worker => worker && worker.available)
        .map(worker => `${worker!.name} ${worker!.surname}`);
    
    return availableWorkers;
}

// Виклик функції checkoutWorkers та виведення результатів
let myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
console.log('Task 1.5.5: Available Workers:');
myWorkers.forEach(worker => console.log(worker));
