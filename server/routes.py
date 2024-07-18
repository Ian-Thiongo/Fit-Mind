from flask import Blueprint, request, jsonify
from models import db, User, Goal, FitnessChallenge, UserFitnessChallenge, MindfulnessSession, UserMindfulnessSession
from werkzeug.security import generate_password_hash, check_password_hash

user_routes = Blueprint('user_routes', __name__)
goal_routes = Blueprint('goal_routes', __name__)
challenge_routes = Blueprint('challenge_routes', __name__)
session_routes = Blueprint('session_routes', __name__)
auth_routes = Blueprint('auth_routes', __name__)

# User Routes
@user_routes.route('/', methods=['POST'])
def create_user():
    data = request.json
    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

@user_routes.route('/', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200

# Goal Routes
@goal_routes.route('/', methods=['POST'])
def create_goal():
    data = request.json
    goal = Goal(**data)
    db.session.add(goal)
    db.session.commit()
    return jsonify(goal.to_dict()), 201

@goal_routes.route('/', methods=['GET'])
def get_goals():
    goals = Goal.query.all()
    return jsonify([goal.to_dict() for goal in goals]), 200

# Fitness Challenge Routes
@challenge_routes.route('/', methods=['POST'])
def create_challenge():
    data = request.json
    challenge = FitnessChallenge(**data)
    db.session.add(challenge)
    db.session.commit()
    return jsonify(challenge.to_dict()), 201

@challenge_routes.route('/', methods=['GET'])
def get_challenges():
    challenges = FitnessChallenge.query.all()
    return jsonify([challenge.to_dict() for challenge in challenges]), 200

# Mindfulness Session Routes
@session_routes.route('/', methods=['POST'])
def create_session():
    data = request.json
    session = MindfulnessSession(**data)
    db.session.add(session)
    db.session.commit()
    return jsonify(session.to_dict()), 201

@session_routes.route('/', methods=['GET'])
def get_sessions():
    sessions = MindfulnessSession.query.all()
    return jsonify([session.to_dict() for session in sessions]), 200


# Signup Route
@auth_routes.route('/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(
        username=data['email'],
        email=data['email'],
        password=hashed_password
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'token': 'mockToken'}), 201

# Login Route
@auth_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'token': 'mockToken'}), 200
    return jsonify({'error': 'Invalid credentials'}), 401
