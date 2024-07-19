from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    nationality = db.Column(db.String(50))
    description = db.Column(db.Text)
    hobbies = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'nationality': self.nationality,
            'description': self.description,
            'hobbies': self.hobbies
        }

class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    is_completed = db.Column(db.Boolean, default=False)
    user = db.relationship('User', backref=db.backref('goals', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'description': self.description,
            'is_completed': self.is_completed
        }

class FitnessChallenge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description
        }

class UserFitnessChallenge(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    fitness_challenge_id = db.Column(db.Integer, db.ForeignKey('fitness_challenge.id'), primary_key=True)
    start_date = db.Column(db.Date)
    user = db.relationship('User', backref=db.backref('user_fitness_challenges', lazy=True))
    fitness_challenge = db.relationship('FitnessChallenge', backref=db.backref('user_fitness_challenges', lazy=True))

    def to_dict(self):
        return {
            'user_id': self.user_id,
            'fitness_challenge_id': self.fitness_challenge_id,
            'start_date': self.start_date
        }

class MindfulnessSession(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    duration = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'duration': self.duration
        }

class UserMindfulnessSession(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    mindfulness_session_id = db.Column(db.Integer, db.ForeignKey('mindfulness_session.id'), primary_key=True)
    completion_date = db.Column(db.Date)
    user = db.relationship('User', backref=db.backref('user_mindfulness_sessions', lazy=True))
    mindfulness_session = db.relationship('MindfulnessSession', backref=db.backref('user_mindfulness_sessions', lazy=True))

    def to_dict(self):
        return {
            'user_id': self.user_id,
            'mindfulness_session_id': self.mindfulness_session_id,
            'completion_date': self.completion_date
        }
