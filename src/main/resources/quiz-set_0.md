## 1. What best describes the principle that users should only be given the minimum permissions they need to do their job?

- All users should have the same baseline permissions to use basic AWS services.
- Users should submit all access requests in writing for an audit trail.
- Users should be granted permission to access only the resources they need for their job.
- Users should always have more permissions than they need.

**Explanation:**  
"Users should be granted permission to access only the resources they need for their job" is correct. This is the
principle of least privilege, which minimizes security risks by limiting user permissions.  
"All users should have the same baseline permissions to use basic AWS services" is incorrect because it grants
unnecessary access.  
"Users should submit all access requests in writing for an audit trail" is incorrect because it relates to auditing, not
permission management.  
"Users should always have more permissions than they need" is incorrect because it increases security risks.

---

## 2. Amazon RDS provides Multi-AZ feature for better availability of databases. Which of the following options describes Multi-AZ?

- Multi-AZ allows read replicas of RDS instances across availability zones.
- Multi-AZ maintains standby replicas of RDS instances in different availability zones.
- Multi-AZ allows peering connections between VPCs.
- Multi-AZ encrypts RDS instance data.

**Explanation:**  
"Multi-AZ maintains standby replicas of RDS instances in different availability zones" is correct. Multi-AZ provides
high availability by automatically creating a standby replica in another AZ.  
"Multi-AZ allows read replicas of RDS instances across availability zones" is incorrect; read replicas are for scaling
reads, not high availability.  
"Multi-AZ allows peering connections between VPCs" is incorrect; VPC peering is unrelated to RDS.  
"Multi-AZ encrypts RDS instance data" is incorrect; encryption is a separate feature.

---

## 3. A developer is creating a new application and wants to integrate features of AWS services directly into the application. Which AWS tool is the BEST for this purpose?

- AWS Software Development Kit
- AWS CodeDeploy
- AWS Command Line Interface (CLI)
- AWS CodePipeline

**Explanation:**  
"AWS Software Development Kit" is correct. The SDK provides APIs and libraries for integrating AWS services into
applications.  
"AWS CodeDeploy" is incorrect; it automates code deployments.  
"AWS Command Line Interface (CLI)" is incorrect; it is for command-line management, not application integration.  
"AWS CodePipeline" is incorrect; it is for CI/CD, not direct integration.

---

## 4. Which AWS component of the Billing Dashboard will give users an overview of their past 12 months of usage and forecasts for their projected usage for the next 12 months?

- Cost Explorer
- Budget Reports
- AWS Budgets
- Cost Projections

**Explanation:**  
"Cost Explorer" is correct. It provides historical usage and cost forecasts.  
"Budget Reports" is incorrect; they track usage against budgets.  
"AWS Budgets" is incorrect; it sets and tracks budgets, not forecasts.  
"Cost Projections" is incorrect; projections are a feature within Cost Explorer.

---

## 5. What Amazon Web Services service would you use to send notifications based on Amazon CloudWatch alarms?

- Amazon Route 53
- AWS CloudTrail
- Amazon Simple Notification Service (Amazon SNS)
- AWS Trusted Advisor

**Explanation:**  
"Amazon Simple Notification Service (Amazon SNS)" is correct. SNS sends notifications when CloudWatch alarms are
triggered.  
"Amazon Route 53" is incorrect; it is a DNS service.  
"AWS CloudTrail" is incorrect; it logs API calls.  
"AWS Trusted Advisor" is incorrect; it provides best practice recommendations.

---

## 6. How does using managed services like RDS help companies focus on applications rather than infrastructure?

- Managed services eliminate infrastructure costs.
- Managed services have unlimited scale.
- The provider handles maintenance tasks.
- Managed services are self-healing.

**Explanation:**  
"The provider handles maintenance tasks" is correct. Managed services offload routine maintenance, letting companies
focus on applications.  
"Managed services eliminate infrastructure costs" is incorrect; costs still exist.  
"Managed services have unlimited scale" is incorrect; scale is not unlimited.  
"Managed services are self-healing" is incorrect; self-healing is a feature, not the main benefit.

---

## 7. Which service allows users to quickly get configured vendor systems up and running quickly within AWS?

- AWS EC2
- AWS Lambda
- AWS Machine Images
- AWS Marketplace

**Explanation:**  
"AWS Marketplace" is correct. It provides pre-configured vendor solutions for quick deployment.  
"AWS EC2" is incorrect; it provides virtual servers, not pre-configured solutions.  
"AWS Lambda" is incorrect; it is a serverless compute service.  
"AWS Machine Images" is incorrect; they are templates, not a marketplace.

---

## 8. AWS offers a variety of different EC2 instance types that are optimized for different types of focused usage. Which of the following is not an optimized instance type under EC2?

- Storage optimized
- Network optimized
- Compute optimized
- Memory optimized

**Explanation:**  
"Network optimized" is correct. There is no official "network optimized" instance family.  
"Storage optimized," "Compute optimized," and "Memory optimized" are all official EC2 instance types.

---

## 9. A company migrated their application servers to Amazon EC2 instances. The IT Manager wants to know about upcoming AWS scheduled maintenance activities that could impact the EC2 instances. Which AWS service provides alerts about these activities?

- AWS Personal Health Dashboard
- AWS Trusted Advisor
- AWS Service Health Dashboard
- AWS Organizations

**Explanation:**  
"AWS Personal Health Dashboard" is correct. It provides personalized alerts about events affecting your resources.  
"AWS Trusted Advisor" is incorrect; it gives best practice recommendations.  
"AWS Service Health Dashboard" is incorrect; it shows general AWS service status, not personalized alerts.  
"AWS Organizations" is incorrect; it manages multiple accounts.

---

## 10. What action does an Elastic Load Balancer (ELB) take when it detects an unhealthy Amazon EC2 instance?

- It continues to send traffic to the failed instance.
- It restarts the unhealthy EC2 instance.
- It terminates the failed instance so that it is not part of the ELB target group.
- It only sends traffic to the remaining healthy instances.

**Explanation:**  
"It only sends traffic to the remaining healthy instances" is correct. ELB stops routing traffic to unhealthy
instances.  
"It continues to send traffic to the failed instance" is incorrect; ELB avoids unhealthy instances.  
"It restarts the unhealthy EC2 instance" is incorrect; ELB does not manage instance lifecycle.  
"It terminates the failed instance" is incorrect; ELB does not terminate instances.

---

## 11. Which key cloud concept pertains to the ability to reuse components of an application or service?

- Reusability
- Modularization
- Portability
- Interoperability

**Explanation:**  
"Reusability" is correct. It refers to using components in multiple places.  
"Modularization" is incorrect; it is about breaking systems into modules.  
"Portability" is incorrect; it is about moving applications between environments.  
"Interoperability" is incorrect; it is about systems working together.

---

## 12. According to the AWS Shared Responsibility Model, which two of the following are customer responsibilities?

- Patching the network infrastructure
- Patching the EC2 Operating System
- Physical security of data center facilities
- Setting up encryption on an Amazon S3 bucket

**Explanation:**  
"Patching the EC2 Operating System" and "Setting up encryption on an Amazon S3 bucket" are correct. Customers manage
their OS and data encryption.  
"Patching the network infrastructure" and "Physical security of data center facilities" are AWS responsibilities.

---

## 13. If you have multiple users who need the same rights within your AWS account, which would be the easiest approach to implement and maintain the consistency of them?

- Create each user in IAM and assign the proper roles.
- Make each their own AWS account and share access to the main account.
- Assign them to the same IAM group that you create.
- Assign them to the same security group.

**Explanation:**  
"Assign them to the same IAM group that you create" is correct. IAM groups simplify permission management.  
"Create each user in IAM and assign the proper roles" is incorrect; it is less efficient.  
"Make each their own AWS account" is incorrect; it is unnecessarily complex.  
"Assign them to the same security group" is incorrect; security groups are for network access, not user permissions.

---

## 14. How does using cloud computing help companies achieve more efficient use of resources?

- The cloud provider handles efficiency.
- Resources are unlimited.
- Resources can be scaled based on demand.
- Unused resources are terminated daily.

**Explanation:**  
"Resources can be scaled based on demand" is correct. Cloud computing allows dynamic scaling.  
"The cloud provider handles efficiency" is incorrect; customers must manage their resources.  
"Resources are unlimited" is incorrect; resources are not truly unlimited.  
"Unused resources are terminated daily" is incorrect; termination is not automatic.

---

## 15. A business analyst wants to move away from creating complex database queries and static spreadsheets when generating regular reports for high-level management. They would like to publish insightful, graphically appealing reports with interactive dashboards. Which AWS service can help them accomplish this?

- Amazon CloudWatch
- Amazon Redshift
- Amazon QuickSight
- Amazon Athena with Amazon Glue

**Explanation:**  
"Amazon QuickSight" is correct. It is AWS's BI service for dashboards and reports.  
"Amazon CloudWatch" is incorrect; it is for monitoring.  
"Amazon Redshift" is incorrect; it is a data warehouse.  
"Amazon Athena with Amazon Glue" is incorrect; they are for querying and ETL, not dashboards.

---

## 16. Which AWS component of the Billing Dashboard will track a user's incurred billing throughout the month and provide a projected total bill for the month on a continual basis?

- AWS Budgets
- Cost Explorer
- Cost Categories
- Savings Plans

**Explanation:**  
"Cost Explorer" is correct. It tracks incurred costs and provides projections.  
"AWS Budgets" is incorrect; it is for setting and tracking budgets.  
"Cost Categories" is incorrect; it is for organizing costs.  
"Savings Plans" is incorrect; it is a pricing model.

---

## 17. A large company needs to allow its employees to access Linux desktops remotely from any location. Which Amazon Web Services product can be used for this?

- Amazon AppStream 2.0
- Amazon Cognito
- Amazon WorkSpaces
- Amazon WorkLink

**Explanation:**  
"Amazon WorkSpaces" is correct. It provides cloud-based virtual desktops.  
"Amazon AppStream 2.0" is incorrect; it streams applications, not desktops.  
"Amazon Cognito" is incorrect; it is for authentication.  
"Amazon WorkLink" is incorrect; it is for secure access to internal websites.

---

## 18. How can you reduce the operating costs for a MySQL database?

- By migrating the database to an EC2 instance
- By migrating the database to an Amazon RDS instance
- By migrating the database to a Docker container
- By migrating the database to an AWS Storage Gateway

**Explanation:**  
"By migrating the database to an Amazon RDS instance" is correct. RDS automates management, reducing costs.  
"By migrating the database to an EC2 instance" is incorrect; it requires manual management.  
"By migrating the database to a Docker container" is incorrect; it does not reduce costs.  
"By migrating the database to an AWS Storage Gateway" is incorrect; Storage Gateway is for hybrid storage.

---

## 19. You have a Node.js application that you want to get running as quickly as possible. You need high performance and reliability, but you do not care about the underlying system running your code. Which AWS service would best suit your needs?

- AppStream
- Lightsail
- Elastic Beanstalk
- EC2

**Explanation:**  
"Elastic Beanstalk" is correct. It is a PaaS for quick deployment without managing infrastructure.  
"AppStream" is incorrect; it streams applications.  
"Lightsail" is incorrect; it is for simple cloud projects.  
"EC2" is incorrect; it requires infrastructure management.

---

## 20. Which AWS tool can help identify unused Amazon EC2 instances to reduce costs?

- AWS Cost Explorer
- AWS Trusted Advisor
- AWS Budgets
- AWS Config

**Explanation:**  
"AWS Trusted Advisor" is correct. It recommends cost optimization, including identifying unused EC2 instances.  
"AWS Cost Explorer" is incorrect; it analyzes spending, not resource usage.  
"AWS Budgets" is incorrect; it tracks spending limits.  
"AWS Config" is incorrect; it tracks configuration changes.

---

## 21. Which universal concept of cloud computing refers to the ability of a cloud environment to continue functioning while some portions are unavailable?

- Availability
- Performance
- Scalability
- Resiliency

**Explanation:**  
"Resiliency" is correct. It is the ability to recover from failures and continue operating.  
"Availability" is incorrect; it is about uptime, not functioning during failures.  
"Performance" is incorrect; it is about system operation, not failure recovery.  
"Scalability" is incorrect; it is about handling increased load.

---

## 22. Developers need to deploy a website with multiple tiers. Which AWS service can help create a catalog of resources to allow quick deployment of the website?

- AWS Config
- AWS CloudFormation
- AWS Service Catalog
- AWS CodeDeploy

**Explanation:**  
"AWS CloudFormation" is correct. It provisions multi-tier resources using templates.  
"AWS Config" is incorrect; it tracks resource configurations.  
"AWS Service Catalog" is incorrect; it manages approved products, not deployments.  
"AWS CodeDeploy" is incorrect; it automates code deployments.

---

## 23. How much data can a company store in Amazon S3?

- Virtually unlimited
- 1 PB
- 100 TB
- 100 PB

**Explanation:**  
"Virtually unlimited" is correct. S3 is designed for unlimited storage.  
"1 PB," "100 TB," and "100 PB" are incorrect; S3 has no practical upper limit.

---

## 24. How can a system administrator add extra login protection to a user's AWS Management Console?

- Enable AWS CloudTrail
- Review AWS Identity and Access Management (IAM) roles
- Enable multi-factor authentication
- Use Amazon Cloud Directory

**Explanation:**  
"Enable multi-factor authentication" is correct. MFA adds an extra layer of security.  
"Enable AWS CloudTrail" is incorrect; it logs API activity.  
"Review IAM roles" is incorrect; it does not add login protection.  
"Use Amazon Cloud Directory" is incorrect; it is a directory service.

---

## 25. What are two best practices for managing access in AWS using IAM?

- Grant least privilege
- Use service accounts
- Account-level policies
- Customer-managed policies

**Explanation:**  
"Grant least privilege" and "Customer-managed policies" are correct. Least privilege minimizes risk, and
customer-managed policies allow precise control.  
"Use service accounts" is incorrect; AWS uses users, groups, and roles.  
"Account-level policies" is incorrect; policies are attached to users, groups, or roles.

---

## 26. Which service is the AWS DNS offering that allows for highly scalable and secure lookups and the ability to extend traditional DNS to encompass health checks?

- Route 53
- AWS DNS
- Lambda
- CloudFront

**Explanation:**  
"Route 53" is correct. It is AWS's DNS service with health checks.  
"AWS DNS" is incorrect; no such service exists.  
"Lambda" is incorrect; it is a compute service.  
"CloudFront" is incorrect; it is a CDN.

---

## 27. A company wants to start a new system on AWS. But the company does not have an employee who knows about AWS. Which AWS program can help the company to design, build, and manage their systems on AWS?

- AWS Marketplace
- AWS Trusted Advisor
- Amazon Inspector
- AWS Partner Network Consulting Partners

**Explanation:**  
"AWS Partner Network Consulting Partners" is correct. APN Consulting Partners help design, build, and manage AWS
systems.  
"AWS Marketplace" is incorrect; it is for software solutions.  
"AWS Trusted Advisor" is incorrect; it provides recommendations.  
"Amazon Inspector" is incorrect; it is a security assessment service.

---

## 28. In which two locations can Amazon EC2 Auto Scaling launch resources?

- Only in one single availability zone
- Multiple availability zones within a region
- Multiple availability zones across multiple regions
- Everywhere, there are no constraints

**Explanation:**  
"Only in one single availability zone" and "Multiple availability zones within a region" are correct. Auto Scaling can
launch in one or multiple AZs within a region.  
"Multiple availability zones across multiple regions" is incorrect; Auto Scaling is region-specific.  
"Everywhere, there are no constraints" is incorrect; there are regional constraints.

---

## 29. To save on long-term costs from pre-purchasing hardware, you want to move your company's data warehouse system into AWS. Which AWS service would you utilize for this?

- Amazon Aurora
- Amazon RDS
- DynamoDB
- Amazon Redshift

**Explanation:**  
"Amazon Redshift" is correct. It is AWS's managed data warehouse service.  
"Amazon Aurora" is incorrect; it is a relational database.  
"Amazon RDS" is incorrect; it is for relational databases, not data warehousing.  
"DynamoDB" is incorrect; it is a NoSQL database.

---

## 30. In the shared responsibility model for Amazon EC2, which two choices are customer responsibilities?

- Amazon Machine Images (AMIs)
- Applications in EC2 instances
- Virtualization infrastructure
- Network infrastructure
- Physical security of hardware

**Explanation:**  
"Amazon Machine Images (AMIs)" and "Applications in EC2 instances" are correct. Customers manage their AMIs and
applications.  
"Virtualization infrastructure," "Network infrastructure," and "Physical security of hardware" are AWS responsibilities.

---

## 31. How does using cloud computing help companies focus on innovation rather than infrastructure?

- The cloud automates all processes.
- There are no infrastructure costs.
- Resources can be provisioned on demand.
- The cloud provider handles routine IT tasks.

**Explanation:**  
"The cloud provider handles routine IT tasks" is correct. This allows companies to focus on innovation.  
"The cloud automates all processes" is incorrect; not all processes are automated.  
"There are no infrastructure costs" is incorrect; costs still exist.  
"Resources can be provisioned on demand" is incorrect; this is a benefit, but not the main reason for focusing on
innovation.

---

## 32. You are using Amazon Simple Notification Service to send notifications to alert admins when CPU usage of an Amazon EC2 instance is more than 70%. Which two of the following can subscribe to an Amazon SNS topic?

- AWS Lambda
- Email
- Amazon S3
- Amazon CloudWatch

**Explanation:**  
"AWS Lambda" and "Email" are correct. Both can subscribe to SNS topics.  
"Amazon S3" is incorrect; it cannot subscribe to SNS.  
"Amazon CloudWatch" is incorrect; it triggers SNS, not subscribes to it.

---

## 33. What are two benefits of deploying a relational database on Amazon RDS instead of Amazon EC2?

- Software patching
- Unlimited resources
- Cost savings
- Automatic backup

**Explanation:**  
"Software patching" and "Automatic backup" are correct. RDS automates these tasks.  
"Unlimited resources" is incorrect; resources are not unlimited.  
"Cost savings" is incorrect; cost savings depend on usage.

---

## 34. The AWS Trusted Advisor is split into five areas of focus to analyze your services and configurations and recommend appropriate best practices. Which of the following is not one of the AWS Trusted Advisor areas of focus?

- Performance
- Security
- Fault tolerance
- Privacy

**Explanation:**  
"Privacy" is correct. Privacy is not a Trusted Advisor focus area.  
"Performance," "Security," and "Fault tolerance" are all focus areas.

---

## 35. A website wants to serve content to users in their native language based on the user's location. Which Amazon Web Services feature provides location-based web personalization using geolocation headers?

- AWS Elastic Beanstalk
- AWS Global Accelerator
- Amazon EC2
- Amazon CloudFront

**Explanation:**  
"Amazon CloudFront" is correct. It provides geolocation headers for personalization.  
"AWS Elastic Beanstalk" is incorrect; it is for application deployment.  
"AWS Global Accelerator" is incorrect; it improves performance, not personalization.  
"Amazon EC2" is incorrect; it is a compute service.

---

## 36. Which concept will articulate the specific requirements between the cloud user and provider as far as promised performance, uptime, and responsiveness for services?

- Governance
- Contract
- Auditability
- Service level agreement (SLA)

**Explanation:**  
"Service level agreement (SLA)" is correct. An SLA defines service commitments.  
"Governance" is incorrect; it is about policies.  
"Contract" is incorrect; it is a legal agreement, not specific to service metrics.  
"Auditability" is incorrect; it is about tracking actions.

---

## 37. A company wants to use AWS storage. Low storage cost is very important for them. Their data is rarely needed and waiting 13-14 hours to get the data back is acceptable. What is the best storage option for the company to use?

- Amazon EBS
- Amazon S3
- S3 Glacier Deep Archive
- Amazon S3 Glacier

**Explanation:**  
"S3 Glacier Deep Archive" is correct. It is the lowest-cost storage for rarely accessed data with long retrieval
times.  
"Amazon EBS" is incorrect; it is expensive block storage.  
"Amazon S3" is incorrect; it is more expensive than Glacier Deep Archive.  
"Amazon S3 Glacier" is incorrect; it is not as low-cost as Deep Archive.

---

## 38. You have an application installed on an Amazon EC2 instance. You want to restrict access to the application for different users. Which of the following methods can help you achieve this?

- Configure the firewall inside the EC2 instance.
- Detach the primary network interface from the EC2 instance and attach it to another instance.
- Configure multiple network interfaces (ENIs) with separate IP addresses and security groups.
- Enable antivirus on your EC2 instance.

**Explanation:**  
"Configure the firewall inside the EC2 instance" is correct. Firewalls control user access.  
"Detach the primary network interface" is incorrect; it disconnects the instance.  
"Configure multiple ENIs" is incorrect; it is not for user access control.  
"Enable antivirus" is incorrect; it is for malware protection.

---

## 39. A website manager uses online resources for an organization. What AWS service can track expiration dates of SSL/TLS certificates and handle renewals?

- AWS Certificate Manager
- AWS Firewall Manager
- AWS Data Lifecycle Manager
- AWS License Manager

**Explanation:**  
"AWS Certificate Manager" is correct. It manages SSL/TLS certificates and renewals.  
"AWS Firewall Manager" is incorrect; it manages firewall rules.  
"AWS Data Lifecycle Manager" is incorrect; it manages EBS lifecycles.  
"AWS License Manager" is incorrect; it manages software licenses.

---

## 40. An organization runs several Amazon EC2 instances inside an Amazon VPC using three subnets - one for Development, one for Test, and one for Production. The Security team wants to restrict communication between the EC2 instances using Security Groups. Which of the following statements is true about changing Security Groups associated with the instances in this scenario?

- You can change a Security Group only if there are no instances associated with it.
- You can change only the Default Security Group.
- You can change a Security Group associated with an instance if the instance is in the hibernate state.
- You can change a Security Group associated with an instance if the instance is in the running state.

**Explanation:**  
"You can change a Security Group associated with an instance if the instance is in the running state" is correct.
Security groups can be changed at any time.  
"Only if there are no instances associated" is incorrect; security groups can be changed while in use.  
"Only the Default Security Group" is incorrect; any security group can be changed.  
"If the instance is in the hibernate state" is incorrect; changes can be made while running.

---

## 41. Which AWS service provides offerings to help achieve outcomes related to adopting AWS Cloud through paid engagements?

- Concierge Support
- AWS Enterprise Support
- AWS Professional Services
- AWS Technical Account Manager

**Explanation:**  
"AWS Professional Services" is correct. It provides paid consulting for cloud adoption.  
"Concierge Support" is incorrect; it is for billing support.  
"AWS Enterprise Support" is incorrect; it is for technical support.  
"AWS Technical Account Manager" is incorrect; TAMs provide ongoing guidance, not paid engagements.

---

## 42. What are two true statements about AWS Secrets Manager?

- It provides free storage.
- It retrieves authentication information from a central repository using an API call.
- It encrypts data at rest.
- It replaces hardcoding authentication information in code.
- It replaces IAM users and roles.

**Explanation:**  
"It retrieves authentication information from a central repository using an API call" and "It encrypts data at rest" are correct.  
"It provides free storage" is incorrect; it is a paid service.  
"It replaces hardcoding authentication information in code" is incorrect as a statement of fact; it helps avoid
hardcoding, but does not automatically replace it.  
"It replaces IAM users and roles" is incorrect; it is for secrets, not identity management.

---

## 43. Which AWS service is a Desktop as a Service (DaaS) offering?

- AWS OfficeSpace
- WorkLink
- WorkSpaces
- AWS VDI

**Explanation:**  
"WorkSpaces" is correct. It is AWS's DaaS solution.  
"AWS OfficeSpace" is incorrect; it is not an AWS service.  
"WorkLink" is incorrect; it is for secure website access.  
"AWS VDI" is incorrect; no such AWS service exists.

---

## 44. You want to use AWS to back up your on-premises data in a seamless manner. Which AWS service would enable you to accomplish this?

- AWS Glacier
- AWS Containers
- AWS Storage Gateway
- AWS Snow

**Explanation:**  
"AWS Storage Gateway" is correct. It integrates on-premises environments with AWS storage.  
"AWS Glacier" is incorrect; it is for archival storage.  
"AWS Containers" is incorrect; it is for containerized applications.  
"AWS Snow" is incorrect; it is for large-scale data transfer.

---

## 45. Which statement about S3 storage buckets is true?

- Bucket names can span multiple regions but must have a unique name.
- Bucket names can be used in multiple regions to enable automatic replication between them.
- Bucket names must be unique within your account and region.
- Bucket names must be globally unique within AWS and can only exist in one region.

**Explanation:**  
"Bucket names must be globally unique within AWS and can only exist in one region" is correct.  
"Can span multiple regions" is incorrect; a bucket exists in one region.  
"Can be used in multiple regions" is incorrect; replication uses different buckets.  
"Must be unique within your account and region" is incorrect; uniqueness is global.

---

## 46. You are looking for the user guides for Elastic Beanstalk. Which AWS support resource would you explore to find this?

- Discussion Forums
- AWS Professional Services
- Knowledge Center
- Documentation

**Explanation:**  
"Documentation" is correct. It provides official user guides.  
"Discussion Forums" is incorrect; they are for community support.  
"AWS Professional Services" is incorrect; it is for consulting.  
"Knowledge Center" is incorrect; it is for FAQs.

---

## 47. How can using fully managed services from AWS be more beneficial than deploying third-party software on Amazon EC2 instances? (Select 2)

- Reduced operational overhead
- Reduced capital expenses
- Automated backups
- Automated infrastructure deployment using code

**Explanation:**  
"Reduced operational overhead" and "Automated backups" are correct. Managed services automate maintenance and backups.  
"Reduced capital expenses" is incorrect; both are operational expenses.  
"Automated infrastructure deployment using code" is incorrect; this is provided by tools like CloudFormation.

---

## 48. How does using Infrastructure as a Service (IaaS) help companies?

- IaaS is fully managed by the provider
- Eliminates infrastructure costs
- Reduces need for data center space
- Provides rapid innovation capabilities

**Explanation:**  
"Reduces need for data center space" is correct. IaaS shifts infrastructure to the cloud.  
"IaaS is fully managed by the provider" is incorrect; customers manage OS and apps.  
"Eliminates infrastructure costs" is incorrect; costs still exist.  
"Provides rapid innovation capabilities" is incorrect; this is more PaaS/SaaS.

---

## 49. How can we allow an application running on an Amazon EC2 instance to securely access data in an Amazon S3 bucket without providing long-term credentials to the application?

- Using User Groups
- Using cross region replication
- Using an IAM role
- Using Bucket Permissions

**Explanation:**  
"Using an IAM role" is correct. IAM roles provide temporary credentials.  
"User Groups" is incorrect; they are for organizing users.  
"Cross region replication" is incorrect; it is for data replication.  
"Bucket Permissions" is incorrect; they control access, not credential management.

---

## 50. A company is planning to deploy a high-volume application on multiple Amazon EC2 instances. What can help reduce operational expenses?

- Deploy Amazon EC2 instances in multiple Availability Zones.
- Deploy Amazon EC2 instances with Amazon instance store-backed AMIs.
- Deploy Amazon EC2 instances with Auto Scaling.
- Deploy Amazon EC2 instances with Cluster placement groups.

**Explanation:**  
"Deploy Amazon EC2 instances with Auto Scaling" is correct. Auto Scaling optimizes resource usage and cost.  
"Multiple Availability Zones" is incorrect; it improves availability, not cost.  
"Instance store-backed AMIs" is incorrect; they do not reduce costs.  
"Cluster placement groups" is incorrect; they are for high performance, not cost.

---

## 51. How does using multiple Availability Zones improve application availability?

- Different services can be placed in different zones.
- Data is replicated across zones.
- It allows load balancing across zones.
- It provides isolation for extra security.

**Explanation:**  
"It allows load balancing across zones" is correct. Load balancing improves availability.  
"Different services in different zones" is incorrect; it does not guarantee availability.  
"Data is replicated across zones" is incorrect; replication is for durability.  
"Isolation for extra security" is incorrect; it is a security benefit.

---

## 52. Which type of AWS Budget is used for planning what your ceiling for spending on a particular service will be?

- Cost Savings Budgets
- Savings Plans Utilization Budgets
- Cost Budgets
- Usage Budgets

**Explanation:**  
"Cost Budgets" is correct. They set a spending ceiling.  
"Cost Savings Budgets" is incorrect; no such type exists.  
"Savings Plans Utilization Budgets" is incorrect; they track utilization.  
"Usage Budgets" is incorrect; they track usage, not cost.

---

## 53. A user was given an access key ID and secret access key to make API calls to AWS. The user has forgotten the credentials. How can new credentials be generated for the user?

- Use the 'Forgot Password' option
- Delete the user and recreate them to get new credentials.
- Create a new access key by logging in to the AWS Management Console as the root user
- Contact AWS Support to retrieve the forgotten Secret Access Key.

**Explanation:**  
"Create a new access key by logging in to the AWS Management Console as the root user" is correct. New keys can be
generated; lost keys cannot be retrieved.  
"'Forgot Password' option" is incorrect; it is for passwords, not access keys.  
"Delete the user and recreate them" is incorrect; it is unnecessary.  
"Contact AWS Support" is incorrect; AWS cannot retrieve lost keys.

---

## 54. Under Elastic Block Store (EBS), which types of underlying storage do you have to choose from? (Choose two)

- HDD
- NAS
- Object
- SAN
- SSD

**Explanation:**  
"HDD" and "SSD" are correct. EBS offers both HDD and SSD-backed volumes.  
"NAS," "Object," and "SAN" are incorrect; EBS is block storage.

---

## 55. The AWS RDS offers several different types of managed databases to meet the needs of almost all users. Which of the following is not a type of database offered under RDS?

- PostgreSQL
- DynamoDB
- Oracle
- MariaDB

**Explanation:**  
"DynamoDB" is correct. It is a NoSQL service, not part of RDS.  
"PostgreSQL," "Oracle," and "MariaDB" are all supported by RDS.

---

## 56. What is an advantage of using Availability Zones in Amazon Web Services?

- Availability Zones are connected by low-latency networks
- With multiple availability zones, the cost is reduced
- Availability Zones automatically replicate data across zones
- Availability Zones provide unlimited storage capacity

**Explanation:**  
"Availability Zones are connected by low-latency networks" is correct. This enables high availability.  
"Cost is reduced" is incorrect; cost is not inherently reduced.  
"Automatically replicate data" is incorrect; replication must be configured.  
"Unlimited storage capacity" is incorrect; storage is determined by provisioned resources.

---

## 57. Which AWS tool can you use to forecast how much you will spend on AWS?

- AWS Cost Explorer
- AWS Organizations
- Amazon DevPay
- AWS Trusted Advisor

**Explanation:**  
"AWS Cost Explorer" is correct. It provides cost forecasts.  
"AWS Organizations" is incorrect; it manages accounts.  
"Amazon DevPay" is incorrect; it is deprecated.  
"AWS Trusted Advisor" is incorrect; it gives best practice recommendations.

---

## 58. What AWS service can be used as a web application firewall?

- AWS Shield
- AWS CloudFront
- AWS WAF
- AWS Snowball

**Explanation:**  
"AWS WAF" is correct. It is AWS's web application firewall.  
"AWS Shield" is incorrect; it is for DDoS protection.  
"AWS CloudFront" is incorrect; it is a CDN.  
"AWS Snowball" is incorrect; it is for data transfer.

---

## 59. In order to better track costs within the organization, you notice that your account administrator has added in the ability to sort by options such as "user:ProjectName." What is this an example of?

- Cost Categories
- Cost Metadata
- Cost Allocation Tags
- Cost Containers

**Explanation:**  
"Cost Allocation Tags" is correct. They are user-defined labels for tracking costs.  
"Cost Categories" is incorrect; they group costs, not tag resources.  
"Cost Metadata" is incorrect; it is not an AWS feature.  
"Cost Containers" is incorrect; it is not an AWS feature.

---

## 60. How can you protect your data from a regional disaster using Amazon S3?

- Use Lifecycle rules
- Use Intelligent-Tiering Archive configurations
- Use bucket policy
- Use Cross-Region Replication (CRR)

**Explanation:**  
"Use Cross-Region Replication (CRR)" is correct. CRR replicates data to another region.  
"Lifecycle rules" is incorrect; they manage object transitions and deletions.  
"Intelligent-Tiering Archive" is incorrect; it is for cost optimization.  
"Bucket policy" is incorrect; it controls access, not replication.

---

## 61. Which AWS services are global in nature versus based on regions like most AWS services? (Choose two)

- IAM
- Lightsail
- S3
- CloudFront
- EC2

**Explanation:**  
"IAM" and "CloudFront" are correct. Both are global services.  
"Lightsail," "S3," and "EC2" are region-specific.

---

## 62. Which AWS tool can help identify potential cost savings by looking for idle and underutilized resources?

- AWS Cost Explorer
- AWS Trusted Advisor
- AWS Budgets
- AWS Config

**Explanation:**  
"AWS Trusted Advisor" is correct. It identifies idle and underutilized resources.  
"AWS Cost Explorer" is incorrect; it analyzes spending.  
"AWS Budgets" is incorrect; it tracks spending limits.  
"AWS Config" is incorrect; it tracks configuration changes.

---

## 63. What is the purpose of Amazon CloudHSM?

- It protects against DDoS attacks.
- It applies protection against malware.
- It is used to generate, use, and manage encryption keys in the cloud.
- It acts as an interface between the user and the computer.

**Explanation:**  
"It is used to generate, use, and manage encryption keys in the cloud" is correct. CloudHSM is for secure key
management.  
"Protects against DDoS attacks" is incorrect; AWS Shield does this.  
"Applies protection against malware" is incorrect; CloudHSM is not an anti-malware service.  
"Acts as an interface" is incorrect; it is for cryptographic key management.

---

## 64. On which AWS services do customers need to patch the operating systems?

- AWS Fargate
- Amazon Lambda
- Amazon DynamoDB
- Amazon EC2

**Explanation:**  
"Amazon EC2" is correct. Customers manage and patch the OS on EC2.  
"AWS Fargate" "Amazon Lambda" and "Amazon DynamoDB" are incorrect; AWS manages the OS for these services.

---

## 65. According to the AWS Shared Responsibility Model, who is responsible for managing the operating system and configuration of the Amazon RDS database instances?

- The customer
- AWS
- It is shared

**Explanation:**  
"AWS" is correct. For Amazon RDS, AWS manages the operating system and database software, including patching and
maintenance.  
"The customer" is incorrect; customers manage the database contents, schema, and access, not the OS or database
software.  
"It is shared" is incorrect; AWS handles the OS and database software management for RDS.``