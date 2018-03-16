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
			inhabitant.updateHearthRate();
		}
		
		return inhabitants;
	}
	
	public void updateInhabitant(String id, int hearthRate, Position position, List<String> restrictions, HealthCheck healthCheck) {
		Inhabitant inhabitant = inhabitants.stream().filter(inh -> inh.getId().equals(id)).findFirst().orElse(null);
		if(inhabitant != null) {
			inhabitant.setHealthCheck(healthCheck);
			inhabitant.setHeartRate(hearthRate);
			inhabitant.setPosition(position);
			inhabitant.setRestrictions(restrictions);
		}
	}
}
