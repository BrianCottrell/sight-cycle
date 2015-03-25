
#include <jsonlite.h>
#include <M2XStreamClient.h>
#include <LocationParseFunctions.h>
#include <M2XStreamClient_template.h>
#include <NullPrint.h>
#include <StreamParseFunctions.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiServer.h>
#include <WiFiUdp.h>
#include <SPI.h>


#define POLL_DELAY_MS   1000// Poll M2X stream every 1 second
// M2X Constants
char deviceId[] =       "53a830effdf836ecef58a17f05887dc1";
char streamName1[] =     "distance";
char streamName2[]   =  "led";
char m2xKey[] =         "2db8a4514cb924597b6e19385982fac7";

//Define all Sensor Pins here:
typedef enum PINS{
  //rename pins to suit your needs!!
  PIN_NAME = 7
}pins;



// put your setup code here, to run once:
char ssid[ ] = ""; //  your network SSID (name) 
char pass[ ] = "";   // your network password (use for WPA, or use as key for WEP)
int status = WL_IDLE_STATUS;
//Define all value stores here
int reedSwitchVal = 0;       //used to store input value

//Store Data Values
int led = 0;
float distanceTraveled = 0.0013869;
int rotate = 0;
int response = 0;


char server[] = "http://api-m2x.att.com/v2";    // name address for Google (using DNS)

// Initialize the Ethernet client library
// with the IP address and port of the server 
// that you want to connect to (port 80 is default for HTTP):
WiFiClient client;
M2XStreamClient m2xCleint(&client, m2xKey);

void setup() {
  //Setup all pin comunications
  	
  	
  
  //Set up All Data Comunications
  Serial.begin(115200);
  Serial.println(ssid);
    
    do{// Connect to WPA/WPA2 network
      delay(5000);
      WiFi.begin(ssid, pass);
      delay(5000);
    }while(status != 1);
    
  }

void loop() {

  //Get Sensor Values from pins:
  	
  //push to m2x over Wifi and Get Responce codes back from m2x:
  response = m2xCleint.updateStreamValue(deviceId,streamName1,distanceTraveled);
  //Must wait for 1 sec between sends for each value hence the delay
  delay(POLL_DELAY_MS);
  //if you want to send a value to a diffrent stream then repeat:
  response = m2xCleint.updateStreamValue(deviceId,streamName2,led);
  delay(POLL_DELAY_MS);
}

