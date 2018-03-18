package iCareServer;

import java.net.InetAddress;

public interface Device {
	public InetAddress getIPAddress();
	public int getPort();
	public void connect(InetAddress address, int port);
	public byte[] receiveData();
	public void sendCommand(Command command);
}
