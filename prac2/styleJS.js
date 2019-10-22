$(document).ready(function(){
    var i=1;
    var e=1;
    var r=1;
    var o=1;
    var a=1;
    var f=1;
    $(".primero").click(function(){
        $(".lista").empty();
        for(i=1;i<=5;i++){
            for(j=1;j<=8;j++){
                if(i==1){
                    $(".lista").append('<div class="cuadro color"'+i+'></div>');
                }
                else{
                    $(".lista").append('<div class="cuadro"></div>');
                }
            }
            $(".lista").append('<br>');
        }
    })
    
  
    $(".segundo").click(function(){
        $(".lista").empty();
        for(i=1;i<=5;i++){
            for(j=1;j<=8;j++){
                if(i==1 || i==5 || j==1 || j==8){
                    $(".lista").append('<div class="cuadro color"'+i+'></div>');
                }
                else{
                    $(".lista").append('<div class="cuadro"></div>');
                }
            }
            $(".lista").append('<br>');
        }

    })
     
    $(".tercero").click(function(){
        $(".lista").empty();        
        var des=5;
        for(i=1;i<=5;i++){
            for(j=1;j<=5;j++){
                if(i==1 || j==1 || j==des){
                    $(".lista").append('<div class="cuadro color"'+i+'></div>');
                }
                else{
                    $(".lista").append('<div class="cuadro"></div>');
                }
            }
            des=des-1;
            $(".lista").append('<br>');
        }

    })
     
    $(".cuarto").click(function(){
        $(".lista").empty();        
        for(i=1;i<=5;i++){
            for(j=1;j<=5;j++){
                if((j==3 && i==2)||(j==2 && i==3)||(j==3 && i==4)||(j==4 && i==3)){
                    $(".lista").append('<div class="cuadro"></div>');
                }
                else{
                    $(".lista").append('<div class="cuadro color"'+i+'></div>');
                }
            }
            $(".lista").append('<br>');
        }
        
    })
     
    $(".quinto").click(function(){
        $(".lista").empty();        
    for(i=1;i<=5;i++){
        for(j=1;j<=5;j++){
            if(j==3 || i==3){
                $(".lista").append('<div class="cuadro color"'+i+'></div>');
            }
            else{
                $(".lista").append('<div class="cuadro"></div>');
            }
        }
        $(".lista").append('<br>');
    }
    })
    $(".sexto").click(function(){
        $(".lista").empty();        

    var izquierda=5;
    var derecha=1;
    for(i=1;i<=5;i++){
        for(j=1;j<=5;j++){
            if(j==izquierda || j==derecha){
                $(".lista").append('<div class="cuadro color"'+i+'></div>');
            }
            else{
                $(".lista").append('<div class="cuadro"></div>');
            }
        }
        derecha=derecha+1;
        izquierda=izquierda-1;
        $(".lista").append('<br>');
    }
    })                   
  });