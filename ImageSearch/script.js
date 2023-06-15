const accessKey = 'qhONckTlf_vbq9aD5NHu2iwm_hnlawIiaQRvfia3L-I'

const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMoreBtn = document.getElementById('show-more-btn')

let keyword = ''
let page = 1
async function searchImages() {
  keyword = searchBox.value
  const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

  const response = await fetch(url)
  const data = await response.json()
  if (page === 1) {
    searchResult.innerHTML = ''
  }
  //   console.log(data)
  const results = data.results
  //   console.log(results)
  results.map((result) => {
    const image = document.createElement('img')
    image.src = result.cover_photo.urls.small
    const imageLink = document.createElement('a')
    imageLink.href = result.links.html
    imageLink.target = '_blank'
    imageLink.appendChild(image)
    searchResult.appendChild(imageLink)
  })
  showMoreBtn.style.display = 'block'
}
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  searchImages()
})
showMoreBtn.addEventListener('click', () => {
  page++
  searchImages()
})
