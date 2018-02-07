package server;

import java.net.MalformedURLException;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

public class RMIServerImpl extends UnicastRemoteObject implements RMIServer {
	private static final long serialVersionUID = -7710747842796316209L;
	public RMIServerImpl(int port) throws RemoteException, MalformedURLException, NotBoundException {
		super();
		System.out.println("Try to bind ...");
		
		Registry reg = LocateRegistry.createRegistry(port);
		System.out.println("bound\nWaiting for connection");
		//reg.unbind("Server");
		reg.rebind("Server", this);
	}

	@Override
	public synchronized Data doJob(Job job) throws RemoteException {
		System.out.println("Server received Job");
		int a = job.addInts();
		double b = job.addDoubles();
		return new Data(a,b);
	}

	public static void main(String[] args) {
		try {
			RMIServerImpl rmiServer = new RMIServerImpl(1099);
			while (System.in.read() != 's'){
				Thread.sleep(10);
			}
			//reg.unbind("Server");
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.exit(0);
	}
}
