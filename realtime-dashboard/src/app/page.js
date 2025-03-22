"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import SensorChart from '../app/components/SensorChart';

export default function Home() {
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    pressure: 0,
    pH: 0,
    flow_rate: 0,
  });

  const [tempHistory, setTempHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/sensor');
        setSensorData(res.data);

        setTempHistory(prev => {
          const updated = [...prev, res.data.temperature];
          return updated.length > 30 ? updated.slice(-30) : updated;
        });
      } catch (err) {
        console.error('Error fetching sensor data:', err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Real-Time Sensor Dashboard</h1>
      <ul>
        <li><strong>Temperature:</strong> {sensorData.temperature} °C</li>
        <li><strong>Pressure:</strong> {sensorData.pressure} bar</li>
        <li><strong>pH:</strong> {sensorData.pH}</li>
        <li><strong>Flow Rate:</strong> {sensorData.flow_rate} L/min</li>
      </ul>

      <h2 style={{ marginTop: '2rem' }}>Temperature Trend</h2>
      <SensorChart label="Temperature (°C)" data={tempHistory} color="rgba(255, 99, 132, 1)" />
    </div>
  );
}
