terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket  = "counting-terraform-state"
    key     = "introduce/terraform.tfstate"
    region  = "ap-northeast-2"
    encrypt = true
    profile = "fireking5997-blog"
  }
}
