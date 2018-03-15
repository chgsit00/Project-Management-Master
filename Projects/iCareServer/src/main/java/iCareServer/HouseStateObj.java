package iCareServer;

import java.util.List;

public class HouseStateObj {
	private List<Double> energyLight;
	private List<Double> energyHeating;
	private List<Integer> water;

	public List<Double> getEnergyLight() {
		return energyLight;
	}

	public void setEnergyLight(List<Double> energyLight) {
		this.energyLight = energyLight;
	}

	public List<Double> getEnergyHeating() {
		return energyHeating;
	}

	public void setEnergyHeating(List<Double> energyHeating) {
		this.energyHeating = energyHeating;
	}

	public List<Integer> getWater() {
		return water;
	}

	public void setWater(List<Integer> water) {
		this.water = water;
	}
}
