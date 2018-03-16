package main.java.iCareData;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import main.java.iCareData.HealthCheck.StatusFlag;

// Initializes the Building with its rooms and inhabitants
public class Building {
	public static Map<String, RoomInterface> roomInterfaces;
	public static List<Inhabitant> inhabitants;
	
	// Initialize rooms
	public static void generateRooms() {
		roomInterfaces = new HashMap<>();
		
		roomInterfaces.put("DiningHall",new DiningHall("DiningHall",new Bounds(0, 0, 100, 100), new Door(new Bounds(100,  45,  0,  10))));
		
		roomInterfaces.put("Room1", new Loft("Room1", new Bounds(100, 0, 50, 45), new Door(new Bounds(120, 45, 10, 0))));
		roomInterfaces.put("Room2", new Loft("Room2",new Bounds(100, 55, 50, 45), new Door(new Bounds(120, 55, 10, 0))));
		roomInterfaces.put("Room3", new Loft("Room3",new Bounds(150, 0, 50, 45), new Door(new Bounds(170, 45, 10, 0))));
		roomInterfaces.put("Room4", new Loft("Room4",new Bounds(150, 55, 50, 45), new Door(new Bounds(170, 55, 10, 0))));
		roomInterfaces.put("Room5", new Loft("Room5",new Bounds(200, 55, 50, 45), new Door(new Bounds(220, 55, 10, 0))));
		roomInterfaces.put("Room6", new Loft("Room6",new Bounds(250, 0, 50, 45), new Door(new Bounds(270, 45, 10, 0))));
		roomInterfaces.put("Room7", new Loft("Room7",new Bounds(250, 55, 50, 45), new Door(new Bounds(270, 55, 10, 0))));
		roomInterfaces.put("Room8", new Loft("Room8",new Bounds(300, 0, 50, 45), new Door(new Bounds(320, 45, 10, 0))));
		roomInterfaces.put("Room9", new Loft("Room9",new Bounds(300, 55, 50, 45), new Door(new Bounds(320, 55, 10, 0))));
		
		roomInterfaces.put("Corridor", new Corridor("Corridor",new Bounds(100, 45, 250, 10)));
		
		roomInterfaces.put("Entrance", new Entrance("Entrance",new Bounds(200, 0, 50, 45), new Door(new Bounds(220, 45, 10, 0))));
	}
	
	public static void generateInhabitants() {
		inhabitants = new ArrayList<Inhabitant>();
		inhabitants.add(new Inhabitant(UUID.randomUUID().toString(), 67, "Ms. Smith", new ArrayList<>(), new HealthCheck("", StatusFlag.GREEN), new Position(20, 20)));
		inhabitants.add(new Inhabitant(UUID.randomUUID().toString(), 86, "Mr. Bradburry", new ArrayList<>(), new HealthCheck("High Heartrate", StatusFlag.YELLOW), new Position(324, 60)));
		inhabitants.add(new Inhabitant(UUID.randomUUID().toString(), 75, "Ms. Doubtfire", new ArrayList<>(), new HealthCheck("", StatusFlag.GREEN), new Position(210, 64)));
		List<String> restrictions = new ArrayList<>();
		restrictions.add("Entrance");
		inhabitants.add(new Inhabitant(UUID.randomUUID().toString(), 77, "Mr. Redguard", restrictions, new HealthCheck("", StatusFlag.GREEN), new Position(210, 20)));
	}
	
	public static Map<String, RoomInterface> getRooms(){
		if(roomInterfaces == null) {
			generateRooms();
		}		
		return roomInterfaces;
	}
	
	public static List<Inhabitant> getInhabitants(){
		if(inhabitants == null) {
			generateInhabitants();
		}
		List<Inhabitant> inhabitantsCopy = inhabitants;
		return inhabitantsCopy;
	}
}
