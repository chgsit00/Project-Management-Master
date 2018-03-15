package iCareServer;

import java.util.List;

import main.java.iCareData.HealthCheck;
import main.java.iCareData.Position;

public class DebugInhabitant {
	private String id;
	private int heartRate;
	private Position position;
	private List<String> restrictions;
	private HealthCheck healtCheck;

	public DebugInhabitant(String id, int heartRate, List<String> restrictions, HealthCheck healtCheck,
			Position position) {
		super();
		this.id = id;
		this.heartRate = heartRate;
		this.restrictions = restrictions;
		this.healtCheck = healtCheck;
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

	public HealthCheck getHealtCheck() {
		return healtCheck;
	}

	public void setHealtCheck(HealthCheck healtCheck) {
		this.healtCheck = healtCheck;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}
}
