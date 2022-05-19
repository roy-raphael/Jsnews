/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

async function getArticles() {
    let host = "http://localhost:4000";
    let response = await fetch(host + "/api/article");
    let articlesListJson = await response.json();
    return articlesListJson;
}

async function displayArticles() {
    let articlesListJson = await getArticles();
    displayArticlesList(articlesListJson);
    listenStarButtonsClicks();
}

displayArticles();
