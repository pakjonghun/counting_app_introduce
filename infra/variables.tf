variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-northeast-2"
}

variable "bucket_name" {
  description = "S3 bucket name for the landing page"
  type        = string
  default     = "counting-introduce"
}

variable "github_repo" {
  description = "GitHub repository (org/repo format, e.g. pakjonghun/counting-introduce)"
  type        = string
}
