#!/bin/bash

# Change "employee" to desired user name

sudo useradd employee && sudo cd /home/employee
sudo openssl genrsa -out employee.key 2048
sudo openssl req -new -key employee.key -out employee.csr -subj "/CN=employee"
sudo export CA_LOCATION=/etc/kubernetes/pki/
sudo openssl x509 -req -in employee.csr -CA CA_LOCATION/ca.crt -CAkey CA_LOCATION/ca.key -CAcreateserial -out employee.crt -days 500
sudo mkdir .certs && sudo mv employee.crt employee.key .certs
sudo chmod 777 /home/employee/.certs/employee.crt
sudo chmod 777 /home/employee/.certs/employee.key

kubectl config set-credentials employee --client-certificate=/home/employee/.certs/employee.crt  --client-key=/home/employee/.certs/employee.key
kubectl config set-context employee-context --cluster=kubernetes --user=employee