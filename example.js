import React from "react";

// no default values on props, no worries
function Foo({ fooProp1, fooProp2 }) {
  return (<p>{fooProp1} and {fooProp2}</p>);
}

// not all props have default values, no worries
function Bar({ barProp1 = "foo", barProp2 }) {
  return (<p>{barProp1} and {barProp2}</p>);
}

// all props have default values, fails to validate
function Baz({ bazProp1 = "foo", bazProp2 = 123 }) {
  return (<p>{bazProp1} and {bazProp2}</p>);
}

// only prop present has default value, fails to validate
function FooBar({ foobarProp1 = "foo" }) {
  return (<p>{foobarProp1}</p>);
}
