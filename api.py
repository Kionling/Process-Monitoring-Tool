from fastapi import FastAPI
from fastapp.middleware.cors import CORSMiddleware
import threading 
import time

from data import sensor_data, simulate_sensor_reading

