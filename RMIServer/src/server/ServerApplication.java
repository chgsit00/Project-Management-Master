package server;

import java.io.IOException;
import java.rmi.NotBoundException;
import java.util.Random;

public class ServerApplication {
	private static final int PORT = 6666;

	private static RMIServerImpl rmiServerImpl;

	public static void main(String[] args) {
		ServerMulticastListener listener;
		Random random = new Random();
		int randomPort = random.nextInt(9999);
		try {
			if(null == rmiServerImpl){
				rmiServerImpl = new RMIServerImpl(randomPort);
			}
			listener = new ServerMulticastListener(PORT, "Server", randomPort);
			Thread t = new Thread(listener);
			t.start();
		} catch (IOException | NotBoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
