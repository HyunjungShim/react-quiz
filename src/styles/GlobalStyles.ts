import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  font-size: 10px;
  font-family: 'Gamja Flower', sans-serif;
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}
main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}


a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

a {
  text-decoration: none;
}

/* 아직 방문하지 않은 링크의 글자색 정의 */
a:link {
  color: inherit;
}

/* 사용자가 방문한 적이 있는(클릭한 이후) 링크의 글자색 
정의 */
a:visited {
  color: inherit;
}

/* 마우스를 링크에 올려두었을 때, 글자색을 정의 */
a:hover {
  color: inherit;
}

/* 마우스로 링크를 클릭하고 뗄 때까지의 글자색을 정의 */
a:active {
  color: inherit;
}

/* settings */

h1 {
  font-size: 65px;
}
h2 {
  font-size: 35px;
}
h3 {
  font-size: 30px;
}
h4 {
  font-size: 25px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 15px;
}
button , p, input {
  font-size: 32px;
}
p {
  word-break: keep-all;
}
span {
  font-size: 25px;
}

@media screen and (max-width: 1024px) {
  h1 {
    font-size: 45px;
  }
  button, p, input {
    font-size: 28px;
  }
}
@media screen and (max-width: 576px) {
  h1 {
    font-size: 35px;
  }
  h2 {
    font-weight: normal;
    font-size: 25px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 15px;
  }
  button, p, input {
    font-size: 24px;
  }
}



`;

export default GlobalStyles;
