const inputSearch = document.querySelector('input[name="search"]')

console.log(inputSearch)

document.getElementById('#YT-search').forEach(btn => btn.addEventListener('click', search))

function search(event) {
    event.preventDefault()
  
    const anchor = document.createElement('a')
    anchor.target = "_blank"
    anchor.href = `${event.target.getAttribute('formaction')}${encodeURI(inputSearch.value)}`
    anchor.click()
  }

