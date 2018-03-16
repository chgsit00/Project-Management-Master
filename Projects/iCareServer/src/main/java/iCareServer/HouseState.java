package iCareServer;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

// Zeigt den Energieverbrauch des Hauses. Ist als Singleton implementiert.
public class HouseState {
	private static HouseState instance;

	private HouseState() {
	}

	public static HouseState getInstance() {
		if (HouseState.instance == null) {
			HouseState.instance = new HouseState();
			instance.initEnergyLight();
			instance.initEnergyHeating();
			instance.initWater();
		}
		return HouseState.instance;
	}

	private List<Double> energyLight;
	private List<Double> energyHeating;
	private List<Integer> water;

	public void initEnergyLight() {
		instance.energyLight = new ArrayList<>();
		addRandomNumberToLight();
	}

	public void init() {
		while (instance.energyHeating.size() < 30) {
			addRandomNumberToHeating();
		}
		while (instance.energyLight.size() < 30) {
			addRandomNumberToLight();
		}
		while (instance.water.size() < 30) {
			addRandomNumberToWater();
		}
	}
	
	public void addRandomNumberToLight() {
		if(instance.energyLight.size() >= 30) {
			instance.energyLight.remove(0);
		}
		// Gebäude dieser Größe haben ca. diesen Verbrauch pro Tag in kWh
		double min = 9.0;
		double max = 12.0;
		double randomNum = ThreadLocalRandom.current().nextDouble(min, max + 1);
		instance.energyLight.add(randomNum);
	}

	public void initEnergyHeating() {
		instance.energyHeating = new ArrayList<>();
		addRandomNumberToHeating();
	}

	public void addRandomNumberToHeating() {
		if(instance.energyHeating.size() >= 30) {
			instance.energyHeating.remove(0);
		}
		// Gebäude dieser Größe haben ca. diesen Verbrauch pro Tag in kWh
		double min = 10.0;
		double max = 16.0;
		double randomNum = ThreadLocalRandom.current().nextDouble(min, max + 1);
		instance.energyHeating.add(randomNum);
	}

	public void initWater() {
		instance.water = new ArrayList<>();
		addRandomNumberToWater();
	}

	public void addRandomNumberToWater() {
		if(instance.water.size() >= 30) {
			instance.water.remove(0);
		}
		// Gebäude dieser Größe haben ca. diesen Verbrauch pro Tag in Liter
		int min = 1400;
		int max = 1600;
		int randomNum = ThreadLocalRandom.current().nextInt(min, max + 1);
		instance.water.add(randomNum);
	}

	public void passOneDay() {
		addRandomNumberToHeating();
		addRandomNumberToLight();
		addRandomNumberToWater();
	}
	
	public List<Double> getEnergyLight() {
		return energyLight;
	}

	public List<Double> getEnergyHeating() {
		return energyHeating;
	}

	public List<Integer> getWater() {
		return water;
	}
}
