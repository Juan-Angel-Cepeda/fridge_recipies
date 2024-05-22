FROM python:3.11.5-slim
WORKDIR /app

# Install Python dependencies
COPY . .
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
