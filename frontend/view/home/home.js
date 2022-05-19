/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

async function displayArticlesList() {
    let host = "http://localhost:4000";
    let response = await fetch(host + "/api/article");
    let articlesListJson = await response.json();
    let articleManager = new ArticleManager(articlesListJson);
    let container = document.getElementsByClassName("container")[0];
    for (let article of articleManager.articlesList) {
        let articleHTML = document.createElement("div");
        articleHTML.classList.add("col-12", "mt-5");
        articleHTML.innerHTML = `<div class="card article">
                                    <div class="card-header ">
                                        <h5 class="card-title d-flex justify-content-between">${article.title}<span class="publication-date">${article.publicationDate}</span></h5>
                                    </div>
                                    <img src="${host}/${article.image}" class="card-img-top">
                                    <span class="fa-stack fa-2x addFavorite" data-id=${article.id}>
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

function listenStarButtonsClicks() {
    let bookmarksButtons = document.getElementsByClassName("addFavorite");
    console.log(bookmarksButtons);
    for (let bookmarksButton of bookmarksButtons) {
        console.log(bookmarksButton);
        bookmarksButton.addEventListener('click', function(event) {
            if (this.className.indexOf("activated") == -1) {
            // if (! this.classList.contains("activated")) {
                this.classList.add("activated");
                addBookmark(this.dataset.id);
            } else {
                this.classList.remove("activated");
                removeBookmark(this.dataset.id);
            }        
        });
    }
}

(async () => {
    let response = await displayArticlesList();
    listenStarButtonsClicks();
})();