function solution(array) {
  let map = new Map();

  // map 초기화
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }
  // 갯수 세기 : key를 조회해서 해당 value에 1을 더해준다.
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }

  // map의 value만 array에 따로 저장한다.
  let arr = Array.from(map.values());

  // value의 최댓값을 구한다.
  let max = Math.max(...arr);

  // 최댓값이 중복되면 -1을 return하고, 아니면 index를 반환한다.
  if (arr.indexOf(max) !== arr.lastIndexOf(max)) {
    return -1;
  } else {
    return arr.indexOf(max);
  }
}
