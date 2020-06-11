let kg = document.getElementById('kg')
let lbs = document.getElementById('lbs')
let meters = document.getElementById('meters')
let yards = document.getElementById('yards')
let celcius = document.getElementById('celcius')
let far = document.getElementById('far')

function kgTolbs(){

    lbs.value = kg.value*2.205
}
function lbsTokg(){
    kg.value = lbs.value/2.205
}

function metersToyards(){
   yards.value =  meters.value*1.094
}

function yardsTometers(){
    meters.value =  yards.value/1.094
 }

 function celciusTofar(){
    far.value = (celcius.value*9/5)+32
 }

 function farTocelcius(){
    celcius.value = (far.value-32)*5/9
 }