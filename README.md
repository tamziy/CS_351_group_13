# Installation

### 1. Clone the repository
```bash
git clone <https://github.com/tamziy/CS_351_group_13>
cd CS_351_group_13
```

### 2. Set up Virtual Environment
```bash
# Windows
# To create (only need to run once)...
python -m venv venv
# To activate...
venv/Scripts/activate

# Mac/Linux
# To create (only need to run once)...
python3 -m venv venv
# To activate...
source venv/bin/activate
```

### 3. Install Dependencies
```bash
# Make sure youre in the backend folder
pip install -r requirements.txt
```

## Running The Application
Start the flask environment
```bash
python app.py
```

The server will start at ```http://127.0.0.1:5000/```

## Frontend
Create another terminal inside of our ```frontend``` folder. Then in the terminal:
```bash
# Run this once
npm install
# This starts the frontend
npm start
```

After this, you will have set up our web application correctly!

---
