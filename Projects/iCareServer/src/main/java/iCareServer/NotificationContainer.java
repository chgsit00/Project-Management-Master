package iCareServer;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class NotificationContainer {
	private static Map<Date, Notification> currentNotifications;
	private long ONE_HOUR = 3600000;

	public void addNotification(Notification notification) {
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

	public void purgeOldNotifications() {
		if (null == currentNotifications) {
			currentNotifications = new HashMap<>();
		} else {
			Date now = new Date();
			List<Date> allOldNotifications = currentNotifications.keySet().stream()
					.filter(key -> now.getTime() - key.getTime() > ONE_HOUR).collect(Collectors.toList());
			allOldNotifications.forEach(old -> currentNotifications.remove(old));
		}
	}
}
