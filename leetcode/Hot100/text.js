function bar() {
  var a = 3;
  function foo() {
    console.log(a);
  }
  foo();
}

var a = 2;
bar();