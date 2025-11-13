@@ -0,0 +1 @@node_modules
Collapse file‎Public/index.html‎Copy file name to clipboard+16L.gitignore

!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Calculadora de Média</title>
</head>
<body>
    <h1>Calculadora de Média</h1>
    <form action="/calcular" method="post">
        <label>Nome: <input type="text" name="nome" required></label><br>
        <label>Nota 1: <input type="number" name="nota1" required></label><br>
        <label>Nota 2: <input type="number" name="nota2" required></label><br>
        <button type="submit">Calcular</button>
    </form>
</body>
</html>


Server.js



@@ -0,0 +1,6 @@
{
  "dependencies": {
    "body-parser": "^2.2.0",
    "express": "^5.1.0"
  }
}

