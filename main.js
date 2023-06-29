const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function(){
    const input = $("#input")
    if (input.val() !== ""){
        tweeter.addPost(input.val())
        renderer.renderPosts(tweeter.getPosts())
        input.val('')
    }
}

$("body").on('click', ".delete", function(){
    tweeter.removePost($(this).parent().data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on('click', ".comment", function(){
    const input = $(this).siblings("input")
    if (input.val() !== ""){ 
        tweeter.addComment($(this).parents(".post").data().id, input.val())
        renderer.renderPosts(tweeter.getPosts())
    }
})

$("body").on('click', ".delete-comment", function(){
    tweeter.removeComment($(this).parents(".post").data().id, $(this).parent().data().id)
    renderer.renderPosts(tweeter.getPosts())
})