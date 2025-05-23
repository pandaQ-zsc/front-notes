// User接口
interface User {
	getTime(): Date
	log(): void
}

// 自定义类型Class
type Constructor = new (...args: any[]) => {}

// 创建一个装饰器，为类添加日志功能和创建时间
function LogTime<T extends Constructor>(target: T) {
  //类也要继承
	return class extends target {
	createdTime: Date;
   // 将继承的属性全部获得
	constructor(...args: any[]) {
	  super(...args);
	  this.createdTime = new Date(); // 记录对象创建时间
	}
	getTime() {
	  return `该对象创建时间为：${this.createdTime}`;
	}
	};
}

@LogTime
class User {
	constructor(
	public name: string,
	public age: number
	) { }
	speak() {
	console.log(`${this.name}说：你好啊！`)
	}
}



// 实例化对象
// 这里的User是经过装饰器处理过的类
const user1 = new User('张三', 13);
user1.speak()
console.log(user1.getTime())