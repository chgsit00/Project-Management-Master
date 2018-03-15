package main.java.iCareData;

public class Corridor implements RoomInterface{
	private Bounds bounds;
	private String id;
	
	public Corridor(String id, Bounds bounds) {
		super();
		this.bounds = bounds;
		this.id = id;
	}

	@Override
	public Bounds GetBounds() {
		return bounds;
	}

	@Override
	public Door GetDoors() {
		return null;
	}

	@Override
	public String getID() {
		return id;
	}

}
