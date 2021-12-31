function header() {
  const head = document.head;
  const style = createStyle()
  head.appendChild(style);
  
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  
  const div = document.createElement("div");
  div.setAttribute("id", "logo");
  div.textContent = "To Do!";
  
  header.appendChild(div);
  
  return header;
}

function createStyle() {
  const style = document.createElement("style");
  style.appendChild(headerStyling());
  
  return style;
}

function headerStyling() {
  const css = `

    #header { 
      color: #F1E3F3;
      background-color: #211A1D;

      font-size: 36px;
      font-weight: lighter;
      height: 10%;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      padding-left: 10%;
    }
    
    `;

  return document.createTextNode(css);
}

export default header;
