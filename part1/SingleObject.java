package part1;

public class SingleOBject() {
	//create object of SingleObject
	private static SingleObject instance = new SingleObject();
	//make constructor private so class cannot be instantiated
	private SingleObject() {}
	
	//get the only object available
	public static SingleObject getInstance() {
		return instance;
	}
	
	public void showMessage() {
		System.out.println("Hello World!");
	}
}