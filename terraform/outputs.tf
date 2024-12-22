output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "eks_cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks.cluster_endpoint
}

output "eks_cluster_name" {
  description = "EKS cluster name"
  value       = module.eks.cluster_name
}

output "rds_endpoint" {
  description = "RDS instance endpoint"
  value       = aws_db_instance.main.endpoint
}

output "db_connection_secret" {
  description = "SSM parameter path for database password"
  value       = aws_ssm_parameter.db_password.name
}

output "frontend_repository_url" {
  value = aws_ecr_repository.frontend.repository_url
}