# Web Application Deployment

This repository contains the infrastructure and deployment configurations for a scalable web application running on AWS EKS.

## Prerequisites

- AWS CLI configured with appropriate credentials
- Terraform >= 1.0.0
- kubectl
- Docker

## Deployment Steps

1. Initialize and apply Terraform configuration:
   ```bash
   cd terraform
   terraform init
   terraform apply
   ```

2. Configure kubectl to connect to the EKS cluster:
   ```bash
   aws eks update-kubeconfig --name production-cluster --region us-west-2
   ```

3. Create necessary secrets:
   ```bash
   kubectl create secret generic db-secret \
     --from-literal=host= \
     --from-literal=username=dbadmin \
     --from-literal=password=
   ```

4. Push code to main branch to trigger the GitHub Actions pipeline.

## Key Design Decisions

1. **Infrastructure**
   - EKS for container orchestration
   - RDS for managed database
   - Auto-scaling enabled via EKS managed node groups

2. **Security**
   - Private subnets for RDS and EKS nodes
   - Secrets management using Kubernetes secrets
   - Network isolation using VPC

3. **High Availability**
   - Multi-AZ deployment
   - Load balancer for frontend service
   - Multiple replicas for both frontend and backend

4. **CI/CD**
   - Automated builds and deployments via GitHub Actions
   - Container images versioned with Git SHA
   - Zero-downtime deployments using Kubernetes rolling updates