import React from "react";
import { CheatsheetComponent } from "./General";

const Cheatsheet = () => {
  return (
    <div className="container">
      <CheatsheetComponent>
        <h1>📝 Hello World!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius dolor quam, sit amet suscipit nisi egestas eget. Aliquam at purus a ante pellentesque eleifend. Sed eu tortor at lacus eleifend commodo. Donec id justo mattis, tincidunt lectus vitae, ultrices.</p>

        <h2>Modificar arrays</h2>
        <section className="three-section">
          <div className="cheatsheet-block">
            <h3 className="cheatsheet-header">Map</h3>
            <div className="content-block">
              <p>
                <b>Valor que regresa:</b> array
              </p>
              <p>
                Esta función combina dos arrays y lo regresa como un nuevo
                array.
              </p>
            </div>
          </div>
          <div className="cheatsheet-block">
            <h3 className="cheatsheet-header">Map</h3>
            <div className="content-block">
              <p>
                <b>Valor que regresa:</b> array
              </p>
              <p>
                Esta función combina dos arrays y lo regresa como un nuevo
                array.
              </p>
              <pre className="language-jsx" tabindex="0">
                <code className="language-jsx">
                  var hello = 'Hello, World'; console.log(hello);
                </code>
              </pre>
            </div>
          </div>
          <div className="cheatsheet-block">
            <h3 className="cheatsheet-header">Map</h3>
            <div className="content-block">
              <p>
                <b>Valor que regresa:</b> array
              </p>
              <p>
                Esta función combina dos arrays y lo regresa como un nuevo
                array.
              </p>
            </div>
          </div>
          <div className="cheatsheet-block">
            <h3 className="cheatsheet-header">Map</h3>
            <div className="content-block">
              <p>
                <b>Valor que regresa:</b> array
              </p>
              <p>
                Esta función combina dos arrays y lo regresa como un nuevo
                array.
              </p>
            </div>
          </div>
        </section>
      </CheatsheetComponent>
    </div>
  );
};

export default Cheatsheet;
