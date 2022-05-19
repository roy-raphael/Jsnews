/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */

class Article {
    id = -1;
    title = "";
    publicationDate = "";
    image = "";
    content = "";

    constructor(articleJson) {
        this.id = articleJson.id;
        this.title = articleJson.title;
        this.publicationDate = articleJson.publicationDate;
        this.image = articleJson.image;
        this.content = articleJson.content;
    }

    formatDate() {
        let timestamp = Date.parse(this.publicationDate);
        let formattedDate = new Date(timestamp);
        return formattedDate.toLocaleDateString("fr");
    }
}