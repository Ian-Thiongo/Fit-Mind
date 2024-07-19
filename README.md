## Fit-Mind
Fit-Mind is a web application that helps users to track their fitness goals and progress. It allows


## Project Name FitMind
Authors: Ian Thiong'o (Group Leader), Tatiana Mathis, Neema Odire, Charles Mumo, Kaisy Maina, Ian Njau, Joseph Shonko
FitMind
Overview

FitMind is a comprehensive application designed to help users maintain their mental and physical well-being. The application combines features for fitness challenges and mindfulness sessions, providing a holistic approach to personal health management.


## Project Structure

plaintext

FitMind/
│
├── fitmind/
│   ├── cli/
│   │   └── cli.py            # CLI logic
│   ├── models/
│   │   ├── user.py           # User model
│   │   ├── fitness_challenge.py # Fitness Challenge model
│   │   └── mindfulness_session.py # Mindfulness Session model
│   └── orm/
│       ├── database.py       # Database initialization
│       └── orm.py            # ORM class for database interaction
│
├── sql.py                    # SQL script for initializing the database
├── main.py                   # Main entry point for the CLI
├── Pipfile                   # Pipenv configuration file
└── README.md                 # Project documentation

## Features

    User Management: Register and manage user accounts.
    Add Fitness Challenge: Allows users to add new fitness challenges.
    View Fitness Challenges: Displays a list of all fitness challenges.
    Update Fitness Challenge: Enables users to update existing challenges.
    Delete Fitness Challenge: Allows for the deletion of fitness challenges.
    Add Mindfulness Session: Users can add new mindfulness sessions.
    View Mindfulness Sessions: Displays all available mindfulness sessions.
    Delete Mindfulness Session: Allows users to delete sessions.
    Persistent Data Storage: Uses SQLite for data storage.

## Installation

Follow these steps to install and run the FitMind application on your local machine.
Prerequisites

    Python 3.8 installed on your system.
    Pipenv for managing dependencies.

Steps

1. Clone the Repository:

    bash

git clone https://github.com/lilThiosh/FitMind.git
cd FitMind

2. Set Up Virtual Environment:
Ensure pipenv is installed. If not, install it using:

bash

pip install pipenv

3. Install Dependencies:
Use Pipenv to install all necessary packages:

bash

pipenv install

Activate the Virtual Environment:

bash

pipenv shell

4. Initialize the Database:
Run the SQL script to create the required tables in the database:

bash

python sql.py

5. Run the Application:
Launch the application:

bash

    python app.py

    npm run dev 
## Contributions

Contributions to the FitMind project are welcome. Please follow these steps:

    Fork the repository.
    Create a new feature branch (git checkout -b feature/YourFeature).
    Commit your changes with descriptive messages.
    Push to your branch (git push origin feature/YourFeature).
    Open a pull request.

## License

©2024 FitMind. This project is licensed under the MIT License.
Contact

For any questions or feedback, please contact us at: Thiongoian6148@gmail.com