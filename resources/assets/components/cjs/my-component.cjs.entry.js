'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-5c541eec.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class MyComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return __chunk_1.h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return ""; }
}

exports.my_component = MyComponent;
