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
        bookmarkItem.id != articleID;
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


