var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function showMoreBeautifulWay(target) {
    var newConstructor = function (name, age) {
        this.name = name;
        this.age = age;
        this.print = function () {
            console.log(name + " is " + age + " years old");
        };
    };
    return newConstructor;
}
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log(this.name, this.age);
    };
    User = __decorate([
        showMoreBeautifulWay
    ], User);
    return User;
}());
var illia = new User('Illia', 20);
var olena = new User('Olena', 36);
illia.print();
olena.print();
