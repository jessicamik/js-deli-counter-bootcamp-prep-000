var katzDeli  = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli){
if (katzDeli.length > 0){
  var name = katzDeli.shift();
  return `Currently serving ${name}.`}
else {return "There is nobody waiting to be served!"}
}

function currentLine(line){
  if (line.length ===0){return "The line is currently empty."};
  var lineArray = [];
  for (let i=0; i<line.length; i++){
    lineArray.push(" " + [i+1] + "." + " " + line[i])};
return `The line is currently:${lineArray}`
  }
