class CoffeFactory {
  static createCoffe(type) {
    const factory = factoryList[type];
    return factory.createCoffe();
  }
}

class Latte {
  constructor() {
    this.name = "latte";
  }
}

class Espresso {
  constructor() {
    this.name = "Expresso";
  }
}

class LatteFactory extends CoffeFactory {
  static createCoffe() {
    return new Latte();
  }
}

class EspressoFactory extends CoffeFactory {
  static createCoffe() {
    return new Espresso();
  }
}

const factoryList = { LatteFactory, EspressoFactory };

const main = () => {
  const coffe = CoffeFactory.create("LatteFactory");
  console.log(coffe.name);
};
