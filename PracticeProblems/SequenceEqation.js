// https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  return p
    .slice()
    .sort((a, b) => a - b)
    .map((x) => p.indexOf(p.indexOf(x) + 1) + 1);
}

console.log(permutationEquation([5, 2, 1, 3, 4]));
