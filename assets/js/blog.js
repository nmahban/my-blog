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

const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const blogOutput = document.getElementById("blogOutput");

btnInsert.onclick = function () {
  const key = inpkey.value;
  const value = inpValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  blogOutput.innerHTML += `${key}: ${value}<br />`;
}
