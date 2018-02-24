package iCareData;

import java.awt.Point;
import java.util.List;
import java.util.Random;

public class WeirdTestClass implements iCareDataInterface{

	@Override
	public List<Point> getNewCoordinates(List<Point> oldCoordinates) {
		Random randomGenerator = new Random();
		int randomNumber;
		for (Point point : oldCoordinates) {
			randomNumber = randomGenerator.nextInt(1);
			if(randomNumber == 1){
				point.x++;
			}
			else {
				point.x--;
			}
				
			randomNumber = randomGenerator.nextInt(1);
			if(randomNumber == 1){
				point.y++;
			}
			else {
				point.y--;
			}
		}
		return oldCoordinates;
	}



}
