function applyStyle(style) {
  const head = document.head;
  const styleEl = head.querySelector("style");
  styleEl.appendChild(prepareStyle(style));
}

function prepareStyle(style = `
  * { 
    color: #F1E3F3;
    background-color: #211A1D;
  }`) {
  const css = style;

  return document.createTextNode(css);
}

export { applyStyle };