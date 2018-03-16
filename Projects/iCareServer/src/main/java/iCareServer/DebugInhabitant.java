package iCareServer;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import main.java.iCareData.HealthCheck;
import main.java.iCareData.Position;

public class DebugInhabitant {
	@JsonProperty("id")
	private String id;
	@JsonProperty("heartRate")
	private int heartRate;
	@JsonProperty("position")
	private Position position;
	@JsonProperty("restrictions")
	private List<String> restrictions;
	@JsonProperty("healthCheck")
	private HealthCheck healthCheck;

	public DebugInhabitant(String id, int heartRate, List<String> restrictions, HealthCheck healthCheck,
			Position position) {
		super();
		this.id = id;
		this.heartRate = heartRate;
		this.restrictions = restrictions;
		this.healthCheck = healthCheck;
		this.position = position;
	}

	public String getId() {
		return id;
	}

	public int getHeartRate() {
		return heartRate;
	}

	public void setHeartRate(int heartRate) {
		this.heartRate = heartRate;
	}

	public List<String> getRestrictions() {
		return restrictions;
	}

	public void setRestrictions(List<String> restrictions) {
		this.restrictions = restrictions;
	}

	public HealthCheck getHealthCheck() {
		return healthCheck;
	}

	public void setHealtCheck(HealthCheck healthCheck) {
		this.healthCheck = healthCheck;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}
}
