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
    var hidep = 3;

    $("a#next").click(function(event) {
        event.preventDefault();
        var show = hide-3;
        console.log(hide+' '+show);
        if ($("#post"+hide).is(':hidden')) {
            $("#post"+show).hide("slow");
            $("#post"+hide).show(2000);
            hidep=hide-hidep;
            hide+=1;
            console.log(hidep);
        }else{
            hide-=3;
        }
    });

    $("a#previous").click(function(event) {
        event.preventDefault();
        var show = hidep-3;
        console.log(hidep+' '+show);
        if ($("#post"+hidep).is(':hidden')) {
            $("#post"+show).hide("slow");
            $("#post"+hidep).show(2000);
            hidep+=1;
        }
    });
});

