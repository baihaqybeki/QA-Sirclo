package runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "src/test/resources/Features", 
				glue = "steps",
				plugin = { "pretty","html: target/cucumber-reports", "json: target/cucumber-reports/palindrome.json" })
public class TestRunner extends AbstractTestNGCucumberTests{

}
