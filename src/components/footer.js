function footer() {
  const head = document.head;
  const style = createStyle();
  head.appendChild(style);

  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");

  const div = document.createElement("div");
  div.textContent = "Copyright © The Odin Project 2021"

  footer.appendChild(div);

  return footer;
}

function createStyle() {
  const style = document.createElement("style");
  style.appendChild(styling());
  
  return style;
}

function styling() {
  const css = `

    #footer { 
      color: #F1E3F3;
      background-color: #211A1D;

      font-size: 14px;
      font-weight: 300;
      height: 5%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    `;

  return document.createTextNode(css);
}

export default footer;