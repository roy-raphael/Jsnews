/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */

class Article {
    title = "";
    publicationDate = "";
    image = "";
    content = "";

    constructor(article) {
        this.title = article.title;
        this.publicationDate = article.publicationDate;
        this.image = article.image;
        this.content = article.content;
    }

    formatDate() {
        let timestamp = Date.parse(this.publicationDate);
        let formattedDate = new Date(timestamp);
        return formattedDate.toLocaleDateString("fr");
    }
}