from app import ma
from app.models import User, Goal, Challenge

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

class GoalSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Goal
        load_instance = True

class ChallengeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Challenge
        load_instance = True
