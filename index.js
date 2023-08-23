let postsArray = []

function renderPosts(){
    let postsHtml = ``
        postsArray.forEach((post) => {
            postsHtml += `
                <h3 class="title">${post.title}</h3>
                <p>${post.body}</p>
                <hr>`
        })
        document.getElementById("posts").innerHTML = postsHtml
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0,5)

        renderPosts()
    })

    

document.getElementById("new-post").addEventListener("submit", function(event){
    event.preventDefault()
    let newPost = {
        title : document.getElementById("title").value,
        body : document.getElementById("body").value
    }
    document.getElementById("title").value = ""
    document.getElementById("body").value = ""
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts",{
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        postsArray.unshift(data)

        renderPosts()
    })
    
})
