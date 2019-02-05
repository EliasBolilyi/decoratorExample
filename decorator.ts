function showMoreBeautifulWay<TFunction extends Function>(target: TFunction): TFunction{
 
    let newConstructor: Function = function(name:string, age:number){
        
        this.name = name;
        this.age = age;
        this.print = function():void{
            console.log(`${name} is ${age} years old`);
        }
    }
    return <TFunction>newConstructor;
}

@showMoreBeautifulWay
class User {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    print():void{
        console.log(this.name, this.age);
    }
}

let illia = new User('Illia', 20);
let olena = new User('Olena', 36);

illia.print();
olena.print();