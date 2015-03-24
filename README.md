# go-to-json

Redirects to external webpage to show JSON in formatted way.

This is one function library.
Function is responsible for redirecting from JavaScript-based page to http://json.ma-linka.pl/. It sends POST message with data typed in function's argument. Then it is displayed in destination page.

# usage

in your HTML file:
```HTML
<script type="text/javascript" src="goToJson.js"></script>
```

in JavaScript:
```JaaScript
var object = {data: 5};
goToJson(object);
```
