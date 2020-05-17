function solution (N) {
  const b = N.toString(2), len = b.length
  let i = 0, max = 0;
  while (i < len) {
    const idx = b.indexOf('1', i+1) // i 이후의 1을 가져옴
    if (idx === -1) break // 없을 경우 종료
    max = Math.max(idx - i - 1, max) // 현재 거리와 최대 거리를 비교
    i = idx // 다음 1의 위치로 이동
  }
  return max
}

const assert = require('assert').strict
require('./test.json').forEach(({ input, output }) => {
  assert.deepEqual(solution(...input), output);
})