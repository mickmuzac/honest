"use strict";

function Honest(opts) {
    opts = typeof opts === "string" ? { str: opts } : ( opts || { } );
    return new Helper(opts);
}

class Helper {

    constructor(opts) {
      this.str = opts.str || '';
      this.isValid = true;
    }

    length(min = 0, max = 0) {
      this.isValid &= !!str && str.length >= min && str.length <= max;
      return this;
    }

    alphaNumeric() {
      this.isValid &= Honest.alphaNumeric.test(str);
      return this;
    }

    reset(newStr) {
      this.str = newStr || '';
      this.isValid = true;
      return this;
    }

    email() {
      this.isValid &= Honest.email.test(this.str);
      return this;
    }
}

Honest.email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
Honest.alphaNumeric = /^[a-zA-Z0-9]+$/;

modules.exports = Honest;
