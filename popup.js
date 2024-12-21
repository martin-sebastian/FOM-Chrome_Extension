chrome.bookmarks.get("123", (bookmark) => {
  console.log(bookmark); // Array containing the bookmark with ID 123
});

chrome.bookmarks.get(["123", "456"], (bookmarks) => {
  console.log(bookmarks); // Array containing bookmarks with IDs 123 and 456
});
chrome.bookmarks.getChildren("123", (children) => {
  console.log(children); // Array of bookmarks in the folder with ID 123
});
chrome.bookmarks.getTree((bookmarkTreeNodes) => {
  console.log(bookmarkTreeNodes); // Array containing the root nodes of the bookmark tree
});
chrome.bookmarks.search("Google", (results) => {
  console.log(results); // Array of bookmarks matching the query "Google"
});

// Search with query object
chrome.bookmarks.search({ url: "example.com" }, (results) => {
  console.log(results); // Array of bookmarks with URLs containing "example.com"
});
