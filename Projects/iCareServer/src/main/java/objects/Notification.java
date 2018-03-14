package objects;

public class Notification {
	private String message;
	private String roomId;
	private String sender;
	private Severity severity;

	public Notification(String message, String roomId, String sender, Severity severity) {
		this.message = message;
		this.roomId = roomId;
		this.sender = sender;
		this.severity = severity;
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

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public Severity getSeverity() {
		return severity;
	}

	public void setSeverity(Severity severity) {
		this.severity = severity;
	}
}
