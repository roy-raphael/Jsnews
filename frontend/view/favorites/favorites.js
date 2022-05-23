/**
 * Gère l'affichage et les interactions de la page des favoris
 */

async function getFavoritesArticles() {
    let host = "http://localhost:4000";
    let response = await fetch(host + "/api/article", {
        method: "POST",
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: `{"favorites": ${JSON.stringify(getBookmarks())}}`
    });
    let articlesListJson = await response.json();
    return articlesListJson;
}

async function displayFavoritesArticles() {
    let articlesListJson = await getFavoritesArticles();
    displayArticlesList(articlesListJson);
    listenStarButtonsClicks(true);
}

displayFavoritesArticles();
