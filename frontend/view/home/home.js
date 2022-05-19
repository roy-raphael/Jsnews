/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

async function getArticlesList() {
    let host = "http://localhost:4000";
    fetch(host + "/api/article")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        // .then(function(value) {
        //     console.log(value);
        // })
        .catch(function(err) {
            // Une erreur est survenue
        });
}

async function displayArticlesList() {
    let host = "http://localhost:4000";
    let articlesListJson = await getArticlesList();
    let articleManager = new ArticleManager(articlesListJson);
    let container = document.getElementsByClassName("container")[0];
    for (let article in articleManager.articlesList) {
        let articleHTML = document.createElement("div");
        articleHTML.classList.add("col-1", "mt-5");
        articleHTML.innerHTML = `<div class="card article">
                                    <div class="card-header ">
                                        <h5 class="card-title d-flex justify-content-between">${article.title}<span class="publication-date">${article.publicationDate}</span></h5>
                                    </div>
                                    <img src="${host}/${article.image}" class="card-img-top">
                                    <span class="fa-stack fa-2x addFavorite">
                                        <i class="fas fa-star fa-stack-1x"></i>
                                        <i class="far fa-star fa-stack-1x"></i>
                                    </span>
                                    <div class="card-body">
                                        <p class="card-text">${article.content}</p>
                                    </div>
                                </div>`;
        container.appendChild(articleHTML);
    }
}

displayArticlesList();