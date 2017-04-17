# TitanticSurvivialD3

## Initial Review of Titanic Data

Working through some of the submissions in the Kaggle Titanic competition it was evident that sex, age, and fare have the largest impact on surviving the Titanic. With this in mind I begin by exploring the makeup of the dataset.

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

Now that I have an understanding of the data I'd like to see how I can combine as many varibles as possible into a single visulization with the intent to showcase that women who paid a fare of $50 + survived in greater proportion than women overall.

### Passenger Survival by Sex

![Passenger Survival by Sex](https://cloud.githubusercontent.com/assets/11824911/25071456/cc041516-2285-11e7-81b3-2afd2afd0f4f.png)

### Passenger Survival by Sex, Age, and Fare Paid
![Proposed D3 Visulization](https://cloud.githubusercontent.com/assets/11824911/25071465/55006edc-2286-11e7-8d83-dd19f7f78e16.png)

This visulization provides the most information (five variables) into a single visulziation, which will provide our viewer with the best understanding as to what impacted survival rates of the Titanic.

## Initial D3 Visulization

### Design Concept

While in the R visulization we are able see some stark differences among the male and female faceted grid I want to combine this into a single visulziation. However, putting all of these data points into a single visual will make it hard for viewers to distinguish overall patterns. With D3 we can add in transitional elements to help viewers tease out these patterns. So we start with all data points, move on to female only points with fares paid over $50 to demostrate the overall impact on survival. I also want to include some randomness into this plot as well, so that each time the visulization is refreshed the the same points will be seen in a new light to reinforce the impact.

[Titanic D3 Visulization Before Recieveing Feedback](https://bl.ocks.org/caseyiannone/dd9b5fcdd2140af221ffa2df22296d2c)

#### Main Points of Feedback Recieved from 3 Individuals:
* Overall speed of visulization shift is too fast to see how the data is actually changining.
	* Visulization streched too wide to take in all information before shift. 
* Some of the visulization information is cut off by overall size of graph. 
* Scaling of visulization was confusing.
	* Is the scaling done to represent a third point?
* Hard to distinguish male vs female points.
* Adjusted the opacity to show all female passengers compared to my target group of female passengers who paid $50+ so viwers can more easily compare that subset to the larger group of female passengers. 
	
#### My Own Self-Reflection:
* Don't like the background color. Would prefer a more simplistic view of the visulization, like the theme_few in R.
* I should remove more text so a viewer's focus is completely on the shifting data points. I can explain what is happening in the summary.
* Data points appear to not be correctly plotted based on what these points look like in my R plots. I need to adjust the scaling.
* Add in Bootstrap formatting to have cleaner text.
* Have consistent point size and increase point size slightly, as the larger points are too big and make it difficult to distinguish individual points.
* Shift title further to the top left corner, as people's eye begin their naturally and I want them to have that context first.

## Final D3 Visulization

[Titanic D3 Visulization After Recieveing Feedback](https://bl.ocks.org/caseyiannone/66ea1eba759e5d6fd2ca8d0bffb02f93)

### Summary of Visulization

* Proportionaly, female passengers that paid a higher fare were had a higher rate of survival than female passengers that paid lower fares. (Which is showcased by the visulization, as was the goal)

## Resources 

[Udacity D3 Course](https://www.udacity.com/course/data-visualization-and-d3js--ud507)

[Kaggle Titanic Competition](https://www.kaggle.com/c/titanic)

[D3 Docs](https://d3js.org/)

[Let's Make a Bar Chart by: Mike Bostock's](https://bost.ocks.org/mike/bar/2/)

[Bl.ocks Gist](https://bl.ocks.org/-/about)

[Manipulating Data Like a Boss with D3](http://www.jeromecukier.net/blog/2012/05/28/manipulating-data-like-a-boss-with-d3/)



