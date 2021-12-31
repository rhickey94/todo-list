function applyStyle(style) {
  const head = document.head;
  const styleEl = createStyle(style);
  head.appendChild(styleEl)
}

function createStyle(styleStr) {
  const style = document.createElement("style");
  style.appendChild(prepareStyle(styleStr));
  
  return style;
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