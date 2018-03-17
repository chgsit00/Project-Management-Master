package iCareServer;

import java.util.ConcurrentModificationException;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import main.java.iCareData.Building;
import main.java.iCareData.Inhabitant;
import main.java.iCareData.MoveInhabitantsController;

@CrossOrigin
@RestController
public class InhabitantsController {
	@RequestMapping("/inhabitant")
	public List<Inhabitant> getInhabitants() {

		List<Inhabitant> inhabitants = null;
		while (null == inhabitants) {
			try {
				inhabitants = Building.inhabitants;
			} catch (ConcurrentModificationException e) {
				// Nothing
			}
		}
		return inhabitants;
	}

	@RequestMapping(value = "/debug/inhabitant/{id}", method = RequestMethod.PUT)
	public void updateInhabitant(@PathVariable("id") String id, @RequestBody DebugInhabitant debugInhabitant) {
		MoveInhabitantsController inhabitantsController = new MoveInhabitantsController();
		inhabitantsController.updateInhabitant(id, debugInhabitant.getHeartRate(),
				debugInhabitant.getPosition(),
				debugInhabitant.getRestrictions(), debugInhabitant.getHealthCheck());
	}
}
