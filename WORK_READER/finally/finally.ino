#include <Wire.h> 
#include <LiquidCrystal_I2C.h>
#define relay_pin 6 
String val;
String skizb;
String skizb2;
String verj;
// Set the LCD address to 0x27 for a 16 chars and 2 line display
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup()
{
  pinMode(relay_pin, OUTPUT);     
Serial.begin(9600); 
pinMode(13, OUTPUT);
 digitalWrite(relay_pin, 1);   //RELEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
  
	// initialize the LCD
	lcd.begin();

	// Turn on the blacklight and print a message.
	lcd.backlight();
	lcd.print("BruTO");
}

void loop()
{
   
 
  

   
if (Serial.available()) {
  val = Serial.readString();
  skizb = val;
  verj = val;
  skizb2 = val;
  
if(skizb.substring(0,1)=="s"){
  if(skizb2.substring(1,2)=="0"){  digitalWrite(relay_pin,1); }
  if(verj.substring(1,2)=="1"){  digitalWrite(relay_pin,0); }
 // Serial.write("Dastish Fantastish");
  }
if(skizb2.substring(0,1)=="m"){
 lcd.setCursor(0, 1);
  lcd.print("                ");
  lcd.setCursor(0, 1);
    lcd.print(verj.substring(1));
}


  
  



} delay(100);}
