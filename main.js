console.log("Test")

// Utility Functions
const renderToDom = (divId, htmlToRender) => {
  const selectedId = document.querySelector(divId);
  selectedId.innerHTML = htmlToRender;
};
