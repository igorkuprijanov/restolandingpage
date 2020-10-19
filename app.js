document.getElementById('facebookredirect').onclick = function(){
   window.open('http://facebook.com', '_blank');
}
document.getElementById('instagramredirect').onclick = function(){
   window.open('http://instagram.com', '_blank');
}
document.getElementById('youtuberedirect').onclick = function(){
   window.open('http://youtube.com', '_blank');
}
document.getElementById('whatsappredirect').onclick = function(){
   window.open('http://whatsapp.com', '_blank');
}
document.getElementById('twitterredirect').onclick = function(){
   window.open('http://twitter.com', '_blank');
}

let menuButtonStatus = false

let menubutton = document.getElementById('menubutton')

let mainmenu = document.getElementById('mainMenuPage')
let mainmenuStatus = false

let dessertmenu = document.getElementById('dessertMenuPage')
let dessertmenuStatus = false

let cocktailmenu = document.getElementById('cocktailMenuPage')
let cocktailmenuStatus = false

let events = document.getElementById('events')
let eventStatus = false

let team = document.getElementById('team')
let teamStatus = false

let gallery = document.getElementById('gallery')
let galleryStatus = false

let media = document.getElementById('media')
let mediaStatus = false

let blog = document.getElementById('blog')
let blogStatus = false

let contacts = document.getElementById('contacts')
let contactsStatus = false
// MENU BUTTON

menubutton.onclick = function(){  
    if(menuButtonStatus == false){
document.getElementById('menulist').style.display = "inline"
menuButtonStatus = true
    }else if(menuButtonStatus == true){
        document.getElementById('menulist').style.display = 'none'
    menuButtonStatus = false
    mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        //CRUSH MENUS WHEN MAIN IS COLLAPSED
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
                                       
    }
}


//MAIN MENU TAB

document.getElementById('mainMenuItem').addEventListener('click', function(){
    
 if(mainmenuStatus == false){
        mainmenu.className = "animate__animated animate__slideInUp"
        mainmenu.style.display = "inline"
        mainmenuStatus = true
     
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{events.style.display = 'none'}, 1000)
        eventStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
     bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    }else{
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
    }
})


//DESSERT MENU TAB

document.getElementById('dessertMenuItem').addEventListener('click', function(){
    
 if(dessertmenuStatus == false){
        dessertmenu.className = "animate__animated animate__slideInUp"
        dessertmenu.style.display = "inline"
        dessertmenuStatus = true
        
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{events.style.display = 'none'}, 1000)
        eventStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
     bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
     
    }else{
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
    }
})


//COCKTAIL MENU TAB

document.getElementById('cocktailMenuItem').addEventListener('click', function(){

 if(cocktailmenuStatus == false){
        cocktailmenu.className = "animate__animated animate__slideInUp"
        cocktailmenu.style.display = "inline"
        cocktailmenuStatus = true
     
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{events.style.display = 'none'}, 1000)
        eventStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
     bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    }else{
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
    }
})


//EVENTS TAB

document.getElementById('eventsbutton').addEventListener('click', function(){
    if(eventStatus == false){
        events.className = "animate__animated animate__slideInUp"
        events.style.display = 'inline'
        eventStatus = true
        //COLLAPSE ALL OTHER TABS
        
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
        bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
        
    }else if(eventStatus == true){
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{events.style.display = 'none'}, 1000)
        eventStatus = false
    }
})


//TEAM TAB
document.getElementById('teambutton').addEventListener('click', function(){
    if(teamStatus == false){
        team.className = "animate__animated animate__slideInUp"
        team.style.display = 'inline'
        teamStatus = true
        
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {events.style.display = 'none'}, 1000)
        eventStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
        bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    }else if(teamStatus == true){
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{team.style.display = 'none'}, 1000)
        teamStatus = false
    }
})

//GALLERY TAB
document.getElementById('gallerybutton').addEventListener('click', function(){
    if(galleryStatus == false){
        gallery.className = "animate__animated animate__slideInUp"
        gallery.style.display = 'inline'
        galleryStatus = true
        
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {events.style.display = 'none'}, 1000)
        eventStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
        bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    }else if(galleryStatus == true){
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{gallery.style.display = 'none'}, 1000)
        galleryStatus = false
    }
})

//MEDIA TAB
document.getElementById('mediabutton').addEventListener('click', function(){
    if(mediaStatus == false){
        media.className = "animate__animated animate__slideInUp"
        media.style.display = 'inline'
        mediaStatus = true
        
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {events.style.display = 'none'}, 1000)
        eventStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
        bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    }else if(mediaStatus == true){
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{media.style.display = 'none'}, 1000)
        mediaStatus = false
    }
})
//BLOG TAB
document.getElementById('blogbutton').addEventListener('click', function(){
    if(blogStatus == false){
        blog.className = "animate__animated animate__slideInUp"
        blog.style.display = 'inline'
        blogStatus = true
        
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {events.style.display = 'none'}, 1000)
        eventStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
        bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    }else if(blogStatus == true){
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{blog.style.display = 'none'}, 1000)
        blogStatus = false
    }
})

let plusicons = document.querySelectorAll('.blogicon')
let blogposttext = document.querySelectorAll('.blogopened')
console.log(blogposttext)
let openStatus = false

for(let i = 0; i<plusicons.length; i++){
    plusicons[i].addEventListener('click', function(){
        if(openStatus == false){
            blogposttext[i].style.display = 'inline'
            openStatus = true
            console.log('ass')
        }else{
             blogposttext[i].style.display = 'none'
            openStatus = false
        }
    })
}

//CONTACTS TAB
document.getElementById('contactsbutton').addEventListener('click', function(){
    if(contactsStatus == false){
        contacts.className = "animate__animated animate__slideInUp"
        contacts.style.display = 'inline'
        contactsStatus = true
        
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {events.style.display = 'none'}, 1000)
        eventStatus = false
        bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    }else if(contactsStatus == true){
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{contacts.style.display = 'none'}, 1000)
        contactsStatus = false
    }
})

//LOGO AS LINK TO CLOSE ALL TABS

document.getElementById('logo').addEventListener('click', function(){
        mainmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
        mainmenuStatus = false
        dessertmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
        dessertmenuStatus = false
        cocktailmenu.className = "animate__animated animate__slideOutDown"
        setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
        cocktailmenuStatus = false
        team.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {team.style.display = 'none'}, 1000)
        teamStatus = false
        gallery.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {gallery.style.display = 'none'}, 1000)
        galleryStatus = false
        media.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {media.style.display = 'none'}, 1000)
        mediaStatus = false
        blog.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {blog.style.display = 'none'}, 1000)
        blogStatus = false
        events.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {events.style.display = 'none'}, 1000)
        eventStatus = false
        contacts.className = "animate__animated animate__slideOutDown"
        setTimeout(() => {contacts.style.display = 'none'}, 1000)
        contactsStatus = false
    bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
    document.getElementById('menulist').style.display = 'none'
    menuButtonStatus = false
    mainmenu.className = "animate__animated animate__slideOutDown"
})

//TABLE BOOKING

let bookingform = document.getElementById('bookingform')

document.getElementById('tablebookbutton').onclick = function(){
    bookingform.className = "animate__animated animate__zoomIn animate__faster"
    bookingform.style.display = 'flex'
    
    mainmenu.className = "animate__animated animate__slideOutDown"
    setTimeout(() =>{mainmenu.style.display = 'none'}, 1000)
    mainmenuStatus = false
    dessertmenu.className = "animate__animated animate__slideOutDown"
    setTimeout(() =>{dessertmenu.style.display = 'none'}, 1000)
    dessertmenuStatus = false
    cocktailmenu.className = "animate__animated animate__slideOutDown"
    setTimeout(() =>{cocktailmenu.style.display = 'none'}, 1000)
    cocktailmenuStatus = false
    team.className = "animate__animated animate__slideOutDown"
    setTimeout(() => {team.style.display = 'none'}, 1000)
    teamStatus = false
    gallery.className = "animate__animated animate__slideOutDown"
    setTimeout(() => {gallery.style.display = 'none'}, 1000)
    galleryStatus = false
    media.className = "animate__animated animate__slideOutDown"
    setTimeout(() => {media.style.display = 'none'}, 1000)
    mediaStatus = false
    blog.className = "animate__animated animate__slideOutDown"
    setTimeout(() => {blog.style.display = 'none'}, 1000)
    blogStatus = false
    events.className = "animate__animated animate__slideOutDown"
    setTimeout(() => {events.style.display = 'none'}, 1000)
    eventStatus = false
    contacts.className = "animate__animated animate__slideOutDown"
    setTimeout(() => {contacts.style.display = 'none'}, 1000)
    contactsStatus = false
}

document.getElementById('cancelbutton').addEventListener("click", cancelBooking)

function cancelBooking(event){
    event.preventDefault()
    bookingform.className = "animate__animated animate__faster animate__zoomOut"
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
}
    
document.getElementById('submitbutton').addEventListener('click', submitBooking)

function submitBooking(event){
    event.preventDefault()
    console.log('great anal sex')
    document.getElementById('mainform').style.display = 'none'
    document.getElementById('loader').style.display = 'block'
    setTimeout(() => {document.getElementById('loader').style.display = "none"
    document.getElementById('succesmessage').className = 'animate__animated animate__zoomIn animate__faster'
    document.getElementById('succesmessage').style.display = 'flex'
                     }, 1300)
}

document.getElementById("succesmessagebtn").onclick = function(){
    bookingform.className = 'animate__animated animate__zoomOut animate__faster'
    setTimeout(() => {bookingform.style.display = 'none'}, 500)
    setTimeout(() => {
        document.getElementById('mainform').style.display = 'flex'
        document.getElementById('succesmessage').style.display = 'none'
    }, 500)
}

function redirectToMore(){
    window.open("https://www.google.com", "_blank")
}