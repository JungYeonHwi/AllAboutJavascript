var count = 0;
var timer = setInterval(function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);

// var intervalID = scope.setInteval(func, delay[, param1, param2, ...]);

var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);

// 실행 결과
// 0 (0.3초)
// 1 (0.6초)
// 2 (0.9초)
// 3 (1.2초)
// 4 (1.5초)
