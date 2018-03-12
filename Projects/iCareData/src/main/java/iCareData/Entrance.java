package main.java.iCareData;

public class Entrance implements RoomInterface{
	private Bounds bounds;
	private Door door;
	
	public Entrance(Bounds bounds, Door door) {
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
}
