var PIANO_KEYS = 28;

$(document).ready(function() {
    
    $(".key").bind('mousedown', function () {
        var currentKey = $(this);
        currentKey.addClass('pressed');
        play_multi_sound('tone-' + currentKey.attr('id'));
    })

    $(".key").bind('mouseup', function () {
        $('.key').removeClass('pressed');
    })
})


//ARRAY WITH ALL THE KEYS
//the array content starts from element 1 so eleemnt 0 i zero, empty, nada, 0 gree
var keyboardKeys = [];
var i = 0;

for (; i < PIANO_KEYS; ) {
    keyboardKeys.push(eval('pKey' + (i++)));
}

i = 0;
//LOOP trought all the  keyboard-piano keys
for (; i < PIANO_KEYS; ) {

    //BIND ON KEY DOWN
    $(document).bind('keydown', keyboardKeys[i], function (evt){

        //console.log("obajdam se ot funkciqta vutre " + evt.data.value +  evt.data.flag + evt.data.sound);

        //check the flag false - key is down, true - key is up
        if(evt.data.flag) {
            evt.data.flag = false;
            $(evt.data.value).addClass('pressed');
            play_multi_sound(evt.data.sound);
        }

        return false;
    });


    //$(document).bind('keydown', 'r',function (evt){ alert('adasd'); });

    //BIND ON KEY UP
    $(document).bind('keyup', keyboardKeys[i], function (evt){

        //console.log("obajdame se ot funkciqta vutre " + evt.data.value +  evt.data.flag + evt.data.sound);

        //check the flag false - key is down, true - key is up
        evt.data.flag = true;
        $(evt.data.value).removeClass('pressed');
        //stop_multi_sound(evt.data.sound); //don't so cool as shoud

        return false; 

    });
    
    i++;
}

var channel_max = 32,										// number of channels
    audiochannels = [];

i = 0;
for (; i < channel_max; ) {									// prepare the channels
    audiochannels[i] = [];
    audiochannels[i]['channel'] = new Audio();						// create a new audio object
    audiochannels[i]['finished'] = -1;							// expected end time for this channel
    audiochannels[i]['keyvalue'] = '';
    i ++
}


//PLAY SOUND
function play_multi_sound(s) {

    i = 0;
    for (; i < channel_max; ) {
        var now = new Date();
        if (audiochannels[i]['finished'] < now.getTime()) {			// is this channel finished?

            //console.log(audiochannels[a]['keyvalue']);

            try
            {		
                audiochannels[i]['finished'] = now.getTime() + document.getElementById(s).duration*1000;
                audiochannels[i]['channel'] = document.getElementById(s);
                audiochannels[i]['channel'].currentTime = 0;
                audiochannels[i]['channel'].volume=1;
                audiochannels[i]['channel'].play();
                audiochannels[i]['keyvalue'] = s;

                //console.log("the key is pressed - play");

                //console.log(audiochannels[a]['keyvalue']);

            }
            catch(v)
            {	
                //show the error message (alert or log) or hide it when public
                //alert(v.message);
                //	console.log(v.message); 
            }

            break;
        }
        i++;
    }
}


function stop_multi_sound(s, sender) {

    i = 0;
    for (; i < channel_max; ) {

        //console.log('chanel keyvalue = '+audiochannels[a]['keyvalue']);

        if (audiochannels[i]['keyvalue'] == s) {			// is this channel finished?

            try
            {
                audiochannels[i]['channel'] = document.getElementById(s);

                //audiochannels[a]['channel'].currentTime =  audiochannels[a]['channel'].duration;
                //audiochannels[a]['keyvalue'] = 'nema';

                if(sender != undefined && sender == 'mouse') {
                    setTimeout ("audiochannels[i]['channel'].pause()", 2500 );
                    setTimeout ("audiochannels[i]['channel'].currentTime = 0", 2500 );
                }else {
                    //audiochannels[a]['channel'].volume=0;
                    setTimeout ("audiochannels[i]['channel'].pause()", 2500 );
                    setTimeout ("audiochannels[i]['channel'].currentTime = 0", 2500 );
                }

                //console.log("the key is UP - stop sound " + s + ' = ' + audiochannels[a]['channel'].duration + '== ' + audiochannels[a]['channel'].currentTime);
                //console.log(audiochannels[a]['keyvalue']);
            }
            catch(v)
            {	
                //show the error message (alert or log) or hide it when public
                //alert(v.message);
                console.log(v.message); 
            }

            break;
        }
        i++;
    }
}
