// 1.2 Enum
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
// 1.1 Базові типи
function getAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.BusinessAnalyst },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    console.log("Task 1.1.3: Number of workers: ".concat(workers.length));
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available) {
            console.log("Task 1.1.3: First available worker: ".concat(worker.name, " ").concat(worker.surname));
            break;
        }
    }
}
// Виклик функції logFirstAvailable()
logFirstAvailable();
// 1.2 Enum Category
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.Designer; }
    var workers = getAllWorkers();
    return workers
        .filter(function (worker) { return worker.category === category; })
        .map(function (worker) { return worker.surname; });
}
function logWorkersNames(names) {
    console.log("Task 1.2.4: Workers in category:");
    names.forEach(function (name) { return console.log(name); });
}
// Виклик getWorkersNamesByCategory і logWorkersNames
var designerWorkers = getWorkersNamesByCategory();
logWorkersNames(designerWorkers);
// 1.3 Стрілочні функції
var developers = getAllWorkers().filter(function (worker) { return worker.category === Category.Developer; });
console.log('Task 1.3.2: Developers:');
developers.forEach(function (worker) { return console.log("".concat(worker.name, " ").concat(worker.surname)); });
function getWorkerByID(id) {
    return getAllWorkers().find(function (worker) { return worker.id === id; });
}
// 1.4 Типи функцій
function createCustomerID(name, id) {
    return "".concat(name).concat(id);
}
var myID = createCustomerID('Ann', 10);
console.log("Task 1.4.2: My ID: ".concat(myID));
var IdGenerator;
IdGenerator = function (name, id) { return "".concat(name).concat(id); };
IdGenerator = createCustomerID;
console.log("Task 1.4.4: Generated ID: ".concat(IdGenerator('Ann', 10)));
// 1.5 Необхідні, додаткові та залишкові параметри
function createCustomer(name, age, city) {
    console.log("Task 1.5.1: Customer Name: ".concat(name));
    if (age !== undefined) {
        console.log("Age: ".concat(age));
    }
    if (city !== undefined) {
        console.log("City: ".concat(city));
    }
}
// Виклики функції createCustomer
createCustomer('Ivan');
createCustomer('Ivan', 30);
createCustomer('Ivan', 30, 'Kyiv');
// Функція checkoutWorkers
function сheckoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    console.log("Task 1.5.4: Customer: ".concat(customer));
    var availableWorkers = workerIDs
        .map(function (id) { return getWorkerByID(id); })
        .filter(function (worker) { return worker && worker.available; })
        .map(function (worker) { return "".concat(worker.name, " ").concat(worker.surname); });
    return availableWorkers;
}
// Виклик функції checkoutWorkers та виведення результатів
var myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
console.log('Task 1.5.5: Available Workers:');
myWorkers.forEach(function (worker) { return console.log(worker); });
