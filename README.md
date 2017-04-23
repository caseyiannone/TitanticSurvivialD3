# TitanticSurvivialD3

## Initial Review of Titanic Data

Working through some of the submissions in Kaggle's Titanic competition it was evident that sex, age, and fare have the largest impact on surviving the Titanic. With this in mind I begin by exploring the makeup of the dataset with the end goal of using some combination of these variables to create an explanatory data visualization.

### Layout of Titanic Data: 'data.frame':	891 obs. of  12 variables:
	 $ PassengerId: int  1 2 3 4 5 6 7 8 9 10 ...
	 $ Survived   : int  0 1 1 1 0 0 0 0 1 1 ...
	 $ Pclass     : int  3 1 3 1 3 3 1 3 3 2 ...
	 $ Name       : chr  "Braund, Mr. Owen Harris" "Cumings, Mrs. John Bradley (Florence Briggs Thayer)" "Heikkinen, Miss. Laina" "Futrelle, Mrs. Jacques Heath (Lily May Peel)" ...
	 $ Sex        : chr  "male" "female" "female" "female" ...
	 $ Age        : num  22 38 26 35 35 NA 54 2 27 14 ...
	 $ SibSp      : int  1 1 0 1 0 0 0 3 0 1 ...
	 $ Parch      : int  0 0 0 0 0 0 0 1 2 0 ...
	 $ Ticket     : chr  "A/5 21171" "PC 17599" "STON/O2. 3101282" "113803" ...
	 $ Fare       : num  7.25 71.28 7.92 53.1 8.05 ...
	 $ Cabin      : chr  "" "C85" "" "C123" ...
	 $ Embarked   : chr  "S" "C" "S" "S" ...

### Summary of Titanic Data

	PassengerId       Survived          Pclass          Name               Sex           
	 Min.   :  1.0   Min.   :0.0000   Min.   :1.000   Length:891         Length:891        
	 1st Qu.:223.5   1st Qu.:0.0000   1st Qu.:2.000   Class :character   Class :character  
	 Median :446.0   Median :0.0000   Median :3.000   Mode  :character   Mode  :character  
	 Mean   :446.0   Mean   :0.3838   Mean   :2.309                                        
	 3rd Qu.:668.5   3rd Qu.:1.0000   3rd Qu.:3.000                                        
	 Max.   :891.0   Max.   :1.0000   Max.   :3.000                                        
                                                                                       
      Age            SibSp           Parch           Ticket               Fare       
	 Min.   : 0.42   Min.   :0.000   Min.   :0.0000   Length:891         Min.   :  0.00  
	 1st Qu.:20.12   1st Qu.:0.000   1st Qu.:0.0000   Class :character   1st Qu.:  7.91  
	 Median :28.00   Median :0.000   Median :0.0000   Mode  :character   Median : 14.45  
	 Mean   :29.70   Mean   :0.523   Mean   :0.3816                      Mean   : 32.20  
	 3rd Qu.:38.00   3rd Qu.:1.000   3rd Qu.:0.0000                      3rd Qu.: 31.00  
	 Max.   :80.00   Max.   :8.000   Max.   :6.0000                      Max.   :512.33  
	 NA's   :177                                                                         
    Cabin             Embarked        
	 Length:891         Length:891        
	 Class :character   Class :character  
	 Mode  :character   Mode  :character

### Visual Layout of Titanic Data: head(df, n=3)

	PassengerId Survived Pclass                                                Name    Sex Age
	1           1        0      3                             Braund, Mr. Owen Harris   male  22
	2           2        1      1 Cumings, Mrs. John Bradley (Florence Briggs Thayer) female  38
	3           3        1      3                              Heikkinen, Miss. Laina female  26
	  SibSp Parch           Ticket    Fare Cabin Embarked
	1     1     0        A/5 21171  7.2500              S
	2     1     0         PC 17599 71.2833   C85        C
	3     0     0 STON/O2. 3101282  7.9250              S



## D3 Mockups in R

Now that I have an understanding of the data I'd like to see how I can combine as many varibles as possible into a single visulization with the intent to showcase that female passenegrs who paid a fare of $50 + survived in greater proportion to female passengers overall.

### Passenger Survival by Sex

![Passenger Survival by Sex Histogram](https://cloud.githubusercontent.com/assets/11824911/25071456/cc041516-2285-11e7-81b3-2afd2afd0f4f.png)

![Passenger Survival by Sex Mosaicplot](https://cloud.githubusercontent.com/assets/11824911/25318305/a0a4e3b2-2859-11e7-852d-47f101f3c6e8.png)

### Passenger Survival by Sex, Age, and Fare Paid
![Proposed D3 Visulization](https://cloud.githubusercontent.com/assets/11824911/25071465/55006edc-2286-11e7-8d83-dd19f7f78e16.png)

This visulization provides the most information (five variables) into a single visulziation, which will provide our viewer with the best understanding as to what impacted survival rates of the Titanic.

## Initial D3 Visulization

### Design Concept

While in the R visulization we are able see some stark differences among the male and female faceted grid I want to combine this into a single visulziation. However, putting all of these data points into a single visual will make it hard for viewers to distinguish overall patterns. My initial idea was to map five variables into a single visulization, which was my . After further reflection and feedback from my Udacity reviewer I decided to create a dashoard to better explain survival on the Titanic in a more clear manner. From my review in R I decided that I will focus on three main variables: age, fare and sex. Based upon my exploration in R and what others have found in from reading the Kaggle blog, these three factors were major contributors that impacted a passengers survival rate on the Titanic.


[Titanic D3 Visulization Before Recieveing Feedback](https://bl.ocks.org/caseyiannone/dd9b5fcdd2140af221ffa2df22296d2c)

#### Main Points of Feedback Recieved from 3 Individuals:
* Overall speed of visulization shift is too fast to see how the data is actually changining.
	* Visulization streched too wide to take in all information before shift. 
* Some of the visulization information is cut off by overall size of graph. 
* Scaling of visulization was confusing.
	* Is the scaling done to represent a third point?
* Hard to distinguish male vs female points.

	
#### My Own Self-Reflection:
* Don't like the background color. Would prefer a more simplistic view of the visulization, like the theme_few in R.
* I should remove more text so a viewer's focus is completely on the shifting data points. I can explain what is happening in the summary.
* Data points appear to not be correctly plotted based on what these points look like in my R plots. I need to adjust the scaling.
* Add in Bootstrap formatting to have cleaner text.
* Have consistent point size and increase point size slightly, as the larger points are too big and make it difficult to distinguish individual points.
* Shift title further to the top left corner, as people's eye begin their naturally and I want them to have that context first.

## Single D3 Visulization

[Titanic D3 Visulization AFter Recieveing Feedback](https://bl.ocks.org/caseyiannone/66ea1eba759e5d6fd2ca8d0bffb02f93)

**Things that have Changed between these submissions:**

* If trying to show comparison regrading survival of all female passengers to female passengers that paid $50+ you should adjust the opacity of female passengers that paid less than $50 for comparison.
	* Adjusted the titles and descriptions
	* Corrected scaling of points to reflect true x/y positions of passenegers
	* Adjusted opacity so viewer can see female passenegers that did not pay $50+ dollars for their tickets so as to compare them to the female passengers that did.
	* Adjusted randomizer to increase visability into the differences between female passengers that paid $50+ and those that did not.
	* Adjusted timing of transitions to better aligned with visluzation best practices so viewer cues to main points of visluzing differences among female passengers.
	* Removed male legend componets so viewer's focus is soley on female passengers and the differce aomng those who paid $50+ and those that did not.

## Revisions After Udacity Submission

### Summary of Dashboard

In the tragic sinking of the Titanic, 68% of the passengers on board perished. However, there is a large difference in the chance of survival across passenger sex as well as in age and fare paid. This data visualizations aim to emphasis the difference survival chance across categories, so that the viewers can compare it easily. Moreover, interactive chart allows the viewers to explore the category of interest on their own.

![Final D3 Submission: Titanic Dashboard](https://cloud.githubusercontent.com/assets/11824911/25318340/69da55aa-285a-11e7-85f8-ee84891730c5.gif)


### Data Cleaning
With my new direction in trying to provide as much clarity as possible around these three variables, I decided to create two new variables (FareGroup and AgeGroup). I created these two variables to better showcase the stark differences in the respectives groups for each variable so my audience can more easily distinguish what is taking place in the visual.

#### *AgeGroup*
df$AgeGroup[df$Age < 15] <- 'Child'
df$AgeGroup[df$Age > 15 & df$Age <= 60] <- 'Middle Aged'
df$AgeGroup[df$Age >= 60] <- 'Elder'

#### *FareGroup*
df$FareGroup[df$Fare < 50] <- 'Under 50'
df$FareGroup[df$Fare >= 50] <- 'Over 50'

### Chart Selections:

I decided to move away from using a scatter plot to present multiple points, as the feedback was given by reviewer that scatter plots can be difficult to interupt for some viewers and aren't typically used in explanatory visualization. 

##### Survival Rate by Age Group Chart
* Bar chart is easy to understand and good for comparison. So a bar chart is used to show the differences across passenger sex.
	* I use color to present whether one was survived or perished and passenger sex.
##### Survival Rate by Passenger Sex & Survival Rate by Passenger Sex & Fare Paid Charts
* Stacked 100% bar chart are used to show the comparison of the chance of survival for AgeGroup and FareGroup.
	* Stacked bar chart uses color to encode another category of data.
		* I use it to present whether one was survived or perished in the Survival Rate by Passenger Sex chart.
		* I use it to present whether one was survived or perished and passenger sex in the Survival Rate by Passenger Sex & Fare Paid chart.


## Resources 

[Udacity D3 Course](https://www.udacity.com/course/data-visualization-and-d3js--ud507)

[Kaggle Titanic Competition](https://www.kaggle.com/c/titanic)

[Dimple JS](http://dimplejs.org/)

[D3 Docs](https://d3js.org/)

[Let's Make a Bar Chart by: Mike Bostock's](https://bost.ocks.org/mike/bar/2/)

[Bl.ocks Gist](https://bl.ocks.org/-/about)

[Manipulating Data Like a Boss with D3](http://www.jeromecukier.net/blog/2012/05/28/manipulating-data-like-a-boss-with-d3/)



