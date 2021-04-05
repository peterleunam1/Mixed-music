const express = require('express') ;//importa exprees para crear el serivdor
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();//creamos el servidor dentro de la constante
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res)  {
    res.send("<h1 style='color: green'> Hola mundo, esto es una kk</h1>");
})

app.post('/resultado', (req, res) => {
    const numero = req.body.numero;
    let textoparaTXT = 'Resultado \n\n';
    let textopararRespuesta = '<h1>Resultado</h1><br/>';
    for(let i = 0; i<=10; i++){
        textoparaTXT += `${numero} x ${i} = ${numero*i} \n`;
        textopararRespuesta += `<p>${numero} x ${i} = ${numero*i}</p>`;
    }
    fs.writeFile('./public/resultado.txt', textoparaTXT, (err) => {
        if(err){
            console.log("Ocurrió un error: ", err);
        }
        else{
            console.log("Archivo creado");
        }
    });

    res.send(`
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Music mix">
        <meta name="author" content="Pedro Agames">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="../css3/resultadox.css">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">


        <title>Resultado</title>
    </head>
    <body>
        <header class="cabecera">
            <div class="logo">
            <a href="index.html"><img src="../images/mixedmusic.png" alt="logo"/></a>
            </div>
            <nav class="navBar">
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="./Rock.html">Rock N' Roll</a>
                    </li>
                    <li>
                        <a href="./Reggae.html">Reggae</a>
                    </li>
                    <li>
                        <a href="./Blues.html">Blues</a>
                    </li>
                    <li>
                        <a href="./Pop.html">Pop</a>
                    </li>
                    <li>
                        <a href="./Electronica.html">Electro</a>
                    </li>
                    <li>
                    <a class="btn btn-warning bg-transparent" href="./formulario.html">
                        <i class="fas fa-calculator">
                        </i></a>
                </li>
                </ul>
            </nav>
        </header>
        <div class="banner">
            <h1 class="display-5 text-warning">Tabla de multiplicar</h1>
        </div>

        <section>
           ${textopararRespuesta}
        </section>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
    </body>
    `)
})

app.listen(port, ()=> {
    console.log(`Servidor listening on ${port}`);
})
