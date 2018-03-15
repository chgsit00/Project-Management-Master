package main.java.iCareData;



public class Loft implements RoomInterface{
	private Bounds bounds;
	private Door door;
	private String id;
	
	public Loft(String id, Bounds bounds, Door door) {
		super();
		this.id = id;
		this.bounds = bounds;
		this.door = door;
	}

	@Override
	public Bounds GetBounds() {
		return bounds;
	}

	@Override
	public Door GetDoors() {
		return door;
	}

	@Override
	public String getID() {
		return id;
	}
	
	/*
	public void test() {
		Building.roomInterfaces.get("DiningHall").GetBounds();
		Building.roomInterfaces.get("DiningHall").GetDoors().GetBounds();
	}
	*/
}
