package iCareServer;

import java.util.Date;
import java.util.List;
import java.util.Map;

import main.java.iCareData.Bounds;
import main.java.iCareData.Building;
import main.java.iCareData.Inhabitant;
import main.java.iCareData.Position;
import main.java.iCareData.RoomInterface;

public class AlertNotifier {
	public static final String RESTRICTIONALERT = "Patient entered restricted Area";
	public static final String MOTION_DETECTOR = "Motion Detector";
	public static final String WRIST_BAND = "Wrist Band";

	public static void notifyCauseForAlert(List<Inhabitant> inhabitants) {
		for (Inhabitant inhabitant : inhabitants) {
			RoomInterface room = getRoomByInhabitantPosition(inhabitant);
			String roomId = room != null ? room.getID() : "UNKNOWN";
			if (inhabitant.getHealthCheck().getStatus().equals(Severity.RED.toString())) {
				Notification notification = new Notification(inhabitant.getId(),
						inhabitant.getHealthCheck().getMessage(), roomId, WRIST_BAND, Severity.RED, new Date(), inhabitant.getName());
				NotificationContainer.addNotification(notification);
			} else if (inhabitant.getHealthCheck().getStatus().equals(Severity.YELLOW.toString())) {
				Notification notification = new Notification(inhabitant.getId(),
						inhabitant.getHealthCheck().getMessage(), roomId, WRIST_BAND, Severity.YELLOW, new Date(), inhabitant.getName());
				NotificationContainer.addNotification(notification);
			}
			for (String restriction : inhabitant.getRestrictions()) {
				if (roomId.equals(restriction)) {
					Notification notification = new Notification(inhabitant.getId(), RESTRICTIONALERT, roomId,
							MOTION_DETECTOR, Severity.RED, new Date(), inhabitant.getName());
					NotificationContainer.addNotification(notification);
				}
			}
		}
	}

	private static RoomInterface getRoomByInhabitantPosition(Inhabitant inhabitant) {
		RoomInterface roomWhereInhabitantIs = null;
		Map<String, RoomInterface> rooms = Building.getRooms();
		for (RoomInterface room : rooms.values()) {
			Position pos = inhabitant.getPosition();
			Bounds roomBounds = room.GetBounds();
			if (IsPositionInRoomBounds(roomBounds, pos)) {
				roomWhereInhabitantIs = room;
				break;
			}
		}
		return roomWhereInhabitantIs;
	}

	private static boolean IsPositionInRoomBounds(Bounds roomBounds, Position inhabitantPosition) {
		return (inhabitantPosition.getX() >= roomBounds.getX()
				&& inhabitantPosition.getX() < (roomBounds.getX() + roomBounds.getWidth()))
				&& (inhabitantPosition.getY() >= roomBounds.getY()
						&& inhabitantPosition.getY() < (roomBounds.getY() + roomBounds.getHeight()));
	}
}
