let current_Light = -1;
let current_direction = 'RIGHT';
let light_count = 7;

const updateLightPanel=()=>{
    $(".div1").css("background","white");
    if(current_direction==='RIGHT'){
        current_Light++;
        $(".div1").eq(current_Light).css("background","red")
        if(current_Light-1>=0) {
            $(".div1").eq(current_Light - 1).css("background", "#ffb3b3")
        }
        if(current_Light===light_count-1){
            current_direction='LEFT'
        }
    }else{
        current_Light--;
        $(".div1").eq(current_Light).css("background","red")
        $(".div1").eq(current_Light+1).css("background","#ffb3b3")
        if(current_Light===0){
            current_direction='RIGHT'
        }
    }
}

let intervalID = null;
$('#btn2').on("click",()=>{
    if (intervalID===null) {
        intervalID = setInterval(updateLightPanel, 100)
        $('#audio')[0].play();
    }
})

$('#btn1').on("click",()=>{
    clearInterval(intervalID)
    intervalID=null;
    $('#audio')[0].pause();
})