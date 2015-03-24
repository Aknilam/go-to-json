function goToJson(value) {
  var form = document.createElement("form");
  form.setAttribute("style", "display: none;");
  form.setAttribute("method", "POST");
  form.setAttribute("action", "http://json.ma-linka.pl");

  var hiddenField = document.createElement("input");              
  hiddenField.setAttribute("name", "data");
  hiddenField.setAttribute("value", value);
  form.appendChild(hiddenField);
  document.body.appendChild(form);

  form.submit();
};
