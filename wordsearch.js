// Pair Programming - Word Search - With Simon Huang

function transpose(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newArray[i].push(matrix[j][i]);
    }
  }

  return newArray;
}

const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (word && l.includes(word)) {
      return true;
    }
  }
  
  if (letters.length > 0) {
    const verticalMatrix = transpose(letters);
    const verticalJoin = verticalMatrix.map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (word && l.includes(word)) {
        return true;
      }
    }
  }
  
  return false;
};

module.exports = wordSearch;