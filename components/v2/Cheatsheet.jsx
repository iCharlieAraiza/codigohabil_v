import React, {useEffect} from "react";
import { CheatsheetComponent } from "./General";
const prism = require("prismjs")
require('prismjs/components/prism-java');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');

const Cheatsheet = ({post}) => {
    useEffect(() => {
        prism.highlightAll();
        let num = 1;
        const count = document.querySelectorAll('.question-title__number');
        count.forEach(el => el.textContent = num++)

    }, []);
  return (
    <div className="container">
      <CheatsheetComponent>
        <h1>📝 {post?.title}</h1>

        <article dangerouslySetInnerHTML={{__html: post?.content}}>
        </article>

      </CheatsheetComponent>
    </div>
  );
};

export default Cheatsheet;
