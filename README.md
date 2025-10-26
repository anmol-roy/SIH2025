# Project Title: Blood Pressure Estimation from PPG Signals

## 📘 Overview
This project estimates systolic and diastolic blood pressure using PPG signal data.  
It combines signal preprocessing, time–frequency transformation, and a hybrid CNN-BiLSTM model for prediction.

## 🧩 Steps Involved
1. **Preprocessing:** Baseline drift removal + Wavelet denoising  
2. **Feature Extraction:** Converted PPG signals into scalograms using Continuous Wavelet Transform (CWT)  
3. **Modeling:** CNN-BiLSTM hybrid architecture  
4. **Evaluation:** MAE, RMSE, and R² metrics

## 🧠 Tech Stack
- Python  
- NumPy, Pandas, Matplotlib  
- TensorFlow / Keras  
- PyWavelets  
- Scikit-learn  

## 📊 Results
- MAE: 4.3 mmHg  
- RMSE: 6.8 mmHg  
- R² Score: 0.92  

## 🗂 Dataset
PPG signals from [Dataset Name or Link]  
(Specify if public or custom)

## 🖼️ Sample Output
*(Add a graph or model architecture image here)*

## 🚀 Future Improvements
- Include larger dataset  
- Add SpO₂ or ECG features  
- Build real-time Android app with React Native  

## 👤 Author
**Anmol**  
AI/ML & Data Science Enthusiast  
[LinkedIn](your-link) | [GitHub](your-link)
