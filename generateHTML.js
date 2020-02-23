const colors = {
    blue: {
        background: "rgb(0, 195, 255)",
    },
    red: {
        background: "rgb(164, 36, 36)",
    },
    green: {
        background: "rgb(0, 136, 0)",
    },
    yellow: {
        background: "rgb(255, 255, 95)",
    },
}

function generateHTML(data) {
return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Developer Profile Generator</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <style>
    #profilepic{
        height:175px;
        width:175px;
        border-radius:100px;
        text-align:center;
        padding:3px;
        border: 3px solid black;
        margin:8px;
    }
    .container{
        font-family: Arial, Helvetica, sans-serif;
    }
    .top-container{
        position:relative;
        background-color:${colors[data.color].background};
        color: black;
        text-align:center;
    }
    .bottom-container{
        position:relative;
        background-color:${colors[data.color].background};
        color: black;
        text-align:center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:60px;
        margin-bottom:50px;
        border: 1px solid black;
    }
    .container-blue{
        background-color: ${colors[data.color].background};
    }
    .container-red{
        background-color: ${colors[data.color].background};
    }
    .container-green{
        background-color: ${colors[data.color].background};
    }
    .container-yellow{
        background-color: ${colors[data.color].background};
    }
    .github-container-blue{
        background-color: ${colors[data.color].background}; 
    }
    .github-container-red{
        background-color: ${colors[data.color].background};
    }
    .github-container-green{
        background-color: ${colors[data.color].background};
    }
    .github-container-yellow{
        background-color: ${colors[data.color].background};
    }
    .card{
        background-color:${colors[data.color].background};
        height: 150px;
        width:300px;
        text-align:center;
        border-radius:20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
    .row{
        justify-content: center;
        align-items: center;
    }
    </style>
  </head>
  <body>
    <div class="container top-container text-center container-blue">
        <img id="profilepic" src="${data.avatar_url}" alt="profile picture">
        <h1>Hello!</h1>
        <h2>My name is ${data.name}</h2>
        <p>${data.bio}</p>
        <p>
            <a href="https://www.google.com/maps/@?api=1&map_action=map&query=${data.location}" target="_blank">${data.location}</a>
            <a href="${data.html_url}" target="_blank">GitHub</a>
            <a href="${data.blog}" target="_blank">Blog</a>
        </p>
    </div>
    <div class="container bottom-container text-center container-blue">
        <div class="row">
            <div class="col-md-8">
                <div class="card text-center github-container-blue">
                    <h5 class="card-title">Public Repositories</h5>
                    <p class="card-text">${data.public_repos}</p>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card text-center github-container-blue">
                    <h5 class="card-title">Followers</h5>
                    <p class="card-text">${data.followers}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="card text-center github-container-blue">
                    <h5 class="card-title">GitHub Stars</h5>
                    <p class="card-text">${data.public_gists}</p>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card text-center github-container-blue">
                    <h5 class="card-title">Following</h5>
                    <p class="card-text">${data.following}</p>
                </div>
            </div>
        </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.4.1.js"
      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
    <script type="text/JavaScript" src="index.js"></script>
  </body>
</html>`;
}

module.exports = generateHTML;
