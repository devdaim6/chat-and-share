#!/bin/bash

# Define VM name and settings
VM_NAME="VmServer"
VM_OS_TYPE="Ubuntu_64"  # Change this if using a different OS
VM_MEMORY="4096"  # 4GB of RAM
VM_CPUS="4"  # Number of CPUs
VM_VRAM="128"  # Video RAM (128MB)
VM_DISK_SIZE="100000"  # Virtual disk size in MB (100GB)
VM_DISK_PATH="/vm/virtualdisk.vdi"  # Path to virtual disk
ISO_PATH="/iso/ubuntu.iso"  # Path to installation ISO (change as needed)
BRIDGE_INTERFACE="enp0s3"  # Network interface for bridged networking (change as needed)
USERNAME="vmuser"  # New user to be created on the VM
PASSWORD="vmuserpassword"  # Password for the new user

# Download Ubuntu ISO if not already present
if [ ! -f "$ISO_PATH" ]; then
    echo "Downloading Ubuntu ISO..."
    wget -q -O "$ISO_PATH" https://releases.ubuntu.com/20.04/ubuntu-20.04.3-live-server-amd64.iso
    echo "Ubuntu ISO downloaded successfully."
else
    echo "Ubuntu ISO already present."
fi

# Install required packages (only once)
echo "Updating and installing VirtualBox..."
sudo apt update
sudo apt install -y virtualbox virtualbox-ext-pack net-tools

# Create the virtual machine
echo "Creating virtual machine $VM_NAME..."
VBoxManage createvm --name "$VM_NAME" --ostype "$VM_OS_TYPE" --register

# Configure VM settings
echo "Setting up VM configurations..."
VBoxManage modifyvm "$VM_NAME" --memory "$VM_MEMORY" --cpus "$VM_CPUS" --vram "$VM_VRAM"

# Create virtual hard disk
echo "Creating virtual hard disk..."
VBoxManage createhd --filename "$VM_DISK_PATH" --size "$VM_DISK_SIZE" --format VDI

# Attach virtual hard disk to the VM
echo "Attaching virtual hard disk to VM..."
VBoxManage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci
VBoxManage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium "$VM_DISK_PATH"

# Attach installation ISO (for OS installation)
echo "Attaching installation ISO..."
VBoxManage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 1 --device 0 --type dvddrive --medium "$ISO_PATH"

# Set up networking (Bridged Adapter)
echo "Setting up bridged networking..."
VBoxManage modifyvm "$VM_NAME" --nic1 bridged --bridgeadapter1 "$BRIDGE_INTERFACE"

# Set up port forwarding for SSH (port 2222 on host to port 22 on guest)
echo "Setting up port forwarding for SSH (host:2222 -> guest:22)..."
VBoxManage modifyvm "$VM_NAME" --natpf1 "ssh,tcp,,2222,,22"

# Start the VM in headless mode (no GUI)
echo "Starting the VM in headless mode..."
VBoxHeadless --startvm "$VM_NAME" &

# Wait for the VM to boot up
echo "Waiting for the VM to boot up..."
sleep 60

# Create a new user on the VM and add to sudo group
echo "Creating a new user on the VM and adding to sudo group..."
ssh -p 2222 ubuntu@localhost "sudo useradd -m -s /bin/bash $USERNAME"
ssh -p 2222 ubuntu@localhost "sudo echo '$USERNAME:$PASSWORD' | sudo chpasswd"
ssh -p 2222 ubuntu@localhost "sudo usermod -aG sudo $USERNAME"

# Provide feedback
echo "VM '$VM_NAME' is now running. You can connect via SSH on port 2222."
echo "New user '$USERNAME' created with password '$PASSWORD' and added to sudo group."

# Script completion message
echo "Virtual machine setup completed!"
echo "To SSH into your VM, use: ssh -p 2222 $USERNAME@<host-ip>"
echo "Make sure to complete the OS installation and any further configuration on the VM."

exit 0
