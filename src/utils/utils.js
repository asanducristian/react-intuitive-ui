export function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getString(key) {
  return localStorage.getItem(key) || ''
}

export function setString(key, string) {
  localStorage.setItem(key, string)
}

export function getLanguage() {
  return localStorage.getItem('sandu:language') || 'en'
}

export function setLanguage(language) {
  localStorage.setItem('sandu:language', language)
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getFormattedBirthdate(date) {
  return `${('0' + date.getDate()).slice(-2)}.${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}.${date.getFullYear()}`
}

export function isValidDate(date) {
  return date instanceof Date && !isNaN(date)
}

export function shuffle(array) {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}
