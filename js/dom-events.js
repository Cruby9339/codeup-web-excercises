const blogContainer = document.getElementById("blog-container");
const userPost = document.getElementById("user-input")
const userName = document.getElementById("user-name")

addButtonEvent();


function addButtonEvent() {
	document.getElementById("submitBtn")
		.addEventListener("click", addPost)
}

function addPost() {
 	blogContainer.appendChild(buildBlogPost())
}

function buildBlogPost(){
	let blogPost = document.createElement(`div`);
	blogPost.setAttribute(`class`, `col-12 border mb-1`)
	blogPost.appendChild(getDateNode())
	blogPost.appendChild(getBlogText())
	blogPost.appendChild(getNodeName())
	return blogPost
}

function getBlogText(){
	let blogText = userPost.value
	let paragraphTag = document.createElement(`p`)
	paragraphTag.textContent = blogText;
	paragraphTag.setAttribute(`class`, `p-2`)
	return paragraphTag
}

function getNodeName(){
	let userText = document.createElement(`p`)
	userText.textContent = `Posted by ${userName.value}`
	return userText;
}

function getDateNode(){
	let dateNode = document.createElement(`p`);
	dateNode.setAttribute(`class`, `pt-2`)
	dateNode.textContent = new Date(Date.now()).toDateString()
	return dateNode
}








