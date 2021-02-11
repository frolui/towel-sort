
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) { return []; }

  let towel = [];

    function deeper(matrix) {
        matrix.forEach((element ,i)=> {
            
            if (Array.isArray(element)) {
                if (i % 2 !== 0) {
                  element = element.reverse();}
                  deeper(element);    
            } else {
                towel.push(+element)
            }
            
        });
    }

    deeper(matrix)

    return towel;
}
