package iCareServer;

import java.awt.Point;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.java.iCareData.WeirdTestClass;
import main.java.iCareData.iCareDataInterface;

@CrossOrigin
@RestController
public class GreetingController {

	private static final String template = "Position:  %s";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		iCareDataInterface data = new WeirdTestClass();
		List<Point> oldPoints = new ArrayList<>();
		oldPoints.add(new Point(1, 1));
		List<Point> newPoints = data.getNewCoordinates(oldPoints);
		return new Greeting(counter.incrementAndGet(), String.format(template, "["+newPoints.get(0).x +","+newPoints.get(0).y+"]"));
	}
}