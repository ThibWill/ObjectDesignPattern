const hello = function() {}

hello.prototype.foo = "foooo";
hello.prototype.bar = "barrrr";

const cc = new hello();
cc.props1 = "propssss";

console.log(hello.prototype);
console.log(1, cc.prototype);
console.log(2, cc.foo);
console.log(3, cc.props1);
console.log(4, cc);



/////////////////////////////////////


var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
}

TeslaModelS.prototype.go = function() {
    // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
    // Apply brake pads
}

/////////////////////////////////////


var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
}

TeslaModelS.prototype = function() {

    var go = function() {
    // Rotate wheels
    };

    var stop = function() {
    // Apply brake pads
    };

    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    }

}();


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#in_conclusion
// https://www.digitalocean.com/community/conceptual_articles/prototype-design-pattern-in-javascript