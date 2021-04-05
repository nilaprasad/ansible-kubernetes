sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install -y kubelet kubeadm kubectl
sudo kubeadm init
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config