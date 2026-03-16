console.log("JS cargado correctamente");


const form = document.getElementById("productForm"); 
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) { 
  event.preventDefault(); 

  let isValid = true; 
  const values = {}; 
  const inputs = document.getElementsByClassName("field-element"); 

  for (let i = 0; i < inputs.length; i++) { 
    const field = inputs[i];
    const helper = document.getElementById(`${field.name}-error`);

    if (field.type === "file" && field.files.length === 0) {
      isValid = false;
      field.className = field.className.concat(" has-error");
      if (helper) helper.className = helper.className.concat(" has-error");

    } else if (field.value.length === "") { 
      isValid = false;
      field.className = field.className.concat(" has-error");
      if (helper) helper.className = helper.className.concat(" has-error");

    } else { 
      values[field.name] = field.value; 
    }
  }

  if (isValid) { 
    alert("Producto guardado correctamente"); 
    console.log("Producto:", values);
    document.getElementById("productForm").reset();
  }
}



const inputs = document.getElementsByClassName("field-element");
for (let i = 0; i < inputs.length; i++) {
  const field = inputs[i]; 
  field.addEventListener("input", function () { 
    field.className = field.className.replace(" has-error", "");
    const helper = document.getElementById(`${field.name}-error`);
    if (helper) {
      helper.className = helper.className.replace(" has-error", "");
    }
  });
}

