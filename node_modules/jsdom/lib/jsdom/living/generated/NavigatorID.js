"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const impl = utils.implSymbol;

function NavigatorID() {
  throw new TypeError("Illegal constructor");
}


NavigatorID.prototype.toString = function () {
  if (this === NavigatorID.prototype) {
    return "[object NavigatorIDPrototype]";
  }
  return this[impl].toString();
};
Object.defineProperty(NavigatorID.prototype, "appCodeName", {
  get() {
    return utils.tryWrapperForImpl(this[impl].appCodeName);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "appName", {
  get() {
    return utils.tryWrapperForImpl(this[impl].appName);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "appVersion", {
  get() {
    return utils.tryWrapperForImpl(this[impl].appVersion);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "platform", {
  get() {
    return utils.tryWrapperForImpl(this[impl].platform);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "product", {
  get() {
    return utils.tryWrapperForImpl(this[impl].product);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "productSub", {
  get() {
    return utils.tryWrapperForImpl(this[impl].productSub);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "userAgent", {
  get() {
    return utils.tryWrapperForImpl(this[impl].userAgent);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "vendor", {
  get() {
    return utils.tryWrapperForImpl(this[impl].vendor);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(NavigatorID.prototype, "vendorSub", {
  get() {
    return utils.tryWrapperForImpl(this[impl].vendorSub);
  },
  enumerable: true,
  configurable: true
});


module.exports = {
  mixedInto: [],
  is(obj) {
    if (obj) {
      if (obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (obj instanceof module.exports.mixedInto[i]) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (wrapper instanceof module.exports.mixedInto[i]) {
          return true;
        }
      }
    }
    return false;
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(NavigatorID.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(NavigatorID.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};
    privateData.wrapper = obj;

    this._internalSetup(obj);

    obj[impl] = new Impl.implementation(constructorArgs, privateData);
    obj[impl][utils.wrapperSymbol] = obj;
  },
  interface: NavigatorID,
  expose: {
    
  }
};


const Impl = require("../navigator/NavigatorID-impl.js");
