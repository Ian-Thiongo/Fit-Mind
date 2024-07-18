from flask import Flask, jsonify
from models import db
from routes import user_routes, goal_routes, challenge_routes, session_routes

app = Flask(__name__)
app.config.from_object('config.Config')

db.init_app(app)

# Register blueprints
app.register_blueprint(user_routes, url_prefix='/users')
app.register_blueprint(goal_routes, url_prefix='/goals')
app.register_blueprint(challenge_routes, url_prefix='/challenges')
app.register_blueprint(session_routes, url_prefix='/sessions')

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Fitness App API"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True)
