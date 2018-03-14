package main.java.iCareData;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

import main.java.iCareData.HealthCheck.StatusFlag;

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
		Random randomGenerator = new Random();
		
		double xPosition = position.getX();
		double yPosition = position.getY();
		
		int randomInt = randomGenerator.nextInt(2);
		if(randomInt == 1)
			++xPosition;
		else
			--xPosition;
		
		randomInt = randomGenerator.nextInt(2);
		if(randomInt == 1)
			++yPosition;
		else
			--yPosition;
		
		if(!collisionDetection(xPosition, yPosition)) {
			position.setX(xPosition);
			position.setY(yPosition);
		}
	}

	private boolean collisionDetection(double xPosition, double yPosition) {
		Map<String, RoomInterface> roomInterface = Building.getRooms();
		
		/*-------- Check DiningHall --------*/
		
		if( (xPosition > roomInterface.get("DiningHall").GetBounds().getX() && xPosition < roomInterface.get("Room1").GetBounds().getX()) &&
			(yPosition > roomInterface.get("DiningHall").GetBounds().getY() && yPosition < roomInterface.get("DiningHall").GetBounds().getHeight()) ) {
			// Person befindet sich im Raum
		}
		else {
			// Person befindet sich entweder in der Wand oder in der Tür
			if(xPosition == roomInterface.get("DiningHall").GetDoors().GetBounds().getX() &&
				(yPosition > roomInterface.get("DiningHall").GetDoors().GetBounds().getY() && yPosition < 
				(roomInterface.get("DiningHall").GetDoors().GetBounds().getY() - roomInterface.get("DiningHall").GetDoors().GetBounds().getHeight()) )) {
				// Person befindet sich in der Tür
			}
			else
				// Person befindet sich in der Wand
				return true;
		}
		
		return false;
	}
	
	public void updateHearthRate() {
		int min = 60;
		int max = 120;
		int randomNum = ThreadLocalRandom.current().nextInt(min, max + 1);
		this.heartRate = randomNum;
		updateHealthCheck(randomNum);
	}

	private void updateHealthCheck(int randomNum) {
		// generiert eine entsprechende Warnung, wenn Herzrate zu hoch oder zu niedrig ist.
		if(randomNum <= 65) {
			this.healtCheck = new HealthCheck("Low heart rate", StatusFlag.YELLOW);
		} else if (randomNum >= 100) {
			this.healtCheck = new HealthCheck("High heart rate", StatusFlag.RED);
		} else if (randomNum >= 90 && randomNum < 100 ) {
			this.healtCheck = new HealthCheck("Increased heart rate", StatusFlag.YELLOW);
		} else {
			this.healtCheck = new HealthCheck("", StatusFlag.GREEN);
		}
	}
}
