package com.sirclo.test.driver.strategies;


import com.sirclo.test.utils.Constants;

public class DriverStrategyImplementer {
	
	public static DriverStrategy chooseStrategy(String strategy) {
		switch(strategy) {
		
		case Constants.Chrome :
			return new Chrome();
		
		case Constants.Firefox :
			return new Firefox();
			
		default : 
			return null;
		}
	}
}
