'use strict';

angular.module('myApp.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume/resume.html',
    controller: 'ResumeCtrl'
  });
}])

.controller('ResumeCtrl', ['$scope', '$window', function($scope, $window) {
	$scope.resumeSections = [
		{
			"title" : "education",
			"entries" : [
				{
					"startDate" : "09.08",
					"endDate" : "06.15",
					"title" : "Stanford University",
					"location" : "Stanford, California",
					"description" : [
						"M.S. Computer Science. Class of 2015, GPA 3.9/4.0",
						"B.S. Product Design Engineering. Class of 2012, GPA 3.5/4.0"
					]
				},
				{
					"startDate" : "09.10",
					"endDate" : "03.11",
					"title" : "Strate Collège & Stanford University",
					"location" : "Paris, France",
					"description" : [
						"Study Abroad Program, Coursework: Economic theory, Design methodology, and French."
					]
				}
			]
		},
		{
			"title" : "work experience",
			"entries" : [
				{
					"startDate" : "07.15",
					"endDate" : "04.17",
					"title" : "Product Manager",
					"location" : "Square, San Francisco",
					"description" : [
						"Led strategy development, execution and growth of Square ’s mobile API products which are at the core of the company-wide effort to build a commerce platform.",
						"Drove development and pilot of Square’s first SDK that enables 3rd party developers to integrate Square payment hardware directly in their own applications, facilitating Square’s partnerships with point-of-sale providers and upmarket merchants.",
						"Led the team that conceptualized, built and launched a payment product enabling merchants to store cards on file at the point-of-sale and charge those card across e-commerce, invoicing, and in-person transactions; a product that has become one of our fastest growing point-of-sale offerings."
					]					
				},
				{
					"startDate" : "01.13",
					"endDate" : "01.15",
					"title" : "Computer Science Course Assistant",
					"location" : "Stanford University",
					"description" : [
						"Section lead, graded, and held office hours for Computer Organization and Systems, a class of ~250.",
						"Held office hours and graded assignments for Principles of Computer Systems, a class of ~150."
					]					
				},
				{
					"startDate" : "06.14",
					"endDate" : "08.14",
					"title" : "Software Engineering Intern",
					"location" : "Google, San Francisco",
					"description" : [
						"Worked on Google Cloud Platform’s team responsible for the Google Developer Console",
						"Refactored large Java module into a more RESTful interface for retrieving API credential data.",
						"Implemented a responsive filtering mechanism for the API list page in AngularJS and improved page rendering time by 5x."
					]					
				},
				{
					"startDate" : "02.13",
					"endDate" : "08.13",
					"title" : "Software Engineering Intern",
					"location" : "Google, Paris",
					"description" : [
						"Designed, built, and launched a user experience for viewing and exploring layered artifacts, from x-rays of paintings and manuscripts to then and now imagery, on the Cultural Institute’s website.",
						"Implemented an email parser that scraped data from Amazon France emails that was used to automatically generate Google Now cards in France."
					]					
				},
				{
					"startDate" : "06.12",
					"endDate" : "09.12",
					"title" : "Product Intern",
					"location" : "The Climate Corporation, San Francisco",
					"description" : [
						"Redesigned the structure and layout for a Climate Corp. product that garners ~26% of page views. This included working on projects from analyzing user data to developing wireframe prototypes for the 2013 product offering.",
						"Conducted user tests and market research on a new Climate Corp. product and synthesized findings into product"
					]					
				},	
			]
		}
	];
	
	$scope.projectSection = {
		"title" : "Projects & Collaboration",
		"entries" : [
			{
				"title" : "Product Redesign : Lendeavor",
				"description" : "Working with co-founders of lending platform start-up to redesign their website and help define product vision."
			},
			{
				"title" : "API Charting Tool : Kimono Labs",
				"description" : "Developed a tool for creating dynamic charts based on data from APIs built on Kimono using ANgularJS, C3, and D3."
			},
			{
				"title" : "User Research : Spire",
				"description" : "Conducted and synthesized user research, informing product decisions for Spire's breath tracking device."
			}
		]
	};
	
	$scope.otherSection =	{
		"title" : "Other",
		"entries" : [
			{
				"title" : "Programming",
				"description" : "C, C++, Java, JS, AngularJS -- some work in: Python, Ruby (on Rails), NodeJS, MongoDB, MySql, Hadoop"
			},
			{
				"title" : "Honors & Awards",
				"description" : "Stanford Award of Excellence (Class of 2012), Facebook Grace Hopper Scholarship Recipient (2013)"
			},
			{
				"title" : "Languages",
				"description" : "French (Advanced), Italian & Spanish (Basic) "
			},
			{
				"title" : "Interests",
				"description" : "Cycling, skiing, really good coffee, podcasts, traveling & exploring new cities..."
			}
		]
	};

}]);