package client;

import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

import server.Data;
import server.Job;
import server.RMIServer;

public class RMIClient {

	RMIServer server;
	private String HOST;
	private int PORT;
	private String SERVER;
	
	public RMIClient(String host, int port, String serverName) {
			HOST = host;
			PORT = port;
			SERVER = serverName;
	}
	
	public void start() throws RemoteException, NotBoundException{
		Registry reg = LocateRegistry.getRegistry(HOST, PORT);
		server = (RMIServer) reg.lookup(SERVER);
	}

	public void sendJob() throws RemoteException{
		Data data = server.doJob(new Job(4,2,2.1,2.9));
		System.out.println("a = " +data.getA()+ " b = "+data.getB());
	}
	
	public static void main(String[] args) {
		try {
			RMIClient rmiclient = new RMIClient("172.16.28.191", 1099, "Server");
			rmiclient.start();
			rmiclient.sendJob();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
