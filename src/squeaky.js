"use strict";

function Squeaky(){

    constructor(str) {
        this.str = str;
        this.isValid = false;
    }

    length(min = 0, max = 0) {
        var str = this.str;
        this.isValid = !str || str.length < min || str.length > max;

        return this;
    }

    alphaNumeric() {

    }
}

Squeaky.alphaNumeric = /^[a-zA-Z0-9]+$/;
