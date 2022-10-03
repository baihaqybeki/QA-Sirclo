package com.sirclo.test.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.sirclo.test.driver.DriverSingleton;



public class Main {
	
	private WebDriver driver;
	
	public Main() {
		this.driver=DriverSingleton.getDriver();
		PageFactory.initElements(driver, this);
	}
	
	//locator
	@FindBy(xpath="/html/body/h1")
	private WebElement greetings;
	
	@FindBy(xpath="/html/body/form/input[1]")
	private WebElement fieldUsername;
	
	@FindBy(xpath="/html/body/form/input[2]")
	private WebElement fieldPassword;
	
	@FindBy(xpath="/html/body/form/input[3]")
	private WebElement loginBtn;
	
	@FindBy(xpath="/html/body/form/input[1]")
	private WebElement timeStampStart;
	
	@FindBy(xpath="/html/body/form/input[2]")
	private WebElement timeStampEnd;
	
	@FindBy(xpath="/html/body/form/input[3]")
	private WebElement filterBtn;
	
	@FindBy(xpath="result")
	private WebElement resultFilter; 
	
	//method
	public Boolean greetingIsDisplayed() {
		return greetings.isDisplayed();
	}
	
	public Boolean formIsDisplayed() {
		return (fieldUsername.isDisplayed()&&fieldPassword.isDisplayed()&&loginBtn.isDisplayed());
	}
	
	public void fillAuth(String username,String password) {
		fieldUsername.sendKeys(username);
		fieldPassword.sendKeys(password);
	}
	
	public void clickLogin() {
		loginBtn.click();
	}
	
	public void filterTimeStamp(String start,String end) {
		delay(1);
		timeStampStart.sendKeys(start);
		timeStampEnd.sendKeys(end);
		filterBtn.click();
		delay(1);
	}
	
	static void delay(int seconds) {
		try {
			Thread.sleep(seconds*1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}


