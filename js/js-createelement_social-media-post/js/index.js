console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const post = document.createElement("article"); //
post.classList.add("post"); // gives name to the class

const paragraph = document.createElement("p");
paragraph.classList.add("post__content");
paragraph.textContent =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit";
post.append(paragraph);

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@Blood-Boss";

const button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("post__button");
button.setAttribute("data-js", "like-button");
button.innerText = " ♥ Like me";
button.addEventListener("click", handleLikeButtonClick);
footer.append(username); // send username inside footer  The order is important
footer.append(button); // send username inside footer

post.append(paragraph); // send paragraph inside post
post.append(footer); // send fotter inside post

console.log(post);

document.body.append(post); // To send everything inside the body
