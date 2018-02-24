package iCareData;

import java.util.List;

public class Inhabitant {
	private String id;
	private int heartRate;
	private String name;
	private List<String> restrictions;
	private HealthCheck healtCheck;
	private Position position;
	
	public Inhabitant(String id, int heartRate, String name, List<String> restrictions, HealthCheck healtCheck, Position position) {
		super();
		this.id = id;
		this.heartRate = heartRate;
		this.name = name;
		this.restrictions = restrictions;
		this.healtCheck = healtCheck;
		this.position = position;
	}
	
	public String getId() {
		return id;
	}
	
	public String getName() {
		return name;
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
	
	public void move() {
		// Change Position
	}
}
