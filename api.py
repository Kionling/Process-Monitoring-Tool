from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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


threading.Thread(target=update_sensor_data, daemon=True).start()


@app.get("/sensor")
def get_sensor_data():
    return sensor_data