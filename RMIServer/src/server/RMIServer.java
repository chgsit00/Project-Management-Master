package server;

import java.rmi.*;

public interface RMIServer extends Remote{
	public Data doJob(Job job) throws RemoteException;
}
