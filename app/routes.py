from flask import Blueprint, request, jsonify
from app import db  # Adjust the import statement for db
from app.models import User, Goal, Challenge  # Adjust imports for models
from app.schemas import UserSchema, GoalSchema, ChallengeSchema  # Adjust imports for schemas

bp = Blueprint('api', __name__)

user_schema = UserSchema()
users_schema = UserSchema(many=True)
goal_schema = GoalSchema()
goals_schema = GoalSchema(many=True)
challenge_schema = ChallengeSchema()
challenges_schema = ChallengeSchema(many=True)

@bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return users_schema.jsonify(users)

@bp.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return user_schema.jsonify(user)

@bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(username=data['username'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return user_schema.jsonify(new_user), 201

@bp.route('/goals', methods=['GET'])
def get_goals():
    goals = Goal.query.all()
    return goals_schema.jsonify(goals)

@bp.route('/goals', methods=['POST'])
def create_goal():
    data = request.get_json()
    new_goal = Goal(description=data['description'], user_id=data['user_id'])
    db.session.add(new_goal)
    db.session.commit()
    return goal_schema.jsonify(new_goal), 201

@bp.route('/goals/<int:id>', methods=['PUT'])
def update_goal(id):
    goal = Goal.query.get_or_404(id)
    data = request.get_json()
    goal.description = data['description']
    goal.completed = data.get('completed', goal.completed)
    db.session.commit()
    return goal_schema.jsonify(goal)

@bp.route('/challenges', methods=['GET'])
def get_challenges():
    challenges = Challenge.query.all()
    return challenges_schema.jsonify(challenges)

@bp.route('/challenges/<int:id>', methods=['GET'])
def get_challenge(id):
    challenge = Challenge.query.get_or_404(id)
    return challenge_schema.jsonify(challenge)
