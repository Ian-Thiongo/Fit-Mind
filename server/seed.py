from app import app, db
from models import User, Goal, FitnessChallenge, MindfulnessSession
from werkzeug.security import generate_password_hash, check_password_hash


def seed_data():
    # Creating users with hashed passwords
    user1 = User(
        username='john_doe',
        email='john@example.com',
        password=generate_password_hash('password', method='sha256'),
        avatar=None,  # You can update this with a valid URL or path if needed
        bio='A fitness enthusiast',
        hobbies='Running, Yoga',
        nationality='American',
        gender='Male'
    )
    
    user2 = User(
        username='jane_doe',
        email='jane@example.com',
        password=generate_password_hash('password', method='sha256'),
        avatar=None,  # You can update this with a valid URL or path if needed
        bio='Loves outdoor activities',
        hobbies='Hiking, Cycling',
        nationality='Canadian',
        gender='Female'
    )

    goal1 = Goal(user=user1, title='Lose Weight', description='Lose 10 pounds in 3 months', is_completed=False)
    goal2 = Goal(user=user2, title='Run Marathon', description='Complete a marathon in under 4 hours', is_completed=False)

    challenge1 = FitnessChallenge(title='30 Day Yoga Challenge', description='Do yoga every day for 30 days')
    challenge2 = FitnessChallenge(title='100 Push-ups a Day', description='Do 100 push-ups every day for 30 days')

    session1 = MindfulnessSession(title='Morning Meditation', description='Meditate for 15 minutes every morning', duration=15)
    session2 = MindfulnessSession(title='Evening Relaxation', description='Relax with deep breathing for 10 minutes every evening', duration=10)

    db.session.add_all([user1, user2, goal1, goal2, challenge1, challenge2, session1, session2])
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        seed_data()
        print("Database seeded!")
