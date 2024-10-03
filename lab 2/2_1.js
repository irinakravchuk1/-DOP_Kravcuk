var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 2.1.2 Функція getAllEmployees()
function getAllEmployees() {
    return [
        { id: 1, name: 'John', surname: 'Smith', available: true, salary: 'Middle' },
        { id: 2, name: 'Anna', surname: 'Baker', available: false, salary: 'Senior' },
        { id: 3, name: 'David', surname: 'Taylor', available: true, salary: 'Junior' }
    ];
}
// 2.1.3 Функція getEmployeeByID()
function getEmployeeByID(id) {
    var employees = getAllEmployees();
    return employees.find(function (employee) { return employee.id === id; });
}
// 2.1.4 Функція PrintEmployee()
function PrintEmployee(employee) {
    console.log("".concat(employee.name, " ").concat(employee.surname, " got salary ").concat(employee.salary));
}
// Виклики функцій для перевірки
var employees = getAllEmployees();
var employee = getEmployeeByID(1);
if (employee) {
    PrintEmployee(employee);
}
// 2.2.3 Змінна logPrize і функція
var logPrize = function (message) {
    console.log(message);
};
logPrize('Prize has been marked!');
// 2.3.4 Змінна favoriteAuthor
var favoriteAuthor = {
    name: 'George Orwell',
    email: 'george.orwell@example.com',
    numBooksPublished: 6
};
// 2.3.5 Змінна favoriteLibrarian
var favoriteLibrarian = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    department: 'History',
    assistCustomer: function (custName) {
        console.log("".concat(custName, ", welcome to the library!"));
    }
};
// 2.4 Інтерфейси для типів класів
// 2.4.1 Клас UniversityLibrarian
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    return UniversityLibrarian;
}());
// 2.4.3 Використання UniversityLibrarian
var newLibrarian = new UniversityLibrarian();
newLibrarian.name = 'Emily Brown';
newLibrarian.assistCustomer('John');
// 2.5 Створення та використання класів
// 2.5.1 Клас ReferenceItem
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        // Геттер і сетер publisher
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    // Метод printItem()
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in year ").concat(this.year));
        console.log("Department: ".concat(ReferenceItem.department));
    };
    ReferenceItem.department = 'Library';
    return ReferenceItem;
}());
// 2.5.5 Ініціалізація publisher
var ref = new ReferenceItem('Book Title', 2022);
ref.publisher = 'Publisher Name';
console.log(ref.publisher);
// 2.6 Розширення класів
// 2.6.1 Клас Encyclopedia
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    // 2.6.3 Перевизначення printItem()
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: ".concat(this.edition, " (").concat(this.year, ")"));
    };
    return Encyclopedia;
}(ReferenceItem));
// 2.6.2 Виклик printItem()
var refBook = new Encyclopedia('Encyclopedia Title', 2023, 2);
refBook.printItem();
// 2.7 Створення абстрактних класів
// 2.7.1 Абстрактний клас ReferenceItem
var AbstractReferenceItem = /** @class */ (function () {
    function AbstractReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating an abstract ReferenceItem...');
    }
    AbstractReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in year ").concat(this.year));
    };
    return AbstractReferenceItem;
}());
// 2.7.3 Реалізація printCitation в Encyclopedia
var AbstractEncyclopedia = /** @class */ (function (_super) {
    __extends(AbstractEncyclopedia, _super);
    function AbstractEncyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    AbstractEncyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return AbstractEncyclopedia;
}(AbstractReferenceItem));
// Ініціалізація AbstractEncyclopedia
var abstractRefBook = new AbstractEncyclopedia('Abstract Encyclopedia Title', 2023, 2);
abstractRefBook.printCitation();
