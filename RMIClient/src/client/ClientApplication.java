package client;

public class ClientApplication {

	public static void main(String[] args) {
		ClientMulticastSender listener = new ClientMulticastSender();
		Thread t = new Thread(listener);
		t.start();
	}

}
