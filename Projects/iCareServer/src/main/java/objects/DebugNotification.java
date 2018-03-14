package objects;

public class DebugNotification {
	private String message;
	private String roomId;

	public DebugNotification(String message, String roomId) {
		this.message = message;
		this.roomId = roomId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getRoomId() {
		return roomId;
	}

	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}
}
