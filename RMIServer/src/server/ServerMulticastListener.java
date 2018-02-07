package server;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.MulticastSocket;

public class ServerMulticastListener implements Runnable{

	private String RMIServerName;
	private int RMIPort;
	private byte[] buffer = new byte[1024];
	private MulticastSocket serverSocket;
	private DatagramPacket packet = new DatagramPacket (buffer, buffer.length);
	private InetAddress group = InetAddress.getByName("228.5.6.7");
	
	public ServerMulticastListener(int port, String rmiServer, int rmiPort) throws IOException {
		serverSocket = new MulticastSocket (port);
		this.RMIPort = rmiPort;
		this.RMIServerName = rmiServer;
	}
	
	@Override
	public void run() {
		try {
			serverSocket.joinGroup(group);
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		while(true){			
			System.out.println ("Waiting for message ...");
			try {
				serverSocket.receive (packet);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println ("Connection by: " + packet.getAddress ().toString ());
			System.out.println (new String (packet.getData ()));
			sendReply(packet.getPort(), packet.getAddress().getHostAddress());
			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	private synchronized void sendReply(int port, String hostname){
		String rmiInfo = ""+RMIPort+RMIServerName;
		byte[] buffer = rmiInfo.getBytes();
		DatagramSocket client;
		try {
			client = new DatagramSocket ();
			InetAddress address = InetAddress.getByName(hostname);
			DatagramPacket packet = new DatagramPacket (buffer, buffer.length, address, port);
			client.send (packet);
			client.close ();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
