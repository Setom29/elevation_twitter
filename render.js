const postsContainer = $('#posts');

function Renderer(){
    const _renderComments = function(comments){
        const commentsContainer = $(`<div class="comments"></div>`)
        for (let i = 0; i < comments.length; i++) {
            commentsContainer.append($(`<div class="comment" data-id="${comments[i].id}">${comments[i].text}</div>`))
        }
        return commentsContainer
    }
    const renderPosts = function(posts) {
        postsContainer.html("")
        for (let i = 0; i < posts.length; i++) {
            const postContainer = $(
                `<div class="post" data-id=${posts[i].id}><div class="post-text">${posts[i].text}</div></div>`
            )
            postContainer.append(_renderComments(posts[i].comments))
            postsContainer.append(postContainer)
        }
    }
    return {renderPosts}
}