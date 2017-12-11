<template>
<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox">
                <div class="service-icon">
                    <i class="fa fa-laptop"></i>
                </div>
                <div class="service-content">
                    <h3>
                        <a href="#">本系簡介</a>
                    </h3>
                    <p>
                        本系成立於民國82年，至今已邁入第25個年頭，為淡江大學外國語文學院最年輕的科系，也是國內繼政治大學及中國文化大學之後成立的第三個以俄語專業為主的科系。歷年來主持系務者有：戴萬欽教授、楊棨教授、劉克甫教授 (М.В. Крюков )、彼薩列夫教授(А.А.Писарев)、馬良文教授 (В.В.Малявин)、張慶國副教授、蘇淑燕副教授，現任系主任為劉皇杏副教授。每年招收新生一班，計62名，截至105學年度第2學期為止，本系共有254名在學學生。
                    </p>
                    <p>
                        本系早期師資以俄羅斯籍教師為主，從90學年度起，因應教學需要，開始招聘本國籍教師，至106學度第1學期為止，本系聘有8位專任教師：3位副教授及5位助理教授，所有教師皆擁有博士學位，專長為俄國文學、語言學、文化、翻譯與俄語教學。8位專任教師中有5名為本國籍，3名為俄羅斯籍 。除專任教師外，另聘有兼任教師9名 ，其中5名為俄羅斯籍，3名為本國籍。99學年度起聘有1名專任助教，支援主科和實習課程部分教學工作。
                    </p>
                    <p>
                        本系成立之初與俄羅斯研究所相互支援，同時為了配合該所研究方向，開設許多文化相關課程，希望培養俄語及俄羅斯區域研究之人才。為了配合本校、本院之中、長程發展計畫，及因應社會變遷和學生實際需求，從96學年度開始，系務與所務各自獨立，惟師資仍然互相支援。本系為尋找自己的發展與定位，從94學年度開始，歷經多次課程改革之後，逐漸發展和增加實用性課程，例如商用俄語課程、俄文翻譯和經貿俄語口譯等課程，希望可以幫助學生順利進入就業市場 ，但仍保留文化和文學課程，希望透過文化和文學相關課程，發展學生的國際觀，和熟悉俄國文化及政治現狀。
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>


</script>

<style>
.serviceBox{
    text-align: center;
    padding: 0px 16px 30px;
    border: 100px solid transparent;
    transition:all 0.3s ease 0s;
    position: relative;
    z-index: 0;
    top:0vh;
    width: 100vh;
    left:0vh;
}
.serviceBox:after,
.serviceBox:before{
    content: "";
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    transition:all 0.5s ease 0s;
}
.serviceBox:after{
    border-bottom: 1px solid #d7d7d7;
    border-top: 1px solid #d7d7d7;
    transform: scaleX(0);
    transform-origin: 0 100% 0;
    z-index: -1;
}
.serviceBox:before{
    border-left: 1px solid #d7d7d7;
    border-right: 1px solid #d7d7d7;
    transform: scaleY(0);
    transform-origin: 100% 0 0;
    z-index: -1;
}
.serviceBox:hover:after{
    transform: scaleX(1);
}
.serviceBox:hover:before{
    transform: scaleY(1);
}
.serviceBox .service-icon i{
    font-size: 32px;
    line-height: 32px;
    color:#636363;
    transition: all 0.3s ease 0s;
}
.serviceBox .service-content h3{
    margin-bottom: 25px;
}
.serviceBox .service-content h3 a{
    font-size: 25px;
    letter-spacing: 4px;
    line-height: 22px;
    color:#181818;
    text-transform: uppercase;
    text-decoration: none;
}
.serviceBox .service-content h3 a:hover{
    color:#636363;
}
.serviceBox .service-content p{
    color:#636363;
    line-height: 26px;
}
.serviceBox .read{
    margin-top: 20px;
}
.serviceBox .read a{
    border:1px solid #636363;
    border-radius: 50%;
    color:#636363;
    display: inline-block;
    height: 18px;
    width: 18px;
    line-height: 16px;
    text-align: center;
    text-decoration: none;
    transition:all 0.3s ease 0s;
    opacity: 0;
}
.serviceBox .read a:hover,
.serviceBox:hover .service-icon i{
    color:#181818;
    border-color: #181818;
}
.serviceBox:hover .read a{
    opacity: 1;
    transition: all 0.3s ease 0s;
}
@media screen and (max-width: 990px){
    .serviceBox{
        margin-bottom:10px;
    }
}
</style>