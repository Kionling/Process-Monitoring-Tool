import random 
import time 
from datetime import datetime
import numpy as np 
import pandas as pd

sensor_data = {
    "temperature": 80.0,
    "pressure": 1.2,
    "pH": 6.8,
    "flow_rate": 15.0
}


fluctuation_ranges = {
    "temperature": 0.5,
    "pressure": 0.05,
    "pH": 0.1,
    "flow_rate": 0.3
}

def simulate_sensor_reading():
    for key in sensor_data:
        change = random.uniform(-fluctuation_ranges[key], fluctuation_ranges[key])
        sensor_data[key] += change
        sensor_data[key] = round(sensor_data[key], 2)

def print_sensor_data():
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}]", end="")
    for key, value in sensor_data.items():
        print(f"{key.capitalize()}: {value}", end="")
    print()


if __name__ == "__main__":
    while True:
        simulate_sensor_reading()
        print_sensor_data()
        time.sleep(1)
