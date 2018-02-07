package server;

import java.io.Serializable;

public class Job implements Serializable {

	private static final long serialVersionUID = -154653282171166818L;
	private int a, b;
	private double c, d;

	public Job(int a, int b, double c, double d){
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
	}
	public int addInts() {
		return a + b;
	}
	
	public double addDoubles(){
		return c+d;
	}

	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}

	public double getC() {
		return c;
	}

	public void setC(double c) {
		this.c = c;
	}

	public double getD() {
		return d;
	}

	public void setD(double d) {
		this.d = d;
	}
	
}
