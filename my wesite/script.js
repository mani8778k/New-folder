
document.addEventListener("DOMContentLoaded" , function () {

    const open = document.querySelector(".over")

    const click = document.querySelector(".button")

    const home = document.querySelector(".home_name")

    const about = document.querySelector(".about_name")

    const skills = document.querySelector(".skills_name")

    const connect = document.querySelector(".connect_name")

    const home_1 = document.querySelector(".home")

    const about_1 = document.querySelector(".about")

    const skills_1 = document.querySelector(".skills")

    const connect_1 = document.querySelector(".connect")

    click.addEventListener("click" , function () {

        open.classList.toggle("active")


    }) ;

    

    home.addEventListener("click" , function () {

        about_1.classList.remove("active")
        skills_1.classList.remove("active")
        connect_1.classList.remove("active")
        home_1.classList.toggle("active")
    })

    
    about.addEventListener("click" , function () {

        skills_1.classList.remove("active")
        connect_1.classList.remove("active")
        home_1.classList.remove("active")
        about_1.classList.toggle("active")
    })

    
    skills.addEventListener("click" , function () {

        home_1.classList.remove("active")
        connect_1.classList.remove("active")
        about_1.classList.remove("active")
        skills_1.classList.toggle("active")
    })

    
    connect.addEventListener("click" , function () {

        about_1.classList.remove("active")
        home_1.classList.remove("active")
        skills_1.classList.remove("active")
        connect_1.classList.toggle("active")
    })


}) ;








