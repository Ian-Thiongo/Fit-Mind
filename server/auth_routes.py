from flask import Blueprint, request, jsonify
from models import db, User
from werkzeug.security import generate_password_hash, check_password_hash

auth_routes = Blueprint('auth_routes', __name__)

@auth_routes.route('/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_password = generate_password_hash(data['password'])  # Use default method
    new_user = User(username=data['email'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'token': 'mockToken'}), 201

@auth_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'token': 'mockToken'}), 200
    return jsonify({'error': 'Invalid credentials'}), 401
