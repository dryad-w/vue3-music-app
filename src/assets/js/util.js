export function shuffle(source) {
  // 不会影响原数组
  const arr = source.slice()
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

function getRandomInt(max) {
  // Math.random()不包含1
  return Math.floor(Math.random() * (max + 1))
}

function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

export function formatTime (interVal) {
  interVal = interVal | 0
  const second = (interVal % 60 + '').padStart(2, '0')
  const minute = ((interVal / 60 | 0) + '').padStart(2, '0')
  return `${minute}:${second}`
}
