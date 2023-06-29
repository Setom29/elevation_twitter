const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function(){
    const val = $("input").val()
    if (val !== ""){
        tweeter.addPost(val)
        renderer.renderPosts(tweeter.getPosts())
    }
}

$("body").on('click', ".delete", function(){
    tweeter.removePost($(this).parent().data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on('click', ".comment", function(){
    tweeter.addComment($(this).parents(".post").data().id, $(this).siblings("input").val())
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on('click', ".delete-comment", function(){
    tweeter.removeComment($(this).parents(".post").data().id, $(this).parent().data().id)
    renderer.renderPosts(tweeter.getPosts())
})