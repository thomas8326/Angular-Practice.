export class A {
  isA: boolean;

  printA() {
    console.log('This ' + this.isA);
  }
}

export class B {
  isB: boolean;

  printB() {
    console.log('This ' + this.isB);
  }
}

export class CccccLemon implements A, B {
  isA = true;
  isB = false;

  printA:() => void;
  printB:() => void;

  printC() {
    console.log('This is C');
  }
}

applyMixins(CccccLemon, [A, B]);

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        })
    });
}