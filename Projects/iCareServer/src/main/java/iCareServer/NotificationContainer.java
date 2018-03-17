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
		if (!currentNotifications.stream().filter(not -> not.getInhabitantId().equals(notification.getInhabitantId())
				&& not.getSender().equals(notification.getSender())).findAny().isPresent()) {
			currentNotifications.add(notification);
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
