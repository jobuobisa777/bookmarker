// listen for form submit 
document.getElementById('myForm').addEventListener('submit', saveBookmark);


// save Bookmark
function saveBookmark(e){
	// get form values
	var siteName =document.getElementById('siteName').value;
	var siteurl =document.getElementById('siteurl').value;

if(!validateForm(siteName, siteUrl)){
	return false;
}


	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	// local storage test
	//localStorage.setItem('test,' 'Hello world')
	//console.log(localStorage.getItem('test'));
	//localStorage.removeItem('test')

// test if bookmarks is null
if(localStorage.getItem('bookmarks') === null){
	// init array
	var bookmarks = [];
	// add to array
	bookmarks.push(bookmark)
	// Set to localStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks);
} else {
	// Get bookmarks from localStorage
	var bookmarks = JSON.parse(localstorage.getItem('bookmarks'));
	// ADD BOOKMARK TO ARRAY
	bookmarks.push(bookmark);
	// Re-set back to LocalStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks);
} 


// clear form
document.getElementById('myForm').reset;
// refetch bookmarks
	fetchBookmarks();

	// prevent form from submitting
	e.preventDefault();

	// Delete bookmark
	function deleteBookmark(url){
		// Get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		// loop through bookmarks
		for(var i =0;i < bookmarks.length;i++)
			if(bookmarks[i].url == url){
				// remove from array
				bookmarks.splice(i, 1);
			}
	}
localStorage.setItem('bookmarks', JSON.stringify(bookmarks);

	// refetch bookmarks
	fetchBookmarks();
}

// fetch bookmarks
function fetchBookmarks(){
	// get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// get output id
	var bookmarksResults = document.getElementById('bookmarksResults');


	// build output
	bookmarksResults.innerHTML = '';
	var name = bookmarks[i].name;
	var url = bookmarks[i].siteUrl;

	bookmarksResults.innerHTML += '<div class="well">'+
									'<h3>'+name+
									' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '''
									' <a onclick="deleteBookmark(\)" class="btn btn-danger" target="_blank" href="#">Delete</a>'
									'</h3>'+
									'</div>';
}


// validate form
function validateform(siteName, siteUrl)
if(!siteName || !siteUrl){
	alert('Please fill in the form');
	return false;
}

var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

if(!siteUrl.match(regex)){
	alert('Please use a valid URL');
	return false;

}

return true
}