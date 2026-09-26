# Docker Demo App

Простое Express-приложение, показывающее сообщение, hostname и время. Используется для демонстрации контейнеризации через Docker.

## Требования
- Docker установлен и запущен

## Сборка образа
```bash
docker build -t docker-demo-app .
```

## Запуск контейнера
```bash
docker run -d -p 8080:3000 --name demo-app \
  -e APP_MESSAGE="Привет из контейнера!" \
  docker-demo-app
```

- `-p 8080:3000` — проброс порта: 8080 на хосте → 3000 внутри контейнера
- `-e APP_MESSAGE=...` — переопределение переменной окружения

## Проверка
```bash
curl http://localhost:8080
curl http://localhost:8080/health
```

## Остановка и удаление
```bash
docker stop demo-app
docker rm demo-app
```

## Локальный запуск без Docker (опционально)
```bash
npm install
npm start
```
