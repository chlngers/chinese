function putTitle(num) {
    var title = document.createElement('h2')
    title.appendChild(document.createTextNode(titles[num-1]))
    document.body.appendChild(title)

}

function playFast(num) {
    var audio = document.getElementById('fastAudio' + num);
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0
    }
}

function playSlow(num) {
    var audio = document.getElementById('slowAudio' + num);
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function playAll() {

    var originalAudio = document.getElementById('originalAudio');

    if (originalAudio.paused) {
        originalAudio.play();
    } else {
        originalAudio.pause();
    }

}


function createTable(num) {
    switch (num) {
        case 1:
            var chinesePart = chinesePart1
            var pinyinPart = pinyinPart1
            var koreanPart = koreanPart1
            break;
        case 2:
            var chinesePart = chinesePart2
            var pinyinPart = pinyinPart2
            var koreanPart = koreanPart2
            break;
        case 3:
            var chinesePart = chinesePart3
            var pinyinPart = pinyinPart3
            var koreanPart = koreanPart3
            break;
        case 4:
            var chinesePart = chinesePart4
            var pinyinPart = pinyinPart4
            var koreanPart = koreanPart4
            break;
        case 5:
            var chinesePart = chinesePart5
            var pinyinPart = pinyinPart5
            var koreanPart = koreanPart5
            break;
        case 6:
            var chinesePart = chinesePart6
            var pinyinPart = pinyinPart6
            var koreanPart = koreanPart6
            break;
        case 7:
            var chinesePart = chinesePart7
            var pinyinPart = pinyinPart7
            var koreanPart = koreanPart7
            break;
        case 8:
            var chinesePart = chinesePart8
            var pinyinPart = pinyinPart8
            var koreanPart = koreanPart8
            break;
        case 9:
            var chinesePart = chinesePart9
            var pinyinPart = pinyinPart9
            var koreanPart = koreanPart9
            break;
        case 10:
            var chinesePart = chinesePart10
            var pinyinPart = pinyinPart10
            var koreanPart = koreanPart10
            break;
    }


    var body = document.body;
        tbl = document.createElement('table');
    //tbl.style.border = '1px solid black';

    var counter = 0;
    var chineseCounter = 0;
    var pinyinCounter = 0;
    var koreanCounter = 0;
    var audioCounter = 0;

    for (var i = 0; i < chinesePart.length * 3; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 2; j++) {

            if (i == counter && j != 1) {
                var td = tr.insertCell();
                var br = document.createElement('br');
                td.setAttribute('rowspan', '3');
                var button1 = document.createElement('button');
                var icon = document.createElement("i");
                icon.setAttribute('class', 'fas fa-play')
                icon.setAttribute('style', 'font-size:12px;')
                button1.appendChild(icon);
                // button1.appendChild(document.createTextNode("play"));
                button1.setAttribute('onclick', 'playFast(' + audioCounter + ')')
                button1.setAttribute('class', "btn btn-warning fastButton")

                var audio1 = document.createElement('audio')
                audio1.id = 'fastAudio' + audioCounter
                audio1.setAttribute('src', 'Fast' + num + '/' + audioCounter + '.mp3');


                var button2 = document.createElement('button');
                button2.appendChild(document.createTextNode("느리게"));
                button2.setAttribute('onclick', 'playSlow(' + audioCounter + ')')
                button2.setAttribute('id', 'slowButton')

                var audio2 = document.createElement('audio')
                audio2.id = 'slowAudio' + audioCounter
                audio2.setAttribute('src', 'Slow' + num + '/' + audioCounter + '.mp3');



                td.appendChild(button1);
                td.appendChild(audio1);
                td.appendChild(br);
                td.appendChild(button2);
                td.appendChild(audio2);
                counter = counter + 3;
                audioCounter++;
            }

            if (j == 1) {
                var td = tr.insertCell();
                switch ((i + 3) % 3) {
                    case 0:
                        td.setAttribute("class", "chinese")
                        td.appendChild(document.createTextNode(chinesePart[chineseCounter]));
                        chineseCounter++;
                        break;
                    case 1:
                        td.setAttribute("class", "pinyin")
                        td.appendChild(document.createTextNode(pinyinPart[pinyinCounter]));
                        pinyinCounter++;
                        break;
                    case 2:
                        td.setAttribute("class", "korean")
                        td.appendChild(document.createTextNode(koreanPart[koreanCounter]));
                        koreanCounter++;
                        break;
                }
            }
            //td.style.border = '1px solid black'
        }
    }
    body.appendChild(tbl);

    document.addEventListener('play', function (e) {
        var audios = document.getElementsByTagName('audio');
        for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
                audios[i].pause();
                audios[i].currentTime = 0;
            }
        }
    }, true);
    
}


function hide(text) {
    var elements = document.getElementsByClassName(text);
    for (var i = 0; i < elements.length; i++) {
        if ((elements[i].style.display === "block") || (elements[i].style.display === "")) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'block';
        }
    }
}

