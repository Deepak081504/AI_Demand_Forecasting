from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "secret123"
ALGORITHM = "HS256"


def create_token(data: dict):
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(hours=5)

    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return token