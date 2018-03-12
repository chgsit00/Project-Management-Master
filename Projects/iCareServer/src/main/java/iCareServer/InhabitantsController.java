package iCareServer;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.java.iCareData.Inhabitant;
import main.java.iCareData.MoveInhabitantsController;

@CrossOrigin
@RestController
public class InhabitantsController {
	@RequestMapping("/inhabitant")
	public List<Inhabitant> getInhabitants() {
		MoveInhabitantsController inhabitantsController = new MoveInhabitantsController();	
		return inhabitantsController.moveInhabitants();	
	}
}
