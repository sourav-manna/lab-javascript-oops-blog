
/* Fill your code*/
document.getElementById("addBlog").onclick = function (){
    if(document.getElementById("update1")){
        document.getElementById("update1").innerHTML = "Post"
        document.getElementById("update1").id = "post"
    }
    document.getElementById("imagelink").value=null
    document.getElementById("title").value=null
    document.getElementById("detail").value=null
    document.getElementById("date").value=null
    document.getElementById("author").value=null
    document.getElementById("popupContact").style.display = "block"
}

document.getElementById("close").onclick = function (){
    document.getElementById("popupContact").style.display = "none"
}


function deleteBlog(iddd){
    document.getElementById(iddd).remove()
}


function editBlog(iddd){
    document.getElementById("post").innerHTML = "Update"
    document.getElementById("post").id = "update1"
    ii = -1

    for(let i=0;i<myblogs.length;i++){
        if(myblogs[i][5] == iddd){
            ii = i
            break
        }
    }

    document.getElementById("imagelink").value=myblogs[ii][0]
    document.getElementById("title").value=myblogs[ii][1]
    document.getElementById("detail").value=myblogs[ii][2]
    document.getElementById("date").value=myblogs[ii][3]
    document.getElementById("author").value=myblogs[ii][4]

    
    document.getElementById("popupContact").style.display = "block"
    document.getElementById("update1").onclick = function(){
        let data = []
        data.push(document.getElementById("imagelink").value)
        data.push(document.getElementById("title").value)
        data.push(document.getElementById("detail").value)
        data.push(document.getElementById("date").value)
        data.push(document.getElementById("author").value)

        myblogs[ii] = data
        reload()
        document.getElementById("popupContact").style.display = "none"
        document.getElementById("update1").innerHTML = "Post"
        document.getElementById("update1").id = "post"
    }
    
   
}
class Blog {
    create(data){
        let newblog = document.createElement('div')
        newblog.className = "article-card"
        newblog.id = data[5]

        let image = document.createElement('img')
        image.src = data[0]
        image.className="blogimg"

        let div1 = document.createElement('div')
        div1.className="card-text"

        let heading = document.createElement('h1')
        heading.id = "blog-title"
        heading.innerHTML=data[1]

        let para1 = document.createElement('p')
        para1.innerHTML = data[2]+"<br><br>"

        let para2 = document.createElement('p')
        para2.innerHTML = "Posted on:"+"&nbsp;"+data[3]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"Author:&nbsp;"+data[4]

        let div2 = document.createElement('div')
        div2.className="card-buttons"

        let b1 = document.createElement("button")
        b1.id = "edit"
        b1.className = "button1"
        b1.innerHTML = "Edit"
        b1.onclick = function() {editBlog(data[5])}

        let b2 = document.createElement("button")
        b2.id = "delete"
        b2.className = "button2"
        b2.innerHTML = "Delete"
        b2.onclick = function() {deleteBlog(data[5])}

        
        div2.append(b1,b2)
        div1.append(heading,para1, para2, div2)
        newblog.append(image, div1)
        document.getElementById("container").append(newblog)
    }

}
let rt = new Blog()


function reload(){
    console.log("come")
    const elements = document.getElementsByClassName("article-card");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    console.log(myblogs)
    for(let i=0;i<myblogs.length;i++){
        console.log(myblogs[i])
        rt.create(myblogs[i])
    }
}

document.getElementById("post").onclick = function(){
    let data = []
    data.push(document.getElementById("imagelink").value)
    data.push(document.getElementById("title").value)
    data.push(document.getElementById("detail").value)
    data.push(document.getElementById("date").value)
    data.push(document.getElementById("author").value)

    let idd = myblogs[myblogs.length-1][5]
    data.push((idd+1).toString())
    myblogs.push(data)
    document.getElementById("imagelink").value=null
    document.getElementById("title").value=null
    document.getElementById("detail").value=null
    document.getElementById("date").value=null
    document.getElementById("author").value=null
    reload()
    document.getElementById("popupContact").style.display = "none"
}

//test
let myblogs = []
fetch('./storage.json')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => getData(data))
 function getData(data){
    myblogs = data;
    console.log(myblogs[0][0])
    reload()
 }






