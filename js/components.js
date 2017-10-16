var app = new Vue({
    el: '.myApp',
    data: {

        navbar: '   <div class="navbar container"><ul class="nav"><li class="nav-item"><a id="nav-1" class="nav-link" href="../index.html">Home | 最新消息</a></li><li class="nav-item"><a id="nav-2" class="nav-link" href="/products">Products | 產品</a></li><li class="nav-item"><a id="nav-3" class="nav-link" href="/shopInfo">Shop | 銷售通路</a></li><li class="nav-item"><a id="nav-4" class="nav-link" href="/about">About | 關於百鐵</a></li></ul></div>',
        //導覽列

        footer: '<div class="footer container"><div class="row"><div class="col-md-3"><h3>Contact | 聯絡方式</h3><p>hevodeco@gmail.com</p><p>+886 912345678</p><p>GMT +8 10:00~18:00</p></div><div class="col-md-3"><h3>Social | 社群</h3><p><a href="https://www.facebook.com/hevodeco">Facebook</a></p><p><a>Pinterest</a></p><p><a href="https://www.instagram.com/hevo_deco/">Instagram</a></p></div><div class="col-md-3"><h3>Downloads | 型錄</h3><p><a>Brochure AW17</a></p><p><a>Media Kit</a></p><p><a>Customization Guide</a></p></div><div class="col-md-3"><h3>Subscribe | 訂閱</h3><p>隨時掌握新品訊息</p><div class="form-group"><!--label for="exampleInputEmail1">Email address</label--><input type="email" class="form-control" id="exampleInputEmail1" placeholder="請輸入你的e-mail"><input type="submit" value="確認"> </div></div></div></div>',
        //底層資訊
        
        productTypes:['Furniture | 家具','Lighting | 燈具','On the desk | 辦公用具','Home Acessory | 家飾配件','Odds and goods | 小物','Art Pieces | 定製品'],
        //產品頁選單
    }
})