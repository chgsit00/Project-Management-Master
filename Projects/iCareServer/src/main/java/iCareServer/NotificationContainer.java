package iCareServer;

import java.util.Date;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

public class NotificationContainer {
	private static CopyOnWriteArrayList<Notification> currentNotifications;
	private static Date lastCall;

	public static synchronized void addNotification(Notification notification) {
		if (null == currentNotifications) {
			currentNotifications = new CopyOnWriteArrayList<Notification>();
		}

		for (Notification not : currentNotifications) {
			Notification currentNotification = not;
			if (!(currentNotification.getInhabitantId().equals(notification.getInhabitantId())
					&& currentNotification.getSender().equals(notification.getSender()))) {
				//currentNotifications.remove(currentNotification);
				currentNotifications.add(notification);
			}
		}

	}

	public synchronized static CopyOnWriteArrayList<Notification> getCurrentNotifications() {
		if (null == currentNotifications) {
			currentNotifications = new CopyOnWriteArrayList<Notification>();
		}
		return currentNotifications;
	}

	public synchronized static CopyOnWriteArrayList<Notification> getCurrentNotifications(Date callDate) {
		if (null == currentNotifications) {
			currentNotifications = new CopyOnWriteArrayList<Notification>();
		}
		CopyOnWriteArrayList<Notification> notificationsSinceLastCall = purgeOldNotifications();
		lastCall = callDate;
		return notificationsSinceLastCall;
	}

	public synchronized static CopyOnWriteArrayList<Notification> purgeOldNotifications() {
		CopyOnWriteArrayList<Notification> notificationsSinceLastCall = currentNotifications;
		List<Notification> allOldNotifications = notificationsSinceLastCall.stream()
				.filter(key -> (null != lastCall && key.getTimeStamp().before(lastCall))).collect(Collectors.toList());
		allOldNotifications.forEach(old -> notificationsSinceLastCall.remove(old));
		return notificationsSinceLastCall;
	}
}
