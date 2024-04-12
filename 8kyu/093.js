function hello(name) { 
    if (name && name.length > 0) { 
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return `Hello, ${capitalizedName}!`;
      } else {
        return "Hello, World!";
      }
    
  }

  console.log(hello('johN'));
  console.log(hello(''));