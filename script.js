function searchPosts() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let posts = document.getElementsByClassName("post");

    for (let i = 0; i < posts.length; i++) {
        let title = posts[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (title.includes(input)) {
            posts[i].style.display = "block";
        } else {
            posts[i].style.display = "none";
        }
    }
}