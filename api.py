from fastapi import FastAPI
from fastapp.middleware.cors import CORSMiddleware
import threading 
import time

from data import sensor_data, simulate_sensor_reading

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def update_sensor_data():
    while True:
        simulate_sensor_reading()
        time.sleep(1)


