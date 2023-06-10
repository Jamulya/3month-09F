//Get
// fetch(' http://localhost:3000/cards/1')
// .then((res) => res.json())
// .then(res => console.log(res))


// POST -Create

// let btnCreate = document.querySelector('.btn-create')

// btnCreate.addEventListener('click', () => {
//     fetch('http://localhost:3000/cards', {
//         method: 'POST',
//         headers: {
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify(
//             {title: 'Samsung 2020', price: 900, memory: 512, image: 'https://fdn.gsmarena.com/imgroot/news/20/12/winners-losers-samsung/-1200w5/gsmarena_011.jpg'}
//         )
//     }).then(res => alert('вы удачно создали данные', res))
//     .catch(err => alert('проблема создании карточки', err))

// })

let btnCreate = document.querySelector('.btn-create')
let form = document.querySelector('.form')
let btnDelete = document.querySelector('.btn-delete')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            title: e.target[0].value,
            price: e.target[1].value,
            memory: e.target[2].value,
            image: e.target[3].value
        })
    }).then((res) => console.log(res))
    .catch((err) => console.log(err))
} )

//delete
btnDelete.addEventListener('click', () => {
    fetch('http://localhost:3000/cards/1', {
        method: 'DELETE'
    }).then(() => alert('вы успешно удалили'))
    .catch((err) => alert('ошибка при удалении карточки'))
})

//put
// let changeBtn = document.querySelector('.btn-change')

// changeBtn.addEventListener('click', () => {
//     fetch('http://localhost:3000/cards/3', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': "application/json",
//         },
//         body: JSON.stringify({price: 1100})
//     })
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// })

//patch
let changeBtn = document.querySelector('.btn-change')

changeBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/cards/2', {
        method: 'PATCH',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({price: 1400})
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})