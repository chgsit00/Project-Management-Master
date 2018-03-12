package main.java.iCareData;

import java.util.List;

public class MoveInhabitantsController {
	private List<Inhabitant> inhabitants;
	
	public MoveInhabitantsController() {
		super();
		inhabitants = Building.getInhabitants();
	}

	public List<Inhabitant> moveInhabitants(){
		for (Inhabitant inhabitant : inhabitants) {
			inhabitant.move();
		}
		
		return inhabitants;
	}
}
