$(function () {
    let box=$(".content_content_photo_photo");
    let right_btn=$(".overturn_box1");
    let left_btn=$(".overturn_box");
    let next=now=0;
    let flag=false;
    function run(type="next") {

        if(flag){
            return
        }
        flag=true;
        if (type=="next"){
            next++;
            if (next>=box.length){
                next=0;
            }
            box.eq(next).css("left","330px").animate({left:0+"px"},500);
            box.eq(now).animate({left:-330+"px"},500,function () {
                flag=false;
            });
            now=next;
        }else if(type=="prev"){
            next--;
            if (next<0){
                next=box.length-1;
            }
            box.eq(next).css("left","-330px").animate({left:0+"px"},500);
            box.eq(now).animate({left:330+"px"},500,function () {
                flag=false;
            });
            now=next;
        }

    }
    right_btn.click(function () {
        run("next");

    })
    left_btn.click(function () {
        run("prev");
    })


});
