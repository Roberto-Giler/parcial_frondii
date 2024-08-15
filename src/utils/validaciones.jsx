export const validarName = (name) => {
    const nameWithoutSpace = name.trim();
  
    if (nameWithoutSpace.length > 3) {
      return true;
    } else {
      return false;
    }
  }
  
export const validarColor = (color) => {
    console.log(color)
    
    const colorWithoutSpace = color.replace(" ", "");
    
    console.log(colorWithoutSpace)

    if (colorWithoutSpace.length > 6) {
        return true;
      } else {
        return false;
      }
  }
  
  