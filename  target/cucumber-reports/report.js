$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TestMainSirclo.feature");
formatter.feature({
  "name": "Sirclo Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Menampilkan halaman utama yang berisi pesan selamat datang dan penjelasan singkat website",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"main\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "showing greeting",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.isGreeting()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Menampilkan halaman utama yang berisi pesan selamat datang dan penjelasan singkat website",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "showing login form",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.isForm()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mengembalikan redirect 3XX ketika Valid Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input \"root\" for username \u0026 \"root123\" for password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.fillAuth(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "redirect to \"3xx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.redirect(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mengembalikan redirect 4XX ketika Invalid Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input \"Notroot\" for username \u0026 \"Notroot123\" for password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.fillAuth(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "redirect to \"4xx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.redirect(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mengembalikan redirect 3XX dan login kembali ketika sudah Valid Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input \"root\" for username \u0026 \"root123\" for password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.fillAuth(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "redirect to \"3xx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.redirect(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "showing greeting",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.isGreeting()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mengembalikan redirect 3XX ketika Logout",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input \"root\" for username \u0026 \"root123\" for password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.fillAuth(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "redirect to \"3xx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.redirect(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"logout\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "session id removed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.loggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Menampilkan halaman login apabila GET data sebelum login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"data\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "showing login form",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.isForm()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Menampilkan table data apabila GET data setelah login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input \"root\" for username \u0026 \"root123\" for password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.fillAuth(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "redirect to \"3xx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.redirect(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"data\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "filter by timestamp \"2018-07-07\" for start \u0026 \"2018-07-10\" for end",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.filterData(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mengembalikan redirect 4XX ketika filter data timestamp start\u003eend",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input \"root\" for username \u0026 \"root123\" for password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.fillAuth(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"data\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "filter by timestamp \"2018-07-10\" for start \u0026 \"2018-07-10\" for end",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TestMainSirclo.filterData(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "redirect to \"4xx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.redirect(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Endpont selain /login, /data dan /logout menghasilkan respon 404",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"put\" page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TestMainSirclo.navigate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "showing response",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TestMainSirclo.badGateway()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});