var requestURL = "https://raw.githubusercontent.com/miqueiassousa/json/refs/heads/main/tecnologias.json";

const biblioteca = new XMLHttpRequest();
biblioteca.open("GET", requestURL);
biblioteca.responseType = "json";
biblioteca.send();

biblioteca.onload = function() {
        var responseData = biblioteca.response;
        console.log(responseData); 

        document.write(responseData.tecnologias[i].nome);
        
}