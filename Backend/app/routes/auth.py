from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app.database import get_db
from app.models.user import User
from app.schemas.user import RegisterSchema, LoginSchema
from app.utils.jwt_handler import create_token

router = APIRouter(prefix="/auth", tags=["Auth"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.post("/register")
def register(user: RegisterSchema, db: Session = Depends(get_db)):

    hashed_password = pwd_context.hash(user.password)

    new_user = User(
        name=user.name,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()

    return {"message": "User Registered"}


@router.post("/login")
def login(user: LoginSchema, db: Session = Depends(get_db)):

    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        return {"message": "Invalid Email"}

    valid = pwd_context.verify(user.password, db_user.password)

    if not valid:
        return {"message": "Invalid Password"}

    token = create_token({"email": db_user.email})

    return {
        "access_token": token,
        "token_type": "bearer"
    }