package controller;

import java.util.Collection;
import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import iCareServer.NotificationContainer;
import objects.Notification;

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
}
