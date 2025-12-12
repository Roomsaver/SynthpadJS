var shiftPressed = false;
var midiOrAudio = false;
var resetAudio = true;
var listeningForKey = false;
let keyPress = null;

var keyboardMap = [49, 50, 51, 52, 81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86];

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function handleFiles(event, audioElement) {
    var files = event.target.files;
    $(audioElement).attr("src", URL.createObjectURL(files[0]));
    $(audioElement)[0].load();
}

function addAudioPerButton()
{
    $('#button-grid .button-row button').each(function()
    {
        let randID = guidGenerator();
        $(this).attr('data-unique', `${randID}`);
        $('#audio').append($("<audio>").attr('class', `${randID}`).attr('controls', 'true'));
        $('#upload').append($("<input>").attr('type', 'file').attr('data-for', `${randID}`).addClass('upload').addClass(`${randID}`));
        $(`#upload input.upload`).on('change', function(e)
        {
            handleFiles(e, $(`#audio .${$(this).attr('data-for')}`));
        });
    });
}

function playAudio(audioEl)
{
    if(audioEl.attr('src') != null)
    {
        audioEl[0].play();
    }
}

function pauseAudio(audioEl)
{
    if(!shiftPressed)
    {
        if(audioEl.attr('src') != null)
        {
            audioEl[0].pause();
            if(resetAudio)
            {
                audioEl[0].currentTime = 0;
            }
        }
    }
}

$(document).ready(()=>
{
    // Checkbox settings
    $('#midi-audio-switcher').on('change', function(e){midiOrAudio = e.target.checked});
    $('#reset-audio').on('change', function(e){resetAudio = e.target.checked});
    

    // Add audio and uploads for each button
    addAudioPerButton();

    // Handle pressing shift so we can have unique functions on clicking other elements with shift pressed
    $(document).on('keydown', function(e)
    {
        if(listeningForKey)
        {
            keyPress = e.keyCode;
            listeningForKey = false;
        }
        else
        {
            if(e.keyCode == 16)
            {
                shiftPressed = true;
            }
            
            // 1234
            if(e.keyCode == keyboardMap[0])
            {
                let uniqueID = $($('#button-grid .button-row button')[0]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[1])
            {
                let uniqueID = $($('#button-grid .button-row button')[1]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[2])
            {
                let uniqueID = $($('#button-grid .button-row button')[2]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[3])
            {
                let uniqueID = $($('#button-grid .button-row button')[3]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            // qwer
            if(e.keyCode == keyboardMap[4])
            {
                let uniqueID = $($('#button-grid .button-row button')[4]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[5])
            {
                let uniqueID = $($('#button-grid .button-row button')[5]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[6])
            {
                let uniqueID = $($('#button-grid .button-row button')[6]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[7])
            {
                let uniqueID = $($('#button-grid .button-row button')[7]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            // asdf
            if(e.keyCode == keyboardMap[8])
            {
                let uniqueID = $($('#button-grid .button-row button')[8]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[9])
            {
                let uniqueID = $($('#button-grid .button-row button')[9]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[10])
            {
                let uniqueID = $($('#button-grid .button-row button')[10]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[11])
            {
                let uniqueID = $($('#button-grid .button-row button')[11]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            // zxcv
            if(e.keyCode == keyboardMap[12])
            {
                let uniqueID = $($('#button-grid .button-row button')[12]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[13])
            {
                let uniqueID = $($('#button-grid .button-row button')[13]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[14])
            {
                let uniqueID = $($('#button-grid .button-row button')[14]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
            if(e.keyCode == keyboardMap[15])
            {
                let uniqueID = $($('#button-grid .button-row button')[15]).attr('data-unique');
                let audioEl = $(`audio.${uniqueID}`);
                playAudio(audioEl);
            }
        }
    });


    $(document).on('keyup', function(e)
    {
        if(e.keyCode == 16)
        {
            shiftPressed = false;
        }

        // 1234
        if(e.keyCode == keyboardMap[0])
        {
            let uniqueID = $($('#button-grid .button-row button')[0]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[1])
        {
            let uniqueID = $($('#button-grid .button-row button')[1]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[2])
        {
            let uniqueID = $($('#button-grid .button-row button')[2]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[3])
        {
            let uniqueID = $($('#button-grid .button-row button')[3]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        // qwer
        if(e.keyCode == keyboardMap[4])
        {
            let uniqueID = $($('#button-grid .button-row button')[4]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[5])
        {
            let uniqueID = $($('#button-grid .button-row button')[5]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[6])
        {
            let uniqueID = $($('#button-grid .button-row button')[6]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[7])
        {
            let uniqueID = $($('#button-grid .button-row button')[7]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        // asdf
        if(e.keyCode == keyboardMap[8])
        {
            let uniqueID = $($('#button-grid .button-row button')[8]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[9])
        {
            let uniqueID = $($('#button-grid .button-row button')[9]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[10])
        {
            let uniqueID = $($('#button-grid .button-row button')[10]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[11])
        {
            let uniqueID = $($('#button-grid .button-row button')[11]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        // zxcv
        if(e.keyCode == keyboardMap[12])
        {
            let uniqueID = $($('#button-grid .button-row button')[12]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[13])
        {
            let uniqueID = $($('#button-grid .button-row button')[13]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[14])
        {
            let uniqueID = $($('#button-grid .button-row button')[14]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
        if(e.keyCode == keyboardMap[15])
        {
            let uniqueID = $($('#button-grid .button-row button')[15]).attr('data-unique');
            let audioEl = $(`audio.${uniqueID}`);
            pauseAudio(audioEl);
        }
    });

    $('#controller').on('click', function(e)
    {
        let target = $(e.target);
        let uniqueClass = `${target.attr('data-unique')}`;
        if(!target.hasClass('player-button') && !target.hasClass('picker-menu-button'))
        {
            $('#picker-menu').addClass('hidden');
        }
        if(uniqueClass != 'undefined')
        {
            $('#picker-menu').attr('data-unique', uniqueClass);
        }
    });

    $('#upload-button').on('click', function(e)
    {
        let uniqueClass = `${$('#picker-menu').attr('data-unique')}`;
        $(`#upload input.upload.${uniqueClass}`).click();
    })

    $('#map-key').on('click', function(e)
    {
        // display "Waiting for key text"
        $('#display-text').text('Waiting for key');
        $('#display-text').removeClass('hidden');
        // Set listening variable
        listeningForKey = true;
        let tempInterval = setInterval(()=>
        {
            if(keyPress != null)
            {
                let index = $(`button[data-unique="${$('#picker-menu').attr('data-unique')}"]`).index();
                keyboardMap[index] = keyPress;
                keyPress = null;
                $('#display-text').addClass('hidden');
                // listeningForKey = false;
                clearInterval(tempInterval);
            }
        }, 15);
    });

    // Each button in the grid being clicked
    $("#button-grid .button-row button").on('click', function(e)
    {
        let target = $(e.target);
        let uniqueClass = `${target.attr('data-unique')}`;

        if(shiftPressed)
        {
            // get x and y to position menu
            let x = e.clientX;
            let y = e.clientY;
            $('#picker-menu').css('left', `${x}px`).css('top', `${y}px`);
            $('#picker-menu').removeClass('hidden');
            
            // $(`#upload input.upload.${uniqueClass}`).click();
            shiftPressed = false;
        }
    });

    // Each button in the grid mousedown (for playing audio)
    $("#button-grid .button-row button").on('mousedown', function(e)
    {
        let target = $(e.target);
        let uniqueClass = `${target.attr('data-unique')}`;
        if(!shiftPressed)
        {
            let audioEl = $(`audio.${uniqueClass}`);
            playAudio(audioEl);
        }
    });

    // Each button in the grid mouseup (for stopping audio)
    $("#button-grid .button-row button").on('mouseup', function(e)
    {
        let target = $(e.target);
        let uniqueClass = `${target.attr('data-unique')}`;
        if(!shiftPressed)
        {
            let audioEl = $(`audio.${uniqueClass}`);
            pauseAudio(audioEl);
        }
    });
});