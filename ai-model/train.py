from ultralytics import YOLO

if __name__ == '__main__':
    model = YOLO('yolov8n-cls.pt')
    model.train(
        data='dataset/DATASET',
        epochs=1,
        imgsz=224,
        fraction=0.02,
        workers=2,
        device='cpu'
    )