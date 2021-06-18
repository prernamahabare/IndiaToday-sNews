// console.log("hey");

//489e688a4a3c4bd4954673bce0efe778
let source = 'in';
let api = '489e688a4a3c4bd4954673bce0efe778';

let newcontainer = document.getElementById('newcontainer');

//const xhr = new XMLHttpRequest();

// Open the object
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

// USE THIS FOR POST REQUEST
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${api}`, true);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=489e688a4a3c4bd4954673bce0efe778', true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            //console.log(element, index)

                let news =`<p>
                    <button class="btn btn-primary" type="button"   data-bs-toggle="collapse" data-bs-target="#collapseExample${index}" aria-expanded="false" aria-controls="collapseExample${index}">
                      <b> Breaking news ${index+1} :</b> ${element["title"]}
                    </button>
                </p>
                <p>
                    <div class="collapse" id="collapseExample${index}">
                    <div class="card card-body">
                        ${element["content"]}.<a href="${element['url']}" target="_blank" >Read more here</a>
                    </div>
                    </div>
                </p>`
         newsHtml += news;
        });
        newcontainer.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();

