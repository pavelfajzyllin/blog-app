let posts = [];
const TITLE_VALIDATION_LIMIT = 100;
const TEXT_VALIDATION_LIMIT = 200;

const postTitleInputNode = document.querySelector('.js-post-title-input');  //привязка к объектам из html
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.getElementById('validationMessage');


newPostBtnNode.addEventListener('click', function() {   //функция задает постоянной значения пользователя
    const postFromUser = getPostFromUser();

    addPost(postFromUser);   //  функция сохраняет новый пост в переменную "пост"

    renderPosts();   // отображает пост

});
postTitleInputNode.addEventListener('input', function(event) {
    validation()
});
postTextInputNode.addEventListener('input', function(event) {
    validation()
});

function validation(){
    const titleLen = postTitleInputNode.value.length;
    const textLen = postTextInputNode.value.length;

    if (titleLen > TITLE_VALIDATION_LIMIT) {
        validationMessage.innerText = `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove('validationMessage_hidden');
        newPostBtnNode.disabled = true;
        return;
    }
    if (textLen > TEXT_VALIDATION_LIMIT) {
        console.log('s');
        validationMessage.innerText = `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove('validationMessage_hidden');
        newPostBtnNode.disabled = true;
        return;
    }
    validationMessage.classList.add('validationMessage_hidden');
    newPostBtnNode.disabled = false;
    
}

function getPostFromUser() {      //title и text из полей ввода пользователем
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text
    };
}
function addPost ({ title, text}) {
    const currentDate = new Date();
    const dt = `${currentDate.getHours()} : ${currentDate.getMinutes()}`;
    posts.push({
        dt: dt,
        title: title,
        text: text
    });
}
function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML +=`
        <div class='post'>
            <p class='post__date'>${post.dt}</p>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
            </div>
        `
    });

    postsNode.innerHTML = postsHTML;
}

const data = new Date();

console.log(data);
