package steps;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Set;

import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;

import com.sirclo.test.pages.Main;
import com.sirclo.test.utils.Constants;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TestMainSirclo {
	private static WebDriver driver;
	private Main main = new Main();
	
	public TestMainSirclo() {
		driver = Hook.driver;
	}
	
	@When("navigate to {string} page")
	public void navigate(String url) {
		if (url.equalsIgnoreCase("login")) {
			driver.get(Constants.base_url+"/login");
		} else if (url.equalsIgnoreCase("data")) {
			driver.get(Constants.base_url+"/data");
		} else if (url.equalsIgnoreCase("main")) {
			driver.get(Constants.base_url);
		} else if(url.equalsIgnoreCase("logout")) {
			driver.get(Constants.base_url+"/logout");
		} else {
			driver.get(Constants.base_url+"/"+url);
		}
	}
	
	@When("navigate to {string}")
	public void navigateOther(String other) {
		driver.get(Constants.base_url+"/"+other);
	}
	
	@And("input {string} for username & {string} for password")
	public void fillAuth(String username,String password) {
		main.fillAuth(username, password);
	}
	
	@And("click login button")
	public void clickLogin() {
		main.clickLogin();
	}
	
	@And("filter by timestamp {string} for start & {string} for end")
	public void filterData(String start,String end) {
		main.filterTimeStamp(start, end);
	}
	
	
	@Then("showing greeting")
	public void isGreeting() {
		assertTrue(main.greetingIsDisplayed());
	}
	
	@Then("showing login form")
	public void isForm() {
		assertTrue(main.formIsDisplayed());
	}
	
	@Then("redirect to {string}")
	public void redirect(String response) {
		if (response.equalsIgnoreCase("3xx")) {
			//String currentUrl = driver.getCurrentUrl();
			//				HttpURLConnection status = (HttpURLConnection)new URL(currentUrl)
			//					      .openConnection();
			//				int actual = status.getResponseCode();
			//				assertEquals(actual,200);
			Set<Cookie> cookies = driver.manage().getCookies();
	        System.out.println("Cookie : " + cookies.size());
			SessionId session = ((RemoteWebDriver) driver).getSessionId();
			System.out.println("Session ID : "+session);
		}else if (response.equalsIgnoreCase("4xx")) {
			Set<Cookie> cookies = driver.manage().getCookies();
	        System.out.println("Cookie : " + cookies.size());
			SessionId session = ((RemoteWebDriver) driver).getSessionId();
			System.out.println("Session ID : "+session);
		}
	}
	
	@Then("session id removed")
	public void loggedOut() {
		Set<Cookie> cookies = driver.manage().getCookies();
        System.out.println("Cookie : " + cookies.size());
		SessionId session = ((RemoteWebDriver) driver).getSessionId();
		System.out.println("Session ID : "+session);
	}
	
	@Then("showing response")
	public void badGateway() {
		String currentUrl = driver.getCurrentUrl();
						
						try {
							HttpURLConnection status;
							status = (HttpURLConnection)new URL(currentUrl)
								      .openConnection();
							int actual = status.getResponseCode();
							System.out.println("Repsonse = "+actual);
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					
		//				assertEquals(actual,200);
	}
	
	
}
