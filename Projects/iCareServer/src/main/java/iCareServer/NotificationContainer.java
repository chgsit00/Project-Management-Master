package iCareServer;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class NotificationContainer {
	private static Map<Date, Notification> currentNotifications;
	private static Date lastCall; 
	
	public static void addNotification(Notification notification) {
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		}
		Date now = new Date();
		currentNotifications.put(now, notification);
	}

	public static Map<Date, Notification> getCurrentNotifications() {
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		}
		return currentNotifications;
	}

	public static Map<Date, Notification> getCurrentNotifications(Date callDate) {
		Map<Date, Notification> notificationsSinceLastCall = purgeOldNotifications();
		lastCall = callDate;
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		}
		return notificationsSinceLastCall;
	}
	
	public static Map<Date, Notification> purgeOldNotifications() {
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
			return currentNotifications;
		} else {
			Map<Date, Notification> notificationsSinceLastCall = currentNotifications;
			List<Date> allOldNotifications = currentNotifications.keySet().stream()
					.filter(key -> (null != lastCall && key.before(lastCall))).collect(Collectors.toList());
			allOldNotifications.forEach(old -> notificationsSinceLastCall.remove(old));
			return notificationsSinceLastCall;
		}
	}
}
