var http = require('http');
var fs = require('fs');
var SerialPort = require("serialport");
var say = require('say')


let html_file = fs.readFileSync('index.html')
let img0 = fs.readFileSync('b0.png')
let img1 = fs.readFileSync('b1.png')
let for_arduino = ' ';
var arduinoCOMPort = "COM4";
var arduinoSerialPort = new SerialPort(arduinoCOMPort, {  
    baudRate: 9600
   });


arduinoSerialPort.on('data', msg => {
  console.log(msg.toString())
})

http.createServer(function(req,res){
console.log(req.url)


if(req.url == '/s'){
    req.on('data', chislo => {
      for_arduino = 's' + chislo;
      console.log("svet", chislo)
      arduinoSerialPort.write(for_arduino);
      })
     
      req.on('end', () => {
        console.log(for_arduino)
      })


      ///DELETE //
     // res.setHeader("siktir", "siktir2");
   
}
if(req.url == '/m'){
    req.on('data', msg => {
      for_arduino = 'm' + msg;
      console.log('msg', msg)
      arduinoSerialPort.write(for_arduino);
      say.speak(msg, 'ALex', 0.8)
      })
      req.on('end', () => {
        console.log(for_arduino)
      })
}





if(req.url == "/arduino"){
    res.writeHead(200, {'Content-type' : "text/plain"})
       res.end(for_arduino)
    //    for_arduino = ' ';
 
  }
  
if(req.url == '/b0.png'){
    res.writeHead(200, {'Content-type' : "image/png"});
    res.end(img0)
}
if(req.url == '/b1.png'){
    res.writeHead(200, {'Content-type' : "image/png"});
    res.end(img1)
}
  
  
else{
res.writeHead(200, {'Content-type' : "text/html"})
res.end(html_file)
  }

}).listen(80)






   
   arduinoSerialPort.on('open',function() {
     console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
   });
   
   











