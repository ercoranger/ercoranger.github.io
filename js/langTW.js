function langTW() {
  //header
  $('.studio-title').text('鈋谷設計事物所');
  $('.studio-intro').text('在荷蘭就學期間，見識到設計師們積極參與材質的創新以及重新定義各種產業的可能性。在思考未來材質的同時，嘗試從製造切入，為創新材料加入一點想像力，結合賦予造型的能力並保持材質的真誠性之美。');
  $('.ee-link').text('關於');
  const menu_list = ["金", "土", "木", "火", "水"];
  var $spans = $(".menu-title");
  for (let i = 0; i < menu_list.length; i++) {
    $spans.eq(i).text(menu_list[i]);
  }

  //右側選單
  $('.zh-intro').text('簡介');
  $('.zh-obj').text('物件');
  $('.zh-pro').text('製作過程');
  $('.zh-exhi').text('展覽');
  $('.zh-shop').html('商店<img src="imgs/arrow.svg" class="arrow">');

  $('.zh-fur').text('延伸閱讀');

  //Mineralloop
  $('.zh-mp-0').text('礦物循環');
  $('.zh-mp-1').text('用礦物質修復礦物質');
  $('.zh-mp-2').text('一系列家庭用品是用來自荷蘭海牙的閒置物品與廢料制作而成的。在荷蘭的二手商店中許多玻璃或陶瓷商品沒有賣出去，然後被送去處理掩埋。因此，鈋谷設計事物所決定給玻璃和陶瓷產品以新的生命。為此，他們開發了用海牙的廢棄礦物質制成的新塗層。為一個富足的世界設計什麽？自然資源正在被耗盡。鈋谷設計事物所相信替代性的設計方式，利用已有的東西。對我們當前環境的回應是本地和循環生產。');
  $('.zh-mp-3').text('2022系列');
  $('.zh-mp-4').text('新工藝');
  $('.zh-mp-5').html('在<a href="Neo-stone-Age">Neo Stone Age</a>研究的基礎上，鈋谷設計事物所開發了一種新的工藝：用 "Neostone"一新材料去修覆破碎的玻璃器皿或陶瓷。鈋谷設計事物所使用廢棄的大理石灰顆粒、采石場的石灰石粉末或建築工地用剩的沙子開發的 "Neostone"，也被稱為地質聚合物。此新技法修復了破碎/不完美的玻璃器皿，同時也賦予了物件新的觸感。另外，此技法無需燒製');
  $('.zh-mp-6').html('<u>Neo Stone Age</u></a>- Neostone的設計研究')

}
