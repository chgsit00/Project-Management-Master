package main.java.iCareData;

public class HealthCheck {

	private String message;
	private String status;
	
	public enum StatusFlag {
		GREEN, YELLOW, RED
	}

	public HealthCheck() {
		// For JSON
	}
	
	public HealthCheck(String message, StatusFlag status) {
		super();
		this.message = message;
		this.status = status.name();
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
