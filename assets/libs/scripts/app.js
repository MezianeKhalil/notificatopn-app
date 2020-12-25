let btnGet = document.getElementById("notification-button")
let closeBtn = document.getElementsByClassName('close')
let notificationContainer = document.getElementById("notification")
btnGet.addEventListener("click",()=>{
    setTimeout(()=>{
        notificationComponent(notificationContainer)
    },500)
})
document.body.addEventListener('DOMSubtreeModified', function () {
    for(btn of closeBtn){
        btn.addEventListener('click',(e)=>{
            let parent = e.target.parentNode.parentNode.parentNode
            parent.classList.add('slide-right')
            setTimeout(()=>{
                parent.remove()
            },200)
        })
    }
}, false)
document.body.addEventListener('DOMSubtreeModified',()=>{
    if(notificationContainer.childElementCount > 0){
        for(item of notificationContainer.children){
            interval(item,notificationContainer.childElementCount)
        }
    }
})
function interval(item,childrenCount){
    let interval = setInterval(()=>{
        item.remove()
    },10000)
    if(childrenCount == 0){
        clearInterval(interval)
    }
}
function notificationComponent(parent){
    getNotificationContext().then(body=>{
        let parentDiv = document.createElement('div')
        parentDiv.classList.add('my-3','shadow-lg')

        let childeDiv = document.createElement('div')
        childeDiv.classList.add('p-5','bg-white','w-96','slide-left','relative','text-gray-900','rounded-lg')
        parentDiv.appendChild(childeDiv)
        avatar(childeDiv)

        let paragraph = document.createElement('p')
        paragraph.classList.add('capitalize','text-sm','mb-2')
        paragraph.innerHTML = body

        let button = document.createElement('button')
        button.classList.add('absolute','top-1','right-1','close')
        button.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path></svg>'

        childeDiv.appendChild(paragraph)
        childeDiv.appendChild(button)
        parent.appendChild(parentDiv)
    })
    
}
function avatar(childe){
    getNotificationData()
    .then(data=>{
        let {first_name,last_name,avatar:avatarSrc} = data
        let user = document.createElement('div')
        user.classList.add("flex")

        let userContainer = document.createElement('div')
        userContainer.classList.add("w-10","h-10","relative")

        user.appendChild(userContainer)

        let avatar = document.createElement('div')
        avatar.classList.add("group","w-full","h-full","rounded-full","overflow-hidden","shadow-inner","text-center")

        userContainer.appendChild(avatar)

        let heading = document.createElement('h2') 
        heading.classList.add('capitalize','text-xl','mt-2','px-2')
        heading.innerHTML = first_name + last_name
        user.appendChild(heading)

        let image = document.createElement('img')
        image.src = avatarSrc
        avatar.appendChild(image)

        childe.appendChild(user)

    })
}
async function getNotificationData(){
    let response = await fetch(`https://reqres.in/api/users/${Math.floor(Math.random()*10) + 1}`)
    let {data} = await response.json()
    return data
}
async function getNotificationContext(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random()*100) + 1}`)
    let {body} = await response.json()
    return body
}