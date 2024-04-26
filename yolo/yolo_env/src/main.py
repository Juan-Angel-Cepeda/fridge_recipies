
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import cv2
import numpy as np
from ultralytics import YOLO


app = FastAPI()

model = YOLO("yolov8n.pt")

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/detect/")
async def detect_objects(request:Request):
    
    image_bytes = await request.body()
    image = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    
    results = model.predict(image,show_labels=True,show_boxes=True)
    
    class_names = []
    for result in results:
        boxes = result.boxes  # Boxes object for bbox outputs
        class_indices = boxes.cls  # Class indices of the detections
        class_names = [result.names[int(cls)] for cls in class_indices]  # Map indices to names

    response = {
        "ingredients-detected":class_names
    }
    return JSONResponse(content=response)    
    
