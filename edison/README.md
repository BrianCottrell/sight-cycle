Device paring is done with bluetoothctl, which is provided by the net-wireless/bluez package.

Start bluetoothctl.
user $bluetoothctl

<br>List the available controllers.
    <br>    [bluetooth]#list
<br>Display information about a controller.
    <br>    [bluetooth]#show controller_mac_address
<br>Set the default controller.
    <br>    [bluetooth]#select controller_mac_address
<br>Power on the controller.
_    <br>    [bluetooth]#power on _
<br>Enable the agent and set it as default.
    <br>    [bluetooth]#agent on
    <br>    [bluetooth]#default-agent
<br>Set the controller as discoverable (temporarily for 3 minutes) and pairable.
    <br>    [bluetooth]#discoverable on
    <br>    [bluetooth]#pairable on
<br>Scan for devices.
    <br>    [bluetooth]#scan on
<br>Put the device into pairing mode.
<br>Discover the device MAC address.
    <br>    [bluetooth]#devices
<br>Pair with the device.
    <br>    [bluetooth]#pair device_mac_address
<br>Enter the PIN if prompted.
  <br>  [agent]PIN code: ####
<br>Allow the service authorization if requested.
  <br>  [agent]Authorize service service_uuid (yes/no): yes
<br>Trust the device.
    <br>    [bluetooth]#trust device_mac_address
<br>Connect to the device.
    <br>    [bluetooth]#connect device_mac_address
<br>Display information about the device.
    <br>    [bluetooth]#info device_mac_address
<br>The device is now paired.
    <br>    [bluetooth]#quit
