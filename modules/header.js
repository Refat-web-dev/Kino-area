import {
    getDetails
} from "./https.request"
import { reloadSearch } from "./reload"

export function header() {
    let body = document.body
    let header = document.createElement("header")
    let container = document.createElement("div")
    let inner_header = document.createElement("div")
    let sub_header = document.createElement("div")
    let left = document.createElement("div")
    let logo = document.createElement("div")
    let logo_img = document.createElement("img")
    let ul_social = document.createElement("ul")
    let header_two = document.createElement("header")
    let container_two = document.createElement("div")
    let inner_header_two = document.createElement("div")
    let left_two = document.createElement("div")
    let logo_two = document.createElement("div")
    let logo_img_two = document.createElement("img")
    let ul_social_two = document.createElement("ul")

    let social_icons = [
        "vk",
        "instagram",
        "facebook",
        "twitter"
    ]
    let links_text = [
        "Poster",
        "Media",
        "Filters",
        "Actors",
        "News",
        "Collections",
        "Categories"
    ]

    for (let icon of social_icons) {
        let li_social = document.createElement("li")
        let a_social = document.createElement("a")
        let icon_social = document.createElement("img")

        icon_social.src = `/icons/${icon}.svg`
        icon_social.alt = `${icon}`
        a_social.href = "#"

        a_social.append(icon_social)
        li_social.append(a_social)
        ul_social.append(li_social)
    }

    for (let icon of social_icons) {
        let li_social = document.createElement("li")
        let a_social = document.createElement("a")
        let icon_social = document.createElement("img")

        icon_social.src = `/icons/${icon}.svg`
        icon_social.alt = `${icon}`
        a_social.href = "#"

        a_social.append(icon_social)
        li_social.append(a_social)
        ul_social_two.append(li_social)
    }

    let center = document.createElement("nav")
    let links = document.createElement("ul")
    
    let center_two = document.createElement("nav")
    let links_two = document.createElement("ul")

    for (let text of links_text) {

        let li = document.createElement("li")
        let a = document.createElement("a")

        a.innerHTML = `${text}`
        a.href = `#`

        li.append(a)
        links.append(li)

    }

    for (let text of links_text) {

        let li = document.createElement("li")
        let a = document.createElement("a")

        a.innerHTML = `${text}`
        a.href = `#`

        li.append(a)
        links_two.append(li)
    }

    let right = document.createElement("div")
    let search = document.createElement("div")
    let sign_in = document.createElement("button")

    let right_two = document.createElement("div")
    let search_two = document.createElement("div")
    let sign_in_two = document.createElement("button")

    let search_canvas = document.createElement("div")
    let modal_search = document.createElement("div")
    let cinema = document.createElement("img")
    let search_cont = document.createElement("div")
    let search_close = document.createElement("div")
    let img_close = document.createElement("img")
    let input = document.createElement("input")
    let button_filter = document.createElement("button")
    let img_filter = document.createElement("img")
    let button_search = document.createElement("button")
    let img_search = document.createElement("img")
    let search_result = document.createElement("div")

    search_canvas.classList.add("search_canvas")
    search_canvas.classList.add("close")
    modal_search.classList.add("modal_search")
    cinema.classList.add("cinema")
    search_cont.classList.add("search_cont")
    search_close.classList.add("search_close")
    search_close.classList.add("close")
    search_result.classList.add("search_result")

    cinema.src = "/icons/cinema.svg"
    img_close.src = "/icons/close.svg"
    input.type = "text"

    button_filter.id = "movie"
    img_filter.src = "/icons/filter.svg"
    img_search.src = "/icons/search_btn.svg"
    modal_search.append(cinema, search_cont, search_result)
    search_cont.append(search_close, input, button_filter, button_search)
    search_close.append(img_close)
    button_filter.append(img_filter)
    button_search.append(img_search)

    header.className = "header_one"
    header_two.className = "header_two"
    container.className = "container"
    inner_header.className = "header"
    sub_header.className = "center"
    left.className = "left"
    logo.className = "logo"
    
    container_two.className = "container"
    inner_header_two.className = "header"
    left_two.className = "left"
    logo_two.className = "logo"

    logo_img.src = "/icons/logo.svg"
    logo_img.alt = "logo"
    
    logo_img_two.src = "/icons/logo.svg"
    logo_img_two.alt = "logo"

    ul_social.className = "social"
    
    ul_social_two.className = "social"

    center.className = "center"
    links.className = "links"
    
    center_two.className = "center"
    links_two.className = "links"

    right.className = "right"
    search.type = "text"
    
    right_two.className = "right"
    search_two.type = "text"

    sign_in.className = "sign_in"
    sign_in.innerHTML = "Sign in"
    
    sign_in_two.className = "sign_in"
    sign_in_two.innerHTML = "Sign in"
    
    header.append(container)
    container.append(inner_header)
    inner_header.append(left, center, right)
    left.append(logo, ul_social)
    logo.append(logo_img)
    
    header_two.append(container_two)
    container_two.append(inner_header_two,sub_header)
    inner_header_two.append( right_two, left_two ,center_two)
    left_two.append(logo_two, ul_social_two)
    logo_two.append(logo_img_two)

    center.append(links)

    center_two.append(sign_in_two)
    sub_header.append(links_two)

    right.append(search, sign_in)

    right_two.append(search_two)

    body.prepend(header,header_two, modal_search, search_canvas)

    logo.onclick = () => {
        location.assign("/")
    }

    button_filter.onclick = () => {
        if (button_filter.id === "movie") {
            button_filter.id = "person"
        } else {
            button_filter.id = "movie"
        }
        console.log(button_filter.id);
    }
   [search ,search_two].forEach(btn=>{
       btn.onclick = () => {
           modal_search.style.display = "flex"
           search_canvas.style.display = "block"
           setTimeout(() => {
               modal_search.style.top = "20px"
               modal_search.style.opacity = "1"
               search_canvas.style.opacity = "1"
           }, 0);
           body.style.overflowY = "hidden"
       }
   })

    let close_btns = document.querySelectorAll(".close")

    close_btns.forEach(btn => {
        btn.onclick = () => {
            body.style.overflowY = "auto"
            modal_search.style.top = "-50%"
            modal_search.style.opacity = "0"
            search_canvas.style.opacity = "0"

            setTimeout(() => {
                modal_search.style.display = "none"
                search_canvas.style.display = "none"
            }, 500);
        }
    })

    let val

    input.onkeyup = (e) => {
        val = input.value.toLowerCase().trim()
        if (e.key === "Enter") {
            getData(button_filter.id, search_result)
        }
    }

    button_search.onclick = () => {
        getData(button_filter.id, search_result)
    }

    function getData(filter, place) {
        getDetails(`/search/${filter}?query=${val}`)
            .then(res => {
                reloadSearch(res.data.results, place, filter)
            })
    }
}

        // /3/search/movie
        // function debounce(func, timeout = 300) {
        //     let timer;
        //     return (...args) => {
        //         clearTimeout(timer);
        //         timer = setTimeout(() => {
        //             func.apply(this, args);
        //         }, timeout);
        //     };
        // }
    
        // function getData() {
        //     let val = search.value.toLowerCase().trim()
    
        //     if (!val) return
    
        // getDetails(`/search/person?query=${val}`)
        //     .then(res => console.log(res))
    
        // getDetails(`/search/movie?query=${val}`)
        //     .then(res => console.log(res))
        // }
        // search.onkeyup = debounce(() => getData())