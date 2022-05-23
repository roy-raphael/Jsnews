/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */

// ajouter un favori
function addBookmark(articleID) {
    let bookmarksList = getBookmarks();
    bookmarksList.push(articleID);
    saveBookmarks(bookmarksList);
}

// supprimer un favori
function removeBookmark(articleID) {
    let bookmarksList = getBookmarks();
    bookmarksList = bookmarksList.filter(function(bookmarkItem) {
        return bookmarkItem != articleID;
    });
    saveBookmarks(bookmarksList);
}

// récupérer les favoris
function getBookmarks() {
    let bookmarksList = localStorage.getItem("bookmarksList");
    if (bookmarksList == null) {
        return [];
    } else {
        return JSON.parse(bookmarksList);
    }
}

// enregistrer les favoris
function saveBookmarks(bookmarksList) {
    localStorage.setItem("bookmarksList", JSON.stringify(bookmarksList));
}

// retourner un tableau avec les id des favoris
function getBookmarksIds() {
    // Convert an array of strings to an array of numbers
    return getBookmarks().map(bookmarkIdStr => Number(bookmarkIdStr));
}

function getFavoritesId(){
    return getFavorites().map(favorite => favorite.id);
}

function displayArticlesList(articlesListJson) {
    let host = "http://localhost:4000";
    let articleManager = new ArticleManager(articlesListJson);
    let container = document.getElementsByClassName("container")[0];
    let bookmarks = getBookmarksIds();
    for (let article of articleManager.articlesList) {
        let activated = "";
        if (bookmarks.includes(article.id)) {
            activated = " activated";
        }
        let articleHTML = document.createElement("div");
        articleHTML.classList.add("col-12", "mt-5");
        articleHTML.innerHTML = `<div class="card article">
                                    <div class="card-header ">
                                        <h5 class="card-title d-flex justify-content-between">${article.title}<span class="publication-date">${article.publicationDate}</span></h5>
                                    </div>
                                    <img src="${host}/${article.image}" class="card-img-top">
                                    <span class="fa-stack fa-2x addFavorite${activated}" data-id=${article.id}>
                                        <i class="fas fa-star fa-stack-1x"></i>
                                        <i class="far fa-star fa-stack-1x"></i>
                                    </span>
                                    <div class="card-body">
                                        <p class="card-text">${article.content}</p>
                                    </div>
                                </div>`;
        if (activated == " activated") {
            articleHTML.getElementsByClassName("addFavorite")[0].style.color = "yellow";
        }
        container.appendChild(articleHTML);
    }
}

function listenStarButtonsClicks(removeHTML = false) {
    for (let bookmarksButton of document.getElementsByClassName("addFavorite")) {
        bookmarksButton.addEventListener('click', function(event) {
            if (! this.classList.contains("activated")) {
                // Add to favorites
                this.classList.add("activated");
                addBookmark(this.dataset.id);
                bookmarksButton.style.color = "yellow";
            } else {
                // Remove from favorites
                this.classList.remove("activated");
                removeBookmark(this.dataset.id);
                bookmarksButton.style.color = "inherit";
                if (removeHTML) {
                    let articleHTML = bookmarksButton.parentElement.parentElement;
                    articleHTML.parentElement.removeChild(articleHTML);
                }
            }        
        });
    }
}