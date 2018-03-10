package iCareData;

import java.util.ArrayList;
import java.util.List;

public class MoveInhabitantsController {
	private List<Inhabitant> inhabitants;
	
	public MoveInhabitantsController() {
		super();
		inhabitants = new ArrayList<Inhabitant>();
	}

	public List<Inhabitant> moveInhabitants(){
		for (Inhabitant inhabitant : inhabitants) {
			inhabitant.move();
		}
		
		return inhabitants;
	}
}
