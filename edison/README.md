Device paring is done with bluetoothctl, which is provided by the net-wireless/bluez package.

Start bluetoothctl.
user $bluetoothctl

List the available controllers.
    <br>    [bluetooth]#list
Display information about a controller.
    <br>    [bluetooth]#show controller_mac_address
Set the default controller.
    <br>    [bluetooth]#select controller_mac_address
Power on the controller.
_    <br>    [bluetooth]#power on _
Enable the agent and set it as default.
    <br>    [bluetooth]#agent on
    <br>    [bluetooth]#default-agent
Set the controller as discoverable (temporarily for 3 minutes) and pairable.
    <br>    [bluetooth]#discoverable on
    <br>    [bluetooth]#pairable on
Scan for devices.
    <br>    [bluetooth]#scan on
Put the device into pairing mode.
Discover the device MAC address.
    <br>    [bluetooth]#devices
Pair with the device.
    <br>    [bluetooth]#pair device_mac_address
Enter the PIN if prompted.
    [agent]PIN code: ####
Allow the service authorization if requested.
    [agent]Authorize service service_uuid (yes/no): yes
Trust the device.
    <br>    [bluetooth]#trust device_mac_address
Connect to the device.
    <br>    [bluetooth]#connect device_mac_address
Display information about the device.
    <br>    [bluetooth]#info device_mac_address
The device is now paired.
    <br>    [bluetooth]#quit
