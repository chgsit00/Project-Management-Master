package iCareData;

import java.util.HashMap;
import java.util.Map;

public class Building {
	public static Map<String, RoomInterface> roomInterfaces;
	
	// Initialize rooms
	public static void generateRooms() {
		roomInterfaces = new HashMap<>();
		
		roomInterfaces.put("DiningHall",new DiningHall(new Bounds(0, 0, 100, 100), new Door(new Bounds(100,  45,  0,  10))));
		
		roomInterfaces.put("Room1", new Loft(new Bounds(100, 0, 50, 45), new Door(new Bounds(120, 45, 10, 0))));
		roomInterfaces.put("Room2", new Loft(new Bounds(100, 55, 50, 45), new Door(new Bounds(120, 55, 10, 0))));
		roomInterfaces.put("Room3", new Loft(new Bounds(150, 0, 50, 45), new Door(new Bounds(170, 45, 10, 0))));
		roomInterfaces.put("Room4", new Loft(new Bounds(150, 55, 50, 45), new Door(new Bounds(170, 55, 10, 0))));
		roomInterfaces.put("Room5", new Loft(new Bounds(200, 55, 50, 45), new Door(new Bounds(220, 55, 10, 0))));
		roomInterfaces.put("Room6", new Loft(new Bounds(250, 0, 50, 45), new Door(new Bounds(270, 45, 10, 0))));
		roomInterfaces.put("Room7", new Loft(new Bounds(250, 55, 50, 45), new Door(new Bounds(270, 55, 10, 0))));
		roomInterfaces.put("Room8", new Loft(new Bounds(300, 0, 50, 45), new Door(new Bounds(320, 45, 10, 0))));
		roomInterfaces.put("Room9", new Loft(new Bounds(300, 55, 50, 45), new Door(new Bounds(320, 55, 10, 0))));
		
		roomInterfaces.put("Corridor", new Corridor(new Bounds(100, 45, 250, 10)));
		
		roomInterfaces.put("Entrance", new Entrance(new Bounds(200, 0, 50, 45), new Door(new Bounds(220, 45, 10, 0))));
	}
	
	public static Map<String, RoomInterface> getRooms(){
		if(roomInterfaces == null) {
			generateRooms();
		}
		
		return roomInterfaces;
	}
}
