## Fit-Mind
Fit-Mind is a web application that helps users to track their fitness goals and progress. 


## Project Name FitMind

# Contributors
```
1. Ian Thiong'o
2. Tatiana Mathia
3. Neema Odire
4. Joseph Shonko
5. Kaisy Maina
6. Ian Njau
7. Joseph Shonko
```



### FitMind


# Overview

FitMind is a comprehensive application designed to help users maintain their mental and physical well-being. The application combines features for fitness challenges and mindfulness sessions, providing a holistic approach to personal health management.


## Project Structure


```
FitMind/
│
├── public/
│   │  
│   ├── client/
│   │   └── src/
              ├──components
│   │              
│   │   
│   └── server/
│       ├── models.py       
│       ├── routes.py            
│       ├── app.py
        └── Pipfile               
                  
└── README.md
```        

## Features
```
    User Management: Register and manage user accounts.
    Add Fitness Challenge: Allows users to add new fitness challenges.
    View Fitness Challenges: Displays a list of all fitness challenges.
    Update Fitness Challenge: Enables users to update existing challenges.
    Delete Fitness Challenge: Allows for the deletion of fitness challenges.
    Add Mindfulness Session: Users can add new mindfulness sessions.
    View Mindfulness Sessions: Displays all available mindfulness sessions.
    Delete Mindfulness Session: Allows users to delete sessions.
    Persistent Data Storage: Uses SQLite for data storage.
```
## Installation

Follow these steps to install and run the FitMind application on your local machine.
Prerequisites

    Python 3.8 installed on your system.
    Pipenv for managing dependencies.

Steps

1. Clone the Repository:

    
```
git clone https://github.com/lilThiosh/FitMind.git
cd FitMind
```

2. Set Up Virtual Environment:
Ensure pipenv is installed. If not, install it using:


```
pip install pipenv
```
3. Install Dependencies:
Use Pipenv to install all necessary packages
```
pipenv install
```
Activate the Virtual Environment:


```
pipenv shell
```
4. Initialize the Database:
Run the  script to create the required tables in the database:


```
python seed.py
```

5. Run the Application:
Launch the application:


```
    python app.py
```
    npm run dev 
## Contributions

Contributions to the FitMind project are welcome. Please follow these steps:
```
    Fork the repository.
    Create a new feature branch (git checkout -b feature/YourFeature).
    Commit your changes with descriptive messages.
    Push to your branch (git push origin feature/YourFeature).
    Open a pull request.
```

## License

©2024 FitMind. This project is licensed under the MIT License.
Contact

For any questions or feedback, please contact us at: Thiongoian6148@gmail.com
