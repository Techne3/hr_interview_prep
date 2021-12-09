var wateringPlants = function (plants, capacity) {
  let n = plants.length;

  let steps = 0;
  for (let i = 0, curr_cap = capacity; i < n; ) {
    if (curr_cap < plants[i]) {
      // cannot be fully watered

      steps += i; // go i steps back, to river
      `curr_cap` = capacity; // refill capacity
      steps += i; // come back i steps, to this plant - because before plants are already watered
    }

    curr_cap -= plants[i]; // reduce capacity
    plants[i] = 0; // plant is fully watered
    steps += 1; // 1 step done
    i += 1; // go to next
  }

  return steps;
};


function subArr(arr, n, sum){
  
}