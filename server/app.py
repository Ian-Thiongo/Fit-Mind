from flask import Flask, jsonify
from flask_cors import CORS
from models import db
from routes import user_routes, goal_routes, challenge_routes, session_routes
from auth_routes import auth_routes

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

app.config.from_object('config.Config')

db.init_app(app)

# Register blueprints
app.register_blueprint(user_routes, url_prefix='/users')
app.register_blueprint(goal_routes, url_prefix='/goals')
app.register_blueprint(challenge_routes, url_prefix='/challenges')
app.register_blueprint(session_routes, url_prefix='/sessions')
app.register_blueprint(auth_routes, url_prefix='/auth')  # Register the auth routes

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Fitness App API"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True)
