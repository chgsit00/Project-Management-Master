package main.java.iCareData;

public class Corridor implements RoomInterface{
	private Bounds bounds;

	public Corridor(Bounds bounds) {
		super();
		this.bounds = bounds;
	}

	@Override
	public Bounds GetBounds() {
		return bounds;
	}

	@Override
	public Door GetDoors() {
		return null;
	}

}
