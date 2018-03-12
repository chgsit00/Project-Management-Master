package iCareServer;

import java.util.Collection;
import java.util.Date;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class NotificationController {
	@RequestMapping("/notification")
	public Collection<Notification> getNotifications(){
		return NotificationContainer.getCurrentNotifications(new Date()).values();
	}	
}
