package iCareServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import main.java.iCareData.Building;
import main.java.iCareData.MoveInhabitantsController;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		Building.generateRooms();
		Building.generateInhabitants();
		HouseState.getInstance().init();
		MoveInhabitantsController moveInhabitantsController = new MoveInhabitantsController();
		Thread thread = new Thread(new Runnable() {
			@Override
			public void run() {
				while (true) {
					try {
						moveInhabitantsController.moveInhabitants();
						AlertNotifier.notifyCauseForAlert(moveInhabitantsController.getInhabitants());
						Thread.sleep(500);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		});
		thread.start();
		SpringApplication.run(Application.class, args);
	}
}