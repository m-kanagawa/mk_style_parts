// const swiper = new Swiper('.swiper', {
// 	// spaceBetween: 30, // スライドの間隔ー単位はpx
// 	slidesPerView: 1, // 表示されるスライドの枚数
// 	autoHeight: true, // スライドの高さに合わせてSwiperの高さを変える
// 	loop: true, // ループする
// 	effect: 'fade',
// 	speed: 2000, // 2秒かけてフェード
// 	autoplay: { //自動で再生する
// 		delay: 6000, // スライドが動く間隔
// 		stopOnLastSlide: false, // 最後のスライドで停止、ループモードでは無効
// 		disableOnInteraction: true, // 触った後停止
// 		reverseDirection: false // 逆方向に自動再生
// 	},
//   // pagination: { //ページネーション
//   //   el: '.swiper-pagination',
//   // }
// });


const swiper = new Swiper(".swiper.mk-mv001", {
  loop: true, // ループする
  effect: "fade", // フェード切り替え
  speed: 2000, // 2秒かけてフェード
  // allowTouchMove: false,//マウスでのスワイプを禁止
  // 自動再生
  autoplay: {
    delay: 6000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  pagination: { // 丸のページネーションを使うなら書く
    el: ".swiper-pagination",
    clickable: true //クリックを有効化する
  },
  navigation: { // 左右のページ送を使うなら書く
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    560: {
      allowTouchMove: true 
    }
  }
});

