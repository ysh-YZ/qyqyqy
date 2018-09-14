window.onload=function (){
    let team_hide=document.querySelectorAll(".technology_team_in_box_box .team_hide");
    console.log(team_hide);
    let dian=document.querySelectorAll(".technology_team_bottom_dian2");
    console.log(dian);
    let leftBtn=document.querySelector(".team_button_box .technology_team_in_box_left_button");
    let rightBtn=document.querySelector(".team_button_box .technology_team_in_box_right_button");
    console.log(leftBtn, rightBtn);
    let nav=document.querySelector(".head_photo_big_nav");
    console.log(nav);
    let inBtn=document.querySelector(".head_photo_wz_head_wz2");
    console.log(inBtn);
    let cha=document.querySelector(".head_photo_big_nav_head i");
    console.log(cha);
    let now=next=0;
    let flag=true;
    // setInterval(movel,1000);
    // 左右按钮点击

    rightBtn.onclick=function () {
        if(next==team_hide.length-1){
            next=team_hide.length-1;
            return;
            //    满足以上条件句就不执行下面的函数
        }
        if(flag==false){
            return;
        }
        flag==false;
        move();
    }
    leftBtn.onclick=function () {
        if(next==0){
            return;
        }
        if(flag==false){
            return;
        }
        flag==false;
        movel();
    }
    //圆点点击
  /*  for (let i=0;i<dian.length;i++){
        dian[i].onclick=function () {
            if(now=i){
                return;
            }else if(now<i){
                team_hide[i].style.left="1054px";
                animate(team_hide[now],{left:-1054});
                animate(team_hide[i],{left:0});
                dian[now].classList.remove("hot");
                dian[i].classList.add("hot");
            }else {
                team_hide[i].style.left="-1054px";
                animate(team_hide[now],{left:1054});
                animate(team_hide[i],{left:0});
                dian[now].classList.remove("hot");
                dian[i].classList.add("hot");
            }
            next=now=i;
        }
    }*/
    //圆点点击





    // 左右按钮点击


    // 左右函数
    function move() {
        next++;
        if (next==team_hide.length){
            next=0;
        }
        team_hide[next].style.left="1054px";
        animate(team_hide[now],{left:-1054},function () {
            flag=true;
        });
        animate(team_hide[next],{left:0});
        dian[now].classList.remove("hot");
        dian[next].classList.add("hot");
        now=next;
    }
    function movel() {
        next--;
        if(next<0){
            next=team_hide.length-1;
        }
        team_hide[next].style.left="-1054px";
        animate(team_hide[now],{left:1054},function () {
            flag=true;
        });
        animate(team_hide[next],{left:0});
        dian[now].classList.remove("hot");
        dian[next].classList.add("hot");
        now=next;
    }
    // 左右函数
/////////////////////////////////导航//////////////////////////////////////////////////
    //     导航函数
    inBtn.onclick=function () {
       animate(nav,{right:0});
    }
    cha.onclick=function () {
        animate(nav,{right:-300});
    }

















    //     导航函数
}