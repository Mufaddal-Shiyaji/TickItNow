# TickItNow

An Event Management and Ticketing System

# AWS Implementation:



1. Created an EC2(Elastic Cloud Compute) instance on AWS.
   ![Screenshot 2024-04-29 201026](https://github.com/Mufaddal-Shiyaji/TickItNow/assets/105577870/18aee569-64f1-43ac-96cf-5ac30c9a226f)
   
2. Used 'vite build' to built the client side of the file.
   
3. Transfered the build to S3(Simple Storage Service).
   ![Screenshot 2024-04-29 201055](https://github.com/Mufaddal-Shiyaji/TickItNow/assets/105577870/db5406db-0154-47f6-9308-68f32646d035)

# Output
![Screenshot 2024-04-29 200956](https://github.com/Mufaddal-Shiyaji/TickItNow/assets/105577870/fd82599a-1cd4-4102-b2bc-934d9c1d21c9)
*Client running on port 5173 on assigned public IP of the EC2 instance.*


# Why use S3 for storage?

1. I wanted to get the build files to the EC2 instance. So I uploaded the files to the S3 bucket and created an IAM role that connects the EC2 to S3. Thus, transferring the files to the EC2 instance.

_An IAM role(Identity Access Manager) is a collection of permissions that define what an entity (user, application, or service) can do within AWS resources. It acts like a security credential that grants specific access privileges without the need for long-term credentials like passwords or access keys._

# What are other/ better ways to host a website in AWS?

We can use Elastic Beanstalk service, which is an abstraction of multiple services such as EC2, Load Balancing, Auto-scaling etc

# S3 terms:

bucket: container for storage
objects: everything stored inside the bucket

# EC2 terms:

Instance: A virtual server in the cloud that provides processing power, memory, storage, and networking capabilities. _Instances are virtual machines in cloud.Virtual Machines is a term mainly used for machines created on a single machine, whereas on cloud, its called instances. Both terms can be used interchangeably_
Security Groups: Inbound rules for incoming packets
NACL: Network Access Control Lists (Both Inbound and Outbound rules)
SSH client: Secure Shell ,used to connect local CLI to CLI of the instance

# Ports and IP addresses:

1. IP of EC2 instance is dynamic, so we do not want the IP to change eveytime we load the website.
2. Hence, we assign a fixed public ip for the EC2 instance.
3. We open the ports for the incoming and outgoing traffic to either custom IP's or all IP's.
