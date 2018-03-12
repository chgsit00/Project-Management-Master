package main.java.iCareData;

public class DiningHall implements RoomInterface{
	private Bounds bounds;
	private Door door;
	private String id;
	
	public DiningHall(String id, Bounds bounds, Door door) {
		super();
		this.bounds = bounds;
		this.door = door;
		this.id = id;
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
		// TODO Auto-generated method stub
		return id;
	}
	
	
}
