package iCareData;

import java.util.HashMap;
import java.util.Map;

public class Building {
	public static Map<String, RoomInterface> roomInterfaces;
	
	// Initialize rooms
	public static void generateRooms() {
		roomInterfaces = new HashMap<>();
		
		roomInterfaces.put("DiningHall",new DiningHall(new Bounds(0, 0, 100, 100), new Door(new Bounds(50,  100,  20,  0))));
		
			/* TO DO: Generate alle Räume */
	}
	
	public static Map<String, RoomInterface> getRooms(){
		if(roomInterfaces == null) {
			generateRooms();
		}
		
		return roomInterfaces;
	}
}
