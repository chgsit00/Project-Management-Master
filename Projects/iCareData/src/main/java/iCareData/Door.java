package main.java.iCareData;

public class Door implements BoundsInterface{
	private Bounds bounds;

	public Door(Bounds bounds) {
		super();
		this.bounds = bounds;
	}

	@Override
	public Bounds GetBounds() {
		return bounds;
	}
	 
}
