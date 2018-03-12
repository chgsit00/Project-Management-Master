package iCareServer;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class NotificationContainer {
	private static Map<Date, Notification> currentNotifications;
	private static final long ONE_HOUR = 3600000;
	private static Date lastCall; 
	
	public static void addNotification(Notification notification) {
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		}
		Date now = new Date();
		currentNotifications.put(now, notification);
	}

	public static Map<Date, Notification> getCurrentNotifications() {
		purgeOldNotifications();
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		}
		return currentNotifications;
	}

	public static Map<Date, Notification> getCurrentNotifications(Date callDate) {
		purgeOldNotifications();
		lastCall = callDate;
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		}
		return currentNotifications;
	}
	
	public static void purgeOldNotifications() {
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		} else {
			Date now = new Date();
			List<Date> allOldNotifications = currentNotifications.keySet().stream()
					.filter(key -> now.getTime() - key.getTime() > ONE_HOUR || (null != lastCall && key.before(lastCall))).collect(Collectors.toList());
			allOldNotifications.forEach(old -> currentNotifications.remove(old));
		}
	}
}
