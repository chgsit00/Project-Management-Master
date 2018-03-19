package main.java.iCareData;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

import main.java.iCareData.HealthCheck.StatusFlag;

public class Inhabitant {
	private String id;
	private int heartRate = 80;
	private String name;
	private List<String> restrictions;
	private HealthCheck healthCheck;
	private Position position;
	private boolean xLast = true;
	private boolean yLast = true;
	private boolean xCollision = false;
	private boolean yCollision = false;

	public Inhabitant(String id, int heartRate, String name, List<String> restrictions, HealthCheck healtCheck,
			Position position) {
		super();
		this.id = id;
		this.heartRate = heartRate;
		this.name = name;
		this.restrictions = restrictions;
		this.healthCheck = healtCheck;
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

	public HealthCheck getHealthCheck() {
		return healthCheck;
	}

	public void setHealthCheck(HealthCheck healthCheck) {
		this.healthCheck = healthCheck;
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
		if (randomInt == 1) {						/* Bewegt sich Person in x Richtung? Chance  50 % */
			randomInt = randomGenerator.nextInt(99);	/* Chance  5 %, dass Person Richtung ändert */
			if(randomInt == 5 || xCollision == true) {
				if(xLast == true)
					xLast = false;
				else
					xLast = true;
				xCollision = false;
			}
			
			if(xLast == true)
				xPosition++;
			else
				xPosition--;
		}
			
		randomInt = randomGenerator.nextInt(2);
		if (randomInt == 1) {						/* Bewegt sich Person in y Richtung? Chance  50 % */
			randomInt = randomGenerator.nextInt(89);	/* Chance  10 %, dass Person Richtung ändert */
			if(randomInt == 5 || yCollision == true) {
				if(yLast == true)
					yLast = false;
				else
					yLast = true;
				yCollision = false;
			}
			
			if(yLast == true)
				yPosition++;
			else
				yPosition--;
		}

		if (collisionDetection(xPosition, yPosition)) {
			position.setX(xPosition);
			position.setY(yPosition);
		}
		
	}

	private boolean collisionDetection(double xPosition, double yPosition) {
		Map<String, RoomInterface> roomInterface = Building.getRooms();
		Boolean helper = false;
		
		/* Person ist in Außenwand */
		if(xPosition == 0 || xPosition == 350 || yPosition == 0 || yPosition == 100){
			checkBounds(xPosition, yPosition);
			return helper;
		}

		if ((		xPosition < roomInterface.get("DiningHall").GetBounds().getWidth()
				&& (yPosition < roomInterface.get("DiningHall").GetBounds().getHeight()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		xPosition == roomInterface.get("DiningHall").GetDoors().GetBounds().getX() 
					&& (yPosition > roomInterface.get("DiningHall").GetDoors().GetBounds().getY() && yPosition < roomInterface.get("DiningHall").GetDoors().GetBounds().getY() + 10))	{
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
			}
		}
		
		if ((		xPosition < roomInterface.get("Room1").GetBounds().getWidth() + roomInterface.get("Room1").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room1").GetBounds().getX()
				&& (yPosition < roomInterface.get("Room1").GetBounds().getHeight()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room1").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room1").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room1").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room3").GetBounds().getWidth() + roomInterface.get("Room3").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room3").GetBounds().getX()
				&& (yPosition < roomInterface.get("Room3").GetBounds().getHeight()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room3").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room3").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room3").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room6").GetBounds().getWidth() + roomInterface.get("Room6").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room6").GetBounds().getX()
				&& (yPosition < roomInterface.get("Room6").GetBounds().getHeight()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room6").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room6").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room6").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room8").GetBounds().getWidth() + roomInterface.get("Room8").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room8").GetBounds().getX()
				&& (yPosition < roomInterface.get("Room8").GetBounds().getHeight()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room8").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room8").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room8").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Entrance").GetBounds().getWidth() + roomInterface.get("Entrance").GetBounds().getX()
				&&	xPosition > roomInterface.get("Entrance").GetBounds().getX()
				&& (yPosition < roomInterface.get("Entrance").GetBounds().getHeight()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Entrance").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Entrance").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Entrance").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room2").GetBounds().getWidth() + roomInterface.get("Room2").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room2").GetBounds().getX()
				&& (yPosition > roomInterface.get("Room2").GetBounds().getY()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room2").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room2").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room2").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room4").GetBounds().getWidth() + roomInterface.get("Room4").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room4").GetBounds().getX()
				&& (yPosition > roomInterface.get("Room4").GetBounds().getY()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room4").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room4").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room4").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room5").GetBounds().getWidth() + roomInterface.get("Room5").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room5").GetBounds().getX()
				&& (yPosition > roomInterface.get("Room5").GetBounds().getY()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room5").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room5").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room5").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room7").GetBounds().getWidth() + roomInterface.get("Room7").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room7").GetBounds().getX()
				&& (yPosition > roomInterface.get("Room7").GetBounds().getY()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room7").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room7").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room7").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		if ((		xPosition < roomInterface.get("Room9").GetBounds().getWidth() + roomInterface.get("Room7").GetBounds().getX()
				&&	xPosition > roomInterface.get("Room9").GetBounds().getX()
				&& (yPosition > roomInterface.get("Room9").GetBounds().getY()))){
			// Person befindet sich im Raum
			return true;
		}
		else {
			if(		yPosition == roomInterface.get("Room9").GetDoors().GetBounds().getY() 
					&& (xPosition > roomInterface.get("Room9").GetDoors().GetBounds().getX() && xPosition < roomInterface.get("Room9").GetDoors().GetBounds().getX() + 10))	{
			
					// Person befindet sich in Tür
					checkBounds(xPosition, yPosition);
					return true;
				}
		}
		
		// Korridor
		if ((		xPosition < roomInterface.get("Corridor").GetBounds().getWidth() + 100
				&& (yPosition > roomInterface.get("Corridor").GetBounds().getY() && yPosition < roomInterface.get("Corridor").GetBounds().getY() + 10))){
			// Person befindet sich im Korridor
			checkBounds(xPosition, yPosition);
			return true;
		}
		
		return helper;
	}

	private void checkBounds(double xPosition, double yPosition)
	{
		if(xPosition == 0 || xPosition == 100 || xPosition == 150 || xPosition == 200 || xPosition == 250 || xPosition == 300 || xPosition == 350)
			xCollision = true;
		if(yPosition == 0 || yPosition == 45 || yPosition == 55 || yPosition == 100)
			yCollision = true;
	}
	
	public void updateHearthRate() {
		int min = heartRate - 1;
		int max = heartRate + 1;
		int randomNum = ThreadLocalRandom.current().nextInt(min, max + 1);
		if (randomNum < 0) {
			randomNum+=10;
		}
		if (randomNum > 180) {
			randomNum-=10;
		}		
		this.heartRate = randomNum;
		updateHealthCheck(randomNum);
	}

	private void updateHealthCheck(int randomNum) {
		// generiert eine entsprechende Warnung, wenn Herzrate zu hoch oder zu niedrig
		// ist.
		if (randomNum <= 30) {
			this.healthCheck = new HealthCheck("imminent cardiac arrest", StatusFlag.RED);
		} else if (randomNum > 30 && randomNum <= 50) {
			this.healthCheck = new HealthCheck("Low heart rate", StatusFlag.YELLOW);
		} else if (randomNum >= 130) {
			this.healthCheck = new HealthCheck("High heart rate", StatusFlag.RED);
		} else if (randomNum >= 100 && randomNum < 130) {
			this.healthCheck = new HealthCheck("Increased heart rate", StatusFlag.YELLOW);
		} else {
			this.healthCheck = new HealthCheck("OK", StatusFlag.GREEN);
		}
	}
}
