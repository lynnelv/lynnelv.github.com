var PIANO_KEYS = 28;
var keyboardKeys = [
	pKey0 = {
		kbKey   : 'z',
		flag    : true,
		value   : '#A1',
		sound   : 'tone-A1'
	},
	pKey1 = {
		kbKey   : 's',
		flag    : true,
		value   : '#As1',
		sound   : 'tone-As1'
	},
	pKey2 = {
		kbKey   : 'x',
		flag    : true,
		value   : '#B1',
		sound   : 'tone-B1'
	},
	pKey3 = {
		kbKey   : 'c',
		flag    : true,
		value   : '#C2',
		sound   : 'tone-C2'
	},
	pKey4 = {
		kbKey   : 'f',
		flag    : true,
		value   : '#Cs2',
		sound   : 'tone-Cs2'
	},
	pKey5 = {
		kbKey   : 'v',
		flag    : true,
		value   : '#D2',
		sound   : 'tone-D2'
	},
	pKey6 = {
		kbKey   : 'g',
		flag    : true,
		value   : '#Ds2',
		sound   : 'tone-Ds2'
	},
	pKey7 = {
		kbKey   : 'b',
		flag    : true,
		value   : '#E2',
		sound   : 'tone-E2'
	},
	pKey8 = {
		kbKey   : 'n',
		flag    : true,
		value   : '#F2',
		sound   : 'tone-F2'
	},
	pKey9 = {
		kbKey   : 'j',
		flag    : true,
		value   : '#Fs2',
		sound   : 'tone-Fs2'
	},
	pKey10 = {
		kbKey   : 'm',
		flag    : true,
		value   : '#G2',
		sound   : 'tone-G2'
	},
	pKey11 = {
		kbKey   : 'k 1',
		flag    : true,
		value   : '#Gs2',
		sound   : 'tone-Gs2'
	},
	pKey12 = {
		kbKey   : ', q',
		flag    : true,
		value   : '#A2',
		sound   : 'tone-A2'
	},
	pKey13 = {
		kbKey   : 'l 2',
		flag    : true,
		value   : '#As2',
		sound   : 'tone-As2'
	},
	pKey14 = {
		kbKey   : '. w',
		flag    : true,
		value   : '#B2',
		sound   : 'tone-B2'
	},
	pKey15 = {
		kbKey   : 'e',
		flag    : true,
		value   : '#C3',
		sound   : 'tone-C3'
	},
	pKey16 = {
		kbKey   : '4',
		flag    : true,
		value   : '#Cs3',
		sound   : 'tone-Cs3'
	},
	pKey17 = {
		kbKey   : 'r',
		flag    : true,
		value   : '#D3',
		sound   : 'tone-D3'
	},
	pKey18 = {
		kbKey   : '5',
		flag    : true,
		value   : '#Ds3',
		sound   : 'tone-Ds3'
	},
	pKey19 = {
		kbKey   : 't',
		flag    : true,
		value   : '#E3',
		sound   : 'tone-E3'
	},
	pKey20 = {
		kbKey   : 'y',
		flag    : true,
		value   : '#F3',
		sound   : 'tone-F3'
	},
	pKey21 = {
		kbKey   : '7',
		flag    : true,
		value   : '#Fs3',
		sound   : 'tone-Fs3'
	},
	pKey22 = {
		kbKey   : 'u',
		flag    : true,
		value   : '#G3',
		sound   : 'tone-G3'
	},
	pKey23 = {
		kbKey   : '8',
		flag    : true,
		value   : '#Gs3',
		sound   : 'tone-Gs3'
	},
	pKey24 = {
		kbKey   : 'i',
		flag    : true,
		value   : '#A3',
		sound   : 'tone-A3'
	},
	pKey25 = {
		kbKey   : '9',
		flag    : true,
		value   : '#As3',
		sound   : 'tone-As3'
	},
	pKey26 = {
		kbKey   : 'o',
		flag    : true,
		value   : '#B3',
		sound   : 'tone-B3'
	},
	pKey27 = {
		kbKey   : 'p',
		flag    : true,
		value   : '#C4',
		sound   : 'tone-C4'
	}
];
//var keyboardKeys = {
	//'90': {
		//flag    : true,
		//value   : '#A1',
		//sound   : 'tone-A1'
	//},
	//'83': {
		//flag    : true,
		//value   : '#As1',
		//sound   : 'tone-As1'
	//},
	//'88': {
		//flag    : true,
		//value   : '#B1',
		//sound   : 'tone-B1'
	//},
	//'67': {
		//flag    : true,
		//value   : '#C2',
		//sound   : 'tone-C2'
	//},
	//'70': {
		//flag    : true,
		//value   : '#Cs2',
		//sound   : 'tone-Cs2'
	//},
	//'86': {
		//flag    : true,
		//value   : '#D2',
		//sound   : 'tone-D2'
	//},
	//'71': {
		//flag    : true,
		//value   : '#Ds2',
		//sound   : 'tone-Ds2'
	//},
	//'66': {
		//flag    : true,
		//value   : '#E2',
		//sound   : 'tone-E2'
	//},
	//'78': {
		//flag    : true,
		//value   : '#F2',
		//sound   : 'tone-F2'
	//},
	//'74': {
		//flag    : true,
		//value   : '#Fs2',
		//sound   : 'tone-Fs2'
	//},
	//'77': {
		//flag    : true,
		//value   : '#G2',
		//sound   : 'tone-G2'
	//},
	//'75': {
		//flag    : true,
		//value   : '#Gs2',
		//sound   : 'tone-Gs2'
	//},
	//'188': {
		//flag    : true,
		//value   : '#A2',
		//sound   : 'tone-A2'
	//},
	//'76': {
		//flag    : true,
		//value   : '#As2',
		//sound   : 'tone-As2'
	//},
	//'190': {
		//flag    : true,
		//value   : '#B2',
		//sound   : 'tone-B2'
	//},
	//'69': {
		//flag    : true,
		//value   : '#C3',
		//sound   : 'tone-C3'
	//},
	//'52': {
		//flag    : true,
		//value   : '#Cs3',
		//sound   : 'tone-Cs3'
	//},
	//'82': {
		//flag    : true,
		//value   : '#D3',
		//sound   : 'tone-D3'
	//},
	//'53': {
		//flag    : true,
		//value   : '#Ds3',
		//sound   : 'tone-Ds3'
	//},
	//'84': {
		//flag    : true,
		//value   : '#E3',
		//sound   : 'tone-E3'
	//},
	//'89': {
		//flag    : true,
		//value   : '#F3',
		//sound   : 'tone-F3'
	//},
	//'55': {
		//flag    : true,
		//value   : '#Fs3',
		//sound   : 'tone-Fs3'
	//},
	//'85': {
		//flag    : true,
		//value   : '#G3',
		//sound   : 'tone-G3'
	//},
	//'56': {
		//flag    : true,
		//value   : '#Gs3',
		//sound   : 'tone-Gs3'
	//},
	//'73': {
		//flag    : true,
		//value   : '#A3',
		//sound   : 'tone-A3'
	//},
	//'57': {
		//flag    : true,
		//value   : '#As3',
		//sound   : 'tone-As3'
	//},
	//'79': {
		//flag    : true,
		//value   : '#B3',
		//sound   : 'tone-B3'
	//},
	//'80': {
		//flag    : true,
		//value   : '#C4',
		//sound   : 'tone-C4'
	//}
//};

$(document).ready(function() {
	
    $(".key").bind('mousedown', function (e) {
        var currentKey = e.currentTarget;
        play_multi_sound('tone-' + currentKey.id);
        $(currentKey).addClass('pressed');
    }).bind('mouseup', function () {
        $('.key').removeClass('pressed');
    })
});

//$(document).bind('keydown', function(e) {

	//console.log(keyboardKeys[e.which]);
	//if (keyboardKeys[e.which] && keyboardKeys[e.which].flag) {
		//keyboardKeys[e.which].flag = false;
		//$(keyboardKeys[e.which].value).addClass('pressed');
		//play_multi_sound(keyboardKeys[e.which].sound);
	//}
	//return false;
//}).bind('keyup', function(e) {
	//if (keyboardKeys[e.which]) {
		//keyboardKeys[e.which].flag = true;
		//$(keyboardKeys[e.which].value).removeClass('pressed');
	//}
	//return false;
//});

var i = 0;

for (; i < PIANO_KEYS; ) {

	$(document).bind('keydown', keyboardKeys[i], function (evt){

		//check the flag false - key is down, true - key is up
		if(evt.data.flag) {
			evt.data.flag = false;
			$(evt.data.value).addClass('pressed');
			play_multi_sound(evt.data.sound);
		}

		return false;
	}).bind('keyup', keyboardKeys[i], function (evt){

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

            try
            {		
                audiochannels[i]['finished'] = now.getTime() + document.getElementById(s).duration*1000;
                audiochannels[i]['channel'] = document.getElementById(s);
                audiochannels[i]['channel'].currentTime = 0;
                audiochannels[i]['channel'].volume=1;
                audiochannels[i]['channel'].play();
                audiochannels[i]['keyvalue'] = s;
            }
            catch(v)
            {	
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

            }
            catch(v)
            {	
                console.log(v.message); 
            }

            break;
        }
        i++;
    }
}
