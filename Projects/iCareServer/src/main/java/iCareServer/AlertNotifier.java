package iCareServer;

import java.util.List;

import main.java.iCareData.Inhabitant;

public class AlertNotifier {
	public static void notifyCauseForAlert(List<Inhabitant> inhabitants) {
		for (Inhabitant inhabitant : inhabitants) {
			if (inhabitant.getHealtCheck().getStatus().equals(Severity.RED.toString())) {
				// TODO: Raum rausfinden
				Notification notification = new Notification(inhabitant.getHealtCheck().getMessage(), "ROOM",
						"Healthcheck", Severity.RED);
				NotificationContainer.addNotification(notification);
			} else if (inhabitant.getHealtCheck().getStatus().equals(Severity.YELLOW.toString())) {
				Notification notification = new Notification(inhabitant.getHealtCheck().getMessage(), "ROOM",
						"Healthcheck", Severity.YELLOW);
				NotificationContainer.addNotification(notification);
			}
		}
		// TODO: Alarm wergen Restriction auslösen
	}
}
