Feature: Sirclo Test

  Scenario: Menampilkan halaman utama yang berisi pesan selamat datang dan penjelasan singkat website
  	When navigate to "main" page
  	Then showing greeting
 
	Scenario: Menampilkan halaman utama yang berisi pesan selamat datang dan penjelasan singkat website
  	When navigate to "login" page
  	Then showing login form
 
  Scenario: Mengembalikan redirect 3XX ketika Valid Login
  	When navigate to "login" page 
  	And input "root" for username & "root123" for password
  	And click login button
  	Then redirect to "3xx"
  	
  Scenario: Mengembalikan redirect 4XX ketika Invalid Login
  	When navigate to "login" page 
  	And input "Notroot" for username & "Notroot123" for password
  	And click login button
  	Then redirect to "4xx"

  Scenario: Mengembalikan redirect 3XX dan login kembali ketika sudah Valid Login
  	When navigate to "login" page 
  	And input "root" for username & "root123" for password
  	And click login button
  	Then redirect to "3xx" 
  	When navigate to "login" page
  	Then showing greeting
  	
  Scenario: Mengembalikan redirect 3XX ketika Logout
  	When navigate to "login" page 
  	And input "root" for username & "root123" for password
  	And click login button
  	Then redirect to "3xx"
  	When navigate to "logout" page
  	Then session id removed
  	
	Scenario: Menampilkan halaman login apabila GET data sebelum login
  	When navigate to "data" page
  	Then showing login form
  	
  Scenario: Menampilkan table data apabila GET data setelah login
  	When navigate to "login" page 
  	And input "root" for username & "root123" for password
  	And click login button
  	Then redirect to "3xx"
  	When navigate to "data" page
  	And filter by timestamp "2018-07-07" for start & "2018-07-10" for end
  	
  Scenario: Mengembalikan redirect 4XX ketika filter data timestamp start>end
  	When navigate to "login" page 
  	And input "root" for username & "root123" for password
  	And click login button 
  	When navigate to "data" page
  	And filter by timestamp "2018-07-10" for start & "2018-07-10" for end
  	Then redirect to "4xx"

  Scenario: Endpont selain /login, /data dan /logout menghasilkan respon 404
  	When navigate to "put" page
  	Then showing response

