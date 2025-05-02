// script.js
function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex.padStart(6, "0");
  }
  
  function generatePalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = "";
  
    const roles = [
      { label: "Dominant (60%)", flex: 6 },
      { label: "Secondary (30%)", flex: 3 },
      { label: "Accent (10%)", flex: 1 }
    ];
  
    roles.forEach(role => {
      const color = getRandomColor();
      const box = document.createElement("div");
      box.className = "color-box";
      box.style.backgroundColor = color;
      box.style.flex = role.flex;
  
      box.innerHTML = `
        ${color}
        <span>${role.label}</span>
      `;
  
      box.onclick = () => {
        navigator.clipboard.writeText(color);
        alert(`${color} copied to clipboard!`);
      };
  
      palette.appendChild(box);
    });
  }
  
  window.onload = generatePalette;
  