let {RunHandel} = Handel;

function runoneClicked(){
   RunHandel(`
   start
    chunk example 
        play E3, C3, G3 for 2b
    endchunk
    run example with sound piano, loop for 5 
finish
   `)
}

function runtwoClicked(){
   RunHandel(`
   start
   play E4 for 1b
   finish

   `)
}

function runthreeClicked(){
   RunHandel(`
   start
   play C#3 for 1b
   play E3, G3, A4 for 1b
   finish
   `)
}

function runfourClicked(){
   RunHandel(`
   start
    rest for 1b
    play G5 for 2b
   finish
   `)
}

function runfiveClicked(){
   RunHandel(`
    start
        save mynote = E2
        save myplayablenote = mynote for 2b
        save myrest = for 2b

        play myplayablenote
        rest myrest
        play myplayablenote
        rest myrest
    finish
   `)
}

function runsixClicked(){
   RunHandel(`
   start
    chunk backbeat using myplayable
        play myplayable 
    endchunk

    chunk mykeys 
        play E3, G3, A3 for 1b
        play G3, A2, C3 for 1b
        play F3, A3, C3 for 1b
        play D3, F2, A3 for 1b
    endchunk

    run mykeys with sound piano, loop for 2

    save myplayable = A1 for 1b

    run backbeat using myplayable with sound kick, loop for 8
finish
   `)

}

function runsevenClicked(){
    RunHandel(
    `
    start
    chunk noargs
        play C3 for 1b
    endchunk

    chunk withtwoargs using argone, argtwo
        play argone
        play argtwo
    endchunk

    run noargs
    save somevar = Cb4 for 1b
    run withtwoargs using E3 for 1b,  somevar
    finish
    `
    )

}

function runeightClicked(){
    RunHandel(`
    start
    chunk withargs using somechord 
        play somechord 
    endchunk

    run withargs using E3, G3, F3 for 1b with bpm 100, loop for 8, sound piano 
    finish
    `)
}

function runnineClicked(){
    RunHandel(`
    start
    save mynotelist = B3 

    update mynotelist lshift 1
    play mynotelist for 1b

    update mynotelist rshift 2
    play mynotelist for 1b
    finish
    `)
}

function runtenClicked(){
    RunHandel(`
    start
    save mynotelist = B3 

    update mynotelist lshift 1
    play mynotelist for 1b

    update mynotelist rshift 2
    play mynotelist for 1b
finish
    `)
}
function runelevenClicked(){
    RunHandel(`
    start
    save duration = for 1b
    save playable = E3, G3 for 2b

    update duration rshift 1 
    update playable lshift 2 

    play playable
    rest duration
    play playable
    finish
    `)
}
function runtwelveClicked(){
    RunHandel(`
    start
    block 
        play C3, E3, G3 for 1b 
        play D3, F3, A3 for 1b 
    endblock loop for 2 

    save note = C2
    block 
        play note for 1b 
        update note rshift 1
    endblock loop while note lessthan C3
    finish
    `)
}
function runthirteenClicked(){
    RunHandel(`
    start
    if E4 greaterthan Cb3 then
        play E4 for 1b 
    else
        play Cb3 for 1b
    endif

    save mydigit = -5
    if mydigit equalto 5 then
        play C2 for 5b
    endif
finish
    `)
}


function main(){
    let runone = document.body.querySelector("#runone");
    runone.addEventListener('click', runoneClicked)
    let runtwo = document.body.querySelector("#runtwo");
    runtwo.addEventListener('click', runtwoClicked)
    let runthree = document.body.querySelector("#runthree");
    runthree.addEventListener('click', runthreeClicked)
    let runfour = document.body.querySelector("#runfour");
    runfour.addEventListener('click', runfourClicked);

    let runfive = document.body.querySelector("#runfive");
    runfive.addEventListener('click', runfiveClicked);

    let runsix = document.body.querySelector("#runsix");
    runsix.addEventListener('click', runsixClicked);

    let runseven = document.body.querySelector("#runseven");
    runseven.addEventListener('click', runsevenClicked);

    let runeight = document.body.querySelector("#runeight");
    runeight.addEventListener('click', runeightClicked);

    let runten= document.body.querySelector("#runten");
    runten.addEventListener('click', runtenClicked);

    let runeleven = document.body.querySelector("#runeleven");
    runeleven.addEventListener('click', runelevenClicked);

    let runtwelve = document.body.querySelector("#runtwelve");
    runtwelve.addEventListener('click', runtwelveClicked);

    let runthirteen= document.body.querySelector("#runthirteen");
    runthirteen.addEventListener('click', runthirteenClicked);
}

document.addEventListener("DOMContentLoaded", main)