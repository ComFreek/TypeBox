// This file should demonstrate
// the syntax highlighting extension for TypeScript.

interface SimpleInterface {
  a: number;
};

class TestClass {
  helloStr: string;

  constructor (public worldStr: string) {
  }

  sayHelloWorld(): string {
    return this.helloStr + this.worldStr;
  }

  static isMagic(str: string): bool;
  static isMagic(nr: number): bool;
  static isMagic(strOrNr: any): bool {
    if (typeof strOrNr == "string") {
      return (strOrNr == "Hello World!");
    }
    return (strOrNr == 42);
  }
}

class TestChildClass extends TestClass {
  constructor (public worldStr: string) {
    super("Night");
  }
}

class TestClass2 {
}

(function () {

  var anyType: any;
  var nrType: number;
  var boolType: bool;
  var strType: string;
  var infType: SimpleInterface;
  

  var anyTypeObject: { a; b; };

  function anyRetFunc(): any {
  }

  function anyParamFunc(x: any) {
  }

})();

(function () {
  function addClosure(y: number): (x: number) => number {
    return function (x) {
      return x + y;
    }
  }
  addClosure(4)(5); // Should return 9 by the way

})();