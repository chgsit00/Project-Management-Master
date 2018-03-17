package main.java.iCareData;

import java.util.List;

public class MoveInhabitantsController {

	public MoveInhabitantsController() {
		super();
	}

	public synchronized void moveInhabitants(){
		for (Inhabitant inhabitant : Building.inhabitants) {
			inhabitant.move();
			inhabitant.updateHearthRate();
		}
	}

	public synchronized List<Inhabitant> getInhabitants() {
		return Building.getInhabitants();
	}

	public synchronized void updateInhabitant(String id, int hearthRate, Position position, List<String> restrictions,
			HealthCheck healthCheck) {
		Inhabitant inhabitant = Building.inhabitants.stream().filter(inh -> inh.getId().equals(id)).findFirst()
				.orElse(null);
		if (inhabitant != null) {
			inhabitant.setHealthCheck(healthCheck);
			inhabitant.setHeartRate(hearthRate);
			inhabitant.setPosition(position);
			inhabitant.setRestrictions(restrictions);
		}
	}
}
