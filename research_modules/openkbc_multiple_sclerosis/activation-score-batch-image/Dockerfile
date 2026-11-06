FROM python:3.8-slim-buster

RUN mkdir /data
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY get_zscore.py .
CMD ["python", "get_zscore.py"]