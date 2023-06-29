const postsContainer = $("#posts");

function Renderer() {
  const _renderComments = function (comments) {
    const commentsContainer = $(`<div class="comments"></div>`);
    for (let i = 0; i < comments.length; i++) {
      commentsContainer.append(
        $(`<div data-id="${comments[i].id}"><span class="delete-comment">x</span><span>${comments[i].text}</span></div>`)
      );
    }
    commentsContainer.append($(`
        <input placeholder="Got something to say?">
        <button class="comment">Comment</button>`));
    return commentsContainer;
  };
  const renderPosts = function (posts) {
    postsContainer.html("");
    for (let i = 0; i < posts.length; i++) {
      const postContainer = $(
        `<div class="post" data-id=${posts[i].id}><div class="post-text">${posts[i].text}</div></div>`
      );
      postContainer.append(_renderComments(posts[i].comments));
      postContainer.append(
        $(`<button class="delete">Delete post</button>`)
      );
      postsContainer.append(postContainer);
    }
  };
  return { renderPosts };
}
