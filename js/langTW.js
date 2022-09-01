function langTW() {
  //header
  $('.studio-title').text('鈋谷事物所');
  $('.studio-intro').text('在荷蘭就學期間，見識到設計師們積極參與材質的創新以及重新定義各種產業的可能性。在思考未來材質的同時，嘗試從製造切入，為創新材料加入一點想像力，結合賦予造型的能力並保持材質的真誠性之美。');
  $('.ee-link').text('關於');
  const menu_list = ["金", "地", "木", "火", "水"];
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

  //Mineralloop
  $('.zh-mp-0').text('礦物循環');
  $('.zh-mp-1').text('用礦物質修復礦物質');
  $('.zh-mp-2').text('一系列家庭用品是用來自荷蘭海牙的閒置物品與工業廢料制作而成的。在荷蘭的二手商店的許多產品沒有賣出去，然後被送去掩埋。因此，ercoffice決定給玻璃和陶瓷產品以新的生命。為此，他們開發了用海牙的廢棄礦物質制成的新塗層。為一個富足的世界設計什麽？自然資源正在被耗盡。ercoffice相信替代性的設計方式，利用已有的東西。對我們當前環境的回應是本地和循環生產。');
  $('.zh-mp-3').text('2022系列');
  $('.zh-mp-4').text('新工藝');
  $('.zh-mp-5').text('');


}
