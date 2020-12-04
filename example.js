import React from "react";

function Foo({ fooProp1, fooProp2 }) {
  return (
    <p>
      {fooProp1} and {fooProp2}
    </p>
  );
}

function Bar({ barProp1 = "foo", barProp2 }) {
  return (
    <p>
      {barProp1} and {barProp2}
    </p>
  );
}

function Baz({ bazProp1 = "foo", bazProp2 = "bar" }) {
  return (
    <p>
      {bazProp1} and {bazProp2}
    </p>
  );
}
