// 練習

// ①最初
// function printHelloWithButton() {
//   var btn = document.querySelector("input");
//
//   function printHello() {
//     console.log("Hello world");
//   }
//   // 関数内で定義された関数は、関数の中でしか呼び出せないという性質があるだけで、
//   // 通常の関数同様に呼び出せる
//
//   btn.addEventListener("click", printHello);
// }
// // 一連の処理をまとめた関数を作る
//
// window.addEventListener("load", printHelloWithButton);

// ②途中
// window.addEventListener("load", function() {
//   var btn = document.querySelector("input");
//
//   function printHello() {
//     console.log("Hello world");
//   }
//
//   btn.addEventListener("click", printHello);
// });

// ③最終
// window.addEventListener("load", function() {
//   var btn = document.querySelector("input");
//
//   btn.addEventListener("click", function() {
//     console.log("Hello world");
//   });
// });


window.addEventListener("load", function() {
  $("li").on("click", function() {
    console.log(this.id);
  });
});
