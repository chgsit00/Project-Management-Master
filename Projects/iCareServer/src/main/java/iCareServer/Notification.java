package iCareServer;

import java.util.Date;

public class Notification {
	private String inhabitantId;
	private String message;
	private String roomId;
	private String sender;
	private Severity severity;
	private Date timeStamp;

	public Notification(String inhabitantId,String message, String roomId, String sender, Severity severity, Date timeStamp) {
		this.inhabitantId = inhabitantId;
		this.message = message;
		this.roomId = roomId;
		this.sender = sender;
		this.severity = severity;
		this.timeStamp = timeStamp;
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

	public Date getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}

	public String getInhabitantId() {
		return inhabitantId;
	}

	public void setInhabitantId(String inhabitantId) {
		this.inhabitantId = inhabitantId;
	}
}
