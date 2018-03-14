package controller;

import java.util.Collection;
import java.util.Date;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import iCareServer.NotificationContainer;
import objects.DebugNotification;
import objects.Notification;
import objects.Severity;

@CrossOrigin
@RestController
public class NotificationController {
	@RequestMapping("/notification")
	public Collection<Notification> getNotifications(){
		return NotificationContainer.getCurrentNotifications().values();
	}	
	
	@RequestMapping("/notification/new")
	public Collection<Notification> getNewNotifications(){
		return NotificationContainer.getCurrentNotifications(new Date()).values();
	}	
	
	@RequestMapping(value = "/debug/notification", method = RequestMethod.POST)
	public ResponseEntity<?> updateInhabitant(@RequestBody DebugNotification debugNotification) {
		Notification notification = new Notification(debugNotification.getMessage(), debugNotification.getRoomId(), "", Severity.RED);
		NotificationContainer.addNotification(notification);
		return ResponseEntity.noContent().build();
	}
}
