package client;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;

public class ClientMulticastSender implements Runnable {

	private static final String MULTICAST_ADDRESS = "228.5.6.7";
	private static final int MULTICAST_PORT = 6666;

	static byte[] buffer = new byte[1024];
	static DatagramSocket replyServer;
	static DatagramPacket packet = new DatagramPacket(buffer, buffer.length);

	@Override
	public void run() {
		byte[] buffer = "Hello server".getBytes();
		try {
			replyServer = new DatagramSocket();
			InetAddress address = InetAddress.getByName(MULTICAST_ADDRESS);
			DatagramPacket packet = new DatagramPacket(buffer, buffer.length, address, MULTICAST_PORT);
			replyServer.send(packet);

		} catch (IOException e1) {
			e1.printStackTrace();
		}
		boolean keepRunning = true;
		while (keepRunning) {
			try {
				replyServer.receive(packet);
				String data = new String(packet.getData(), 0, packet.getLength());
				String host = packet.getAddress().getHostAddress();
				System.out.println("Connection by: " + host);
				System.out.println("Message: " + data);
				startRMIClient(data, host);
				try {
					Thread.sleep(10);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			} catch (IOException e) {
				e.printStackTrace();
				replyServer.close();
				System.exit(0);
			}
		}
	}

	private void startRMIClient(String data, String host) throws RemoteException {
		String port = "";
		String servername = "";
		for (char character : data.toCharArray()) {
			try {
				String s = "" + character;
				int number = Integer.parseInt(s);
				port += number;
			} catch (NumberFormatException e) {
				servername += character;
			}
		}
		RMIClient client = new RMIClient(host, Integer.parseInt(port), servername);
		try {
			client.start();
			client.sendJob();
		} catch (NotBoundException e) {
			e.printStackTrace();
		}
	}
}