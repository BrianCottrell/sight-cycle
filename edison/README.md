Device paring is done with bluetoothctl, which is provided by the net-wireless/bluez package.

Start bluetoothctl.
user $bluetoothctl

List the available controllers.
    [bluetooth]#list
Display information about a controller.
    [bluetooth]#show controller_mac_address
Set the default controller.
    [bluetooth]#select controller_mac_address
Power on the controller.
_    [bluetooth]#power on _
Enable the agent and set it as default.
    [bluetooth]#agent on
    [bluetooth]#default-agent
Set the controller as discoverable (temporarily for 3 minutes) and pairable.
    [bluetooth]#discoverable on
    [bluetooth]#pairable on
Scan for devices.
    [bluetooth]#scan on
Put the device into pairing mode.
Discover the device MAC address.
    [bluetooth]#devices
Pair with the device.
    [bluetooth]#pair device_mac_address
Enter the PIN if prompted.
    [agent]PIN code: ####
Allow the service authorization if requested.
    [agent]Authorize service service_uuid (yes/no): yes
Trust the device.
    [bluetooth]#trust device_mac_address
Connect to the device.
    [bluetooth]#connect device_mac_address
Display information about the device.
    [bluetooth]#info device_mac_address
The device is now paired.
    [bluetooth]#quit
