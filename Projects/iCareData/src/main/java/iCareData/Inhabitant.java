package iCareData;

import java.util.List;
import java.util.Map;
import java.util.Random;

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
}
