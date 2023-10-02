/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  const compressChar = (write, curr, count) => {
    chars[write] = curr
    write++

    if (count === 1) return write

    const len = `${count}`;
    for (const c of len) {
      chars[write] = c
      write++
    }

    return write
  }

  let [write, curr, count] = [0, chars[0], 1]
  for (let read = 1; read < chars.length; read++) {
    if (chars[read] === curr) {
      count++
    } else {
      write = compressChar(write, curr, count)
      count = 1
    }
    curr = chars[read]
  }
  
  write = compressChar(write, curr, count)

  return write
};