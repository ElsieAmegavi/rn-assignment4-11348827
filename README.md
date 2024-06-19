# rn-assignment4-11348827
# Elsie Loise Amegavi

The assignment is to build a two page app using react-native. The first page is a Login page and the second page is the Home page or the landing page. There components in this app are divided into folders in the src folder which are: pages and components. In all, there are nine components and then there is the App.js file that serves as the route file for the pages. Stack navigation was used in navigating from one page to another. The components are used in the pages to help avoid the repition of similar code in the react-native app.

**Login.js**
    The Login.js component is where all the code in relation to the login-page is stored. It is also where the components Header.js, SocialLoginButton.js and InputField.js are being used. Core components such as  StyleSheet, Text, View and  TouchableOpacity are used to get the functionalities that are seen on the Login page. StyleSheet is used to style the core components. View is the container that holds other components.

**Home.js**
    The Home.js component is where all the code for the Home page is being stored. It is also where the components HomeHeader.js,SearchBar.js,FeaturedJobs.js and PopularJobs.js are being used. Core components such as StyleSheet, Text, and View are used to get the functionalities that are seen on the Home page.  StyleSheet is used to style the core components. View is the container that holds other components. Text is used to display text elements in the UI.

**Header.js**
    The Header.js component is used where the code for the Header component in the login-page. It contains core components like the View, Text and styleSheet which is used to style elements in the header. On th UI, the header component is found at the top-left part of the screen displaying, "Jobizz" as one text, "Welcome Back 👋" as another and "Let's log in. Apply to jobs!" as the last text found in the header.

**Input Field.js**
    The InputField.js component is where the code for the section where the name and email must be entered to login. It contains core components like the TextInput that holds the parameter placeholder that is called in the Login.js and allows the user to create as many input fields as they want and StyleSheet that is used to style elements in the header.

**SocialLoginButton.js** 
    The SocialLoginButton.js component is where the buttons on the login-page that represent the social media you can use to login to the app is. They are passed as a parameter that is called on the Login-page there-by making the buttons functional if need be. Core components such as StyleSheet, Image and TouchableOpacity are used to style the page, create the button and make it functional and nicely style in the UI.

**HomeHeader.js**
    The HomeHeader.js component is where the code for the header of the home page can be found. After logging in on the login-page the information entered in the input fields is then stored and used when the user is navigated to the home page, in addition to a picture of the user. The core components used in this component are Image, View, Text and StyleSheet.

**FeaturedJobs.js**
    The FeaturedJobs.js component is where the code for the Featured Jobs section in the home page can be found. This page has core components like View, Text, StyleSheet, Image and FlatList for styling and ensuring the UI appears as it is suppose to. The FlatList component allows the Features jobs in this section to be scrolled from left to right and vice versa. It uses an array to store the data on the jobs that are featured.

**PopularJobs.js**
    The PopularJobs.js component is where the code for the Popular jobs section can be found. Core components like View, Text, StyleSheet, Image and ScrollView  for styling and ensuring the UI appears as it is suppose to. The ScrollView component allows the Features jobs in this section to be scrolled from up to down and vice versa.  It uses an array to store the data on the jobs that are featured.

**SearchBar.js**
The SearchBar.js component implements a search bar with an input field and a settings button. It uses core components like View, TextInput, StyleSheet, TouchableOpacity, and Image from React Native, as well as the Ionicons from the @expo/vector-icons library. The component is styled to ensure a clean and user-friendly interface. The search bar allows users to input search terms, and the settings button, represented by an icon, provides additional functionality. The search input and settings button are visually integrated for a cohesive look.


![Screenshot 1](Jobizz-app\assets\login-page.jpeg)
![Screenshot 2](Jobizz-app\assets\home-page1.jpeg)
![Screenshot 3](Jobizz-app\assets\home-page2.jpeg)