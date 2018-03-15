package main.java.iCareData;

public class HealthCheck {
	public HealthCheck(String message, StatusFlag status) {
		super();
		this.message = message;
		this.status = status.name();
	}

	private String message;
	private String status;
	
	public enum StatusFlag {
		GREEN, YELLOW, RED
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(StatusFlag status) {
		this.status = status.name();
	}
}
