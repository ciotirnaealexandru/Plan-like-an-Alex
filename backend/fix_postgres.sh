#!/bin/bash
# Kill system PostgreSQL only
sudo systemctl stop postgresql

# Start Docker containers
docker compose up -d