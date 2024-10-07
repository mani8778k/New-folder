


document.addEventListener("DOMContentLoaded" , function () {


    const home = document.querySelector(".home_name")

    const about = document.querySelector(".about_name")

    const skills = document.querySelector(".skills_name")
    
    const  exit =  document.querySelector(".exit_name")

    const home_1 = document.querySelector(".home")

    const about_1 = document.querySelector(".about")

    const skills_1 = document.querySelector(".skills")

    const exit_1 = document.querySelector(".exit")



    home.addEventListener("click" ,function () {

        about_1.classList.remove("active")
        skills_1.classList.remove("active")
        exit_1.classList.remove("active")
        home_1.classList.add("active")


    })

    
    about.addEventListener("click" ,function () {

        skills_1.classList.remove("active")
        exit_1.classList.remove("active")
        home_1.classList.remove("active")
        about_1.classList.add("active")
        
    })


    
    skills.addEventListener("click" ,function () {

        home_1.classList.remove("active")
        about_1.classList.remove("active")
        exit_1.classList.remove("active")
        skills_1.classList.add("active")


    })


    
    exit.addEventListener("click" ,function () {

        home_1.classList.remove("active")
        about_1.classList.remove("active")
        skills_1.classList.remove("active")
        exit_1.classList.add("active")


    })




}) ;











