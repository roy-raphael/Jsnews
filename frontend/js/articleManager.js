/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */

class ArticleManager {
    articlesList;

    constructor(articlesListJson) {
        for (let articleJson in articlesListJson)
        {
            articlesList.push(new Article(articleJson));
        }
        sortArticlesRecentFirst();
    }

    sortArticlesRecentFirst() {
        return this.articlesList.sort(function(a, b) {
            return (Date.parse(a.publicationDate) < Date.parse(b.publicationDate)) ? 1 : -1;
        });
    }
}