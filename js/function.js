function rotatingText(val){
    const valSpan = $('span.content-rotating-text').text();
    for (let index = 0; index < val.length; index++) {
        const element = val[index];
        if(element == valSpan){
            cont = index+1;
            console.log(cont);
            if (val[cont]) {
                $('span.content-rotating-text').text(val[cont]);
                break;
            }else{
                $('span.content-rotating-text').text(val[0]);
                break;
            }
        }
    }
}
$(document).ready(function() {

    const val = $('span.content-rotating-text').text();
    var arrayVal = val.split(',');
    $('span.content-rotating-text').text(arrayVal[0]);
    setInterval(()=>{
        rotatingText(arrayVal)
    }, 3000);
    
    var hide = 4;
    var show = 1;

    var hidep,showp;

    $("a#next").click(function(event) {
        event.preventDefault();
        if ($("#post"+hide).is(':hidden') && hide<=7) {
            $("#post"+show).hide("slow");
            $("#post"+hide).show(2000);
            hidep=hide;
            showp=show;
            if (hide<=6) {
                hide+=1;
                show+=1;
                console.log(hide+' '+show);
            }            
        }
    });

    $("a#previous").click(function(event) {
        event.preventDefault();
        if ($("#post"+showp).is(':hidden') && hidep<=7) {
            $("#post"+hidep).hide("slow");
            $("#post"+showp).show(2000);
            hide=hidep;
            show=showp;
            hidep-=1;
            showp-=1;
            console.log(hidep+' '+showp);
        }
    });
});

