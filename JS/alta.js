console.log("JS cargado correctamente"); //debug para saber si el js cargo correctamente


const form = document.getElementById("productForm"); //Busca en el HTML el <form id="productForm"> y lo guarda en la variable form
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) { //Cuando el form se envíe, ejecutá la función handleSubmit.
  event.preventDefault(); //Evita que el formulario se recargue.

  let isValid = true; //para saber si todo está bien
  const values = {}; //objeto donde se guardan los datos del producto
  const inputs = document.getElementsByClassName("field-element"); //Busca TODOS los elementos que tengan la clase field-element (inputs, select, textarea, file, etc). Devuelve una colección (lista).

  for (let i = 0; i < inputs.length; i++) { //Recorre uno por uno todos los campos del formulario.
    const field = inputs[i]; //Guarda el input actual del loop.
    const helper = document.getElementById(`${field.name}-error`);//Busca el span de error correspondiente, por ejemplo:
    //Si el input es:
    //<input name="price">
    //Busca:
    //<span id="price-error">

    // Validación especial para file
    if (field.type === "file" && field.files.length === 0) {//Si es input tipo file y no se seleccionó ningún archivo…
      isValid = false;
      field.className = field.className.concat(" has-error");//Si es input tipo file y no se seleccionó ningún archivo…
      if (helper) helper.className = helper.className.concat(" has-error");//Marca el campo como error y muestra el mensaje.

    // Validación general
    } else if (field.value.length === "") { //Si está vacío o tiene solo espacios…
      isValid = false;
      field.className = field.className.concat(" has-error");
      if (helper) helper.className = helper.className.concat(" has-error");//Marca error igual que arriba.

    } else { //Si esta bien:
      values[field.name] = field.value; //Guarda el valor dentro del objeto
    }
  }

  if (isValid) { //Si ningún campo falló…
    alert("Producto guardado correctamente ✅"); //Muestra alerta
    console.log("Producto:", values); //Imprime el objeto
    document.getElementById("productForm").reset(); //Limpia el formulario
  }
}


// quitar error al escribir
const inputs = document.getElementsByClassName("field-element");//Busca TODOS los elementos del HTML que tengan la clase field-element.
for (let i = 0; i < inputs.length; i++) {//Loop que recorre uno por uno todos los inputs:
  const field = inputs[i]; //Guarda el input actual del loop en la variable field
  field.addEventListener("input", function () { //Le agrega un evento a cada input: Cuando el usuario escriba algo en este campo: El evento "input" se dispara cada vez que: "Escribis, Borras, Pegas texto o cambias algun valor"
    field.className = field.className.replace(" has-error", "");//Le quita la clase has-error al input.
    const helper = document.getElementById(`${field.name}-error`);//Busca el span del error relacionado con ese input.
    if (helper) {//Verifica que ese span exista (por si algún input no tiene error asociado), Evita errores en consola.
      helper.className = helper.className.replace(" has-error", "");//Le saca la clase has-error al mensaje de error.
    }
  });
}

