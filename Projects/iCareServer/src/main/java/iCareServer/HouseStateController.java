package iCareServer;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HouseStateController {
	@RequestMapping("/house")
	public HouseStateObj getHouseStateObj() {
		HouseState instance = HouseState.getInstance();
		instance.passOneDay();
		HouseStateObj obj = new HouseStateObj();
		obj.setEnergyHeating(instance.getEnergyHeating());
		obj.setEnergyLight(instance.getEnergyLight());
		obj.setWater(instance.getWater());
		return obj;
	}
}
