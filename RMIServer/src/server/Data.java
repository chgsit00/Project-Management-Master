package server;

import java.io.Serializable;

public class Data implements Serializable{

	private static final long serialVersionUID = 2820876747603443415L;
	private int a;
	private double b;
	public Data(int a, double b){
		this.a = a;
		this.b = b;
	}
	public int getA() {
		return a;
	}
	public void setA(int a) {
		this.a = a;
	}
	public double getB() {
		return b;
	}
	public void setB(double b) {
		this.b = b;
	}
}
