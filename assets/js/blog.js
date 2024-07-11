const form = document.getElementById("form");
const username = document.getElementById(`username`);
const title = document.getElementById(`title`);
const content = document.getElementById(`content`);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  const usernameValue = username.value;
  const titleValue = title.value;
  const contentValue = content.value;

  localStorage.setItem(`user-name`, usernameValue);
  localStorage.setItem(`title-name`, titleValue);
  localStorage.setItem(`content-name`, contentValue);

  window.location.href = "blog.html";
});

const userName = localStorage.getItem(`user-name`);
const titleName = localStorage.getItem(`title-name`);
const contentName = localStorage.getItem(`content-name`);

document.getElementById(`user-name`).textContent = userName;
document.getElementById(`title-name`).textContent = titleName;
document.getElementById(`content-name`).textContent = contentName;
