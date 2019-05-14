function BookmarkService ()
{
    const localStorageKey = 'bookmarks';

    this.get = function () {
        return JSON.parse(localStorage.getItem(localStorageKey)) || [];
    }

    this.set = function (bookmarks) {
        localStorage.setItem(localStorageKey, JSON.stringify(bookmarks));
    }
};

export default BookmarkService;