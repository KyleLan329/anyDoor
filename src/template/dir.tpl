<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
    <style>
        body {
            margin: 30px;
            background-color:rgb(125, 184, 252);
        }

        .container {
            border: 1px dashed royalblue;
        }

        a {
            display: block;
            font-size: 30px;
            color: white;
            width: 50%;
        }
    </style>
</head>

<body>
    <div class='container'>
        {{#each files}}
        <a href="{{../dir}}/{{file}}">[{{icon}}]{{file}}</a>
        {{/each}}
    </div>

</body>

</html>