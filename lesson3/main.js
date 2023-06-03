// let person = {
//     age: 15,
//     email: '123@mail.ru'
// }

// let persons = [
//     {
//         age: 20,
//         email: '123@mail.ru',
//     }
// ]

// let p = new Promise((resolve, reject) => {
//     new Promise ((resolve, reject)=> {
//         if(persons.filter(item => item.email === person.email).length){
//             reject('такой пользователь уже сущ')
//         }else {
//             resolve('успешно зареган')
//         }

//     })
//     .then((response) => console.log(response)) //resolve
// .catch((error) => console.log(error)) //reject
// .finally(() => console.log('its over'))
// console.log(p);

// })


//----fetch----
// let promise = fetch(url, [options])

// fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json())
//  .then(json => console.log(json))
//  .catch((error) => console.log(error))

// let row = document.querySelector('.row')

// fetch('https://api.escuelajs.co/api/v1/users')
// .then((response) => response.json())
// .then((json) => json.forEach((item) => {
//     // console.log(item);
//     let image = document.createElement('img')
//     image.setAttribute('src', item.avatar)
//     image.setAttribute('alt', item.name)
//     image.style.cssText = 'width: calc(33.333% - 13.333); height: 400px'
//     row.append(image)
// }))
// .catch((err) => console.log(err))



//-----------
let menu = document.querySelector('.menu')
let row = document.querySelector('.row')

const getProducts = (category) => {
    fetch(`https://fakestoreapi.com/products/${category === 'all' ? '' : 'category/' + category}`)
     .then((res) => res.json())
     .then((res) => {
        res.forEach((item) => {
            row.innerHTML += `
            <div class="card">
    <img class="card__img" src="${item.image}" alt="">
    <h2 class="card__title">${item.title}</h2>
    <p class="card__subtitle">${item.description}</p>
    <p class="card__category">Категория: ${item.category}</p>
    <p class="card__price"> цена: ${item.price}</p>
    <p class="card__rating"> Рейтинг${item.rating.rate}</p>

</div>
            `
        })
     })
}

getProducts('all')




const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
.then((res) => res.json())
.then((res) => { res.forEach((item) => {
    menu.innerHTML += `<li class='menu-item'>${item}</li>`
})

let menuItems = document.querySelectorAll('.menu-item')
// console.log(menuItems);

Array.from(menuItems).forEach((item) => {
    item.addEventListener('click', () => {
    //    fetch(`https://fakestoreapi.com/products/category/${item.textContent}`)
        // .then((res) => res.json())
        // .then((res) => console.log(res))
        row.innerHTML = ''
        getProducts(item.textContent)
     })
   })
 })
}
getCategories()
