#!/bin/sh

set -e

cd /vagrant
sudo docker build --tag app .

sudo docker swarm init --force-new-cluster --advertise-addr 192.168.50.4
sudo docker stack deploy -c docker-compose.yml nodeapp
