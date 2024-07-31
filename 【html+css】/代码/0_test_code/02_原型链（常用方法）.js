//组合继承的方式
function Parent (name) {
  this.name = name;
}

Parent.prototype.sayHello = function () {
  console.log('Hello ' + this.name)
}

function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 创建一个对象，这个对象的原型是Parent.prototype
Child.prototype = Object.create(Parent.prototype);  //创建对象
Child.prototype.constructor = Child;
const child1 = new Child('Alice', 20);
//这里的Child 就继承了上面父类的方法
child1.sayHello();

// ------------
// 使用 class继承的方式
class Parent {
  constructor (name) {
    this.name = name;
  }

  sayHello () {
    console.log('xiixixixixi      ---> ' + this.name);
  }
}

class Child extends Parent {
  constructor (name, age) {
    super(name);
    this.age = age;
  }
}

const child2 = new Child('xqqq', 30);
child2.sayHello();


const child3 = new Child('hahah', 30)



