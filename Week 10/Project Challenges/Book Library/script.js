// let items = document.getElementById('items')

// // function renderToScreen(obj) {
// //     const products = obj
// //     console.log(products)
// //     products.forEach((product) => {
// //         const li = document.createElement('li')
// //         li.innerText = product.kind
// //         items.appendChild(li)
// //     })
// // }

// let btnlist = document.getElementById('listbutton')
// let btngrid = document.getElementById('gridbutton')


// fetch('https://api.freeapi.app/api/v1/public/books')
//     .then((response) => {
//         response.json()
//             .then((obj) => {
//                 const products = obj.data.data
//                 console.log(products)
//                 products.forEach((product) => {
//                     const li = document.createElement('li')
//                     li.innerText = product.volumeInfo.title
//                     li.innerText = product.volumeInfo.authors
//                     li.style.listStyle = 'none'
//                     items.appendChild(li)
//                 })
//             })
//             .catch((err) => console.log('Error converting JSON', err))
//     })

// // .then(renderToScreen)
// btngrid.addEventListener('click', () => {
//     const products = obj.data.data
//     console.log(products)
//     products.forEach((product) => {
//         const li = document.createElement('li')
//         li.innerText = product.volumeInfo.title
//         li.innerText = product.volumeInfo.authors
//         li.style.listStyle = 'none'
//         items.appendChild(li)
//     })
// })