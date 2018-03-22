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
		if(currentNotifications.size() >= 100) {
			currentNotifications.remove(0);
		}
		if (!currentNotifications.stream().filter(x -> x.equals(notification)).findAny().isPresent()) {
			currentNotifications.add(notification);
		}
	}

	public synchronized static CopyOnWriteArrayList<Notification> getCurrentNotifications() {
		if (null == currentNotifications) {
			currentNotifications = new CopyOnWriteArrayList<Notification>();
		}
		return currentNotifications;
	}

	public synchronized static List<Notification> getCurrentNotifications(Date callDate) {
		if (null == currentNotifications) {
			currentNotifications = new CopyOnWriteArrayList<Notification>();
		}
		List<Notification> notificationsSinceLastCall = purgeOldNotifications();
		lastCall = callDate;
		return notificationsSinceLastCall;
	}

	public synchronized static List<Notification> purgeOldNotifications() {
		List<Notification> allOldNotifications = currentNotifications.stream()
				.filter(key -> (null != lastCall && key.getTimeStamp().after(lastCall))).collect(Collectors.toList());
		return allOldNotifications;
	}
}
