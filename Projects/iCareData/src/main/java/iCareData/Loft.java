package main.java.iCareData;

public class Loft implements RoomInterface{
	private Bounds bounds;
	private Door door;
	
	public Loft(Bounds bounds, Door door) {
		super();
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
	
	/*
	public void test() {
		Building.roomInterfaces.get("DiningHall").GetBounds();
		Building.roomInterfaces.get("DiningHall").GetDoors().GetBounds();
	}
	*/
}
