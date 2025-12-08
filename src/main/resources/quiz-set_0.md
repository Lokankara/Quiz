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
"The provider handles maintenance tasks" is correct. Managed services offload routine maintenance, letting companies focus on applications.  
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
"Patching the EC2 Operating System" is correct. Customers are fully responsible for the operating system running on EC2 instances. This includes applying security updates, installing patches, configuring firewalls, and maintaining OS-level hardening. AWS only manages the underlying physical hardware and virtualization layer, not the guest operating system.
"Setting up encryption on an Amazon S3 bucket" is correct. Customers are responsible for enabling and configuring encryption for their data stored in S3. This includes choosing between SSE-S3, SSE-KMS, or client-side encryption and managing access policies. AWS provides the tools, but the decision and implementation belong to the customer.
"Patching the network infrastructure" is incorrect. AWS is responsible for maintaining and patching the underlying network infrastructure that supports AWS services. This includes routers, switches, and physical networking devices. Customers do not have visibility into or control over this layer.
"Physical security of data center facilities" is incorrect. AWS is responsible for securing the physical data centers, including buildings, power, cooling, surveillance, and access controls. Customers do not manage or access AWS physical facilities, and this responsibility is entirely handled by AWS.

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
"Grant least privilege" is correct. This principle ensures that users and services receive only the permissions required to perform their tasks and nothing more. It reduces the attack surface by limiting unnecessary access to resources. Least privilege helps prevent accidental misuse and limits the impact of compromised credentials. It is a foundational security practice in AWS access management.
"Customer-managed policies" is correct. These policies are fully created and controlled by customers, allowing precise and reusable permission definitions. They can be attached to multiple users, groups, or roles and updated centrally. This provides fine-grained control and scalability for complex permission structures. Customer-managed policies support strict governance and auditing requirements.
"Use service accounts" is incorrect because AWS does not use a service-account model like some other platforms. AWS access is managed through IAM users, groups, and roles. Roles are used for services and temporary access rather than service accounts. The terminology and access model are fundamentally different.
"Account-level policies" is incorrect because IAM policies are not directly attached at the account root level as permission objects. Policies are always attached to users, groups, or roles to define access. While SCPs exist at the organization level, standard IAM permissions are never assigned directly to an account itself.

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
"Only in one single availability zone" is correct. Auto Scaling can manage instances within a single AZ to handle varying load while maintaining availability. It allows scaling up or down depending on demand in that specific zone. This is useful for simpler architectures or when regional redundancy is not required.
"Multiple availability zones within a region" is correct. Auto Scaling can distribute instances across multiple AZs in the same region to improve fault tolerance and availability. By spanning AZs, it mitigates the impact of an outage in one zone. It ensures that applications remain highly available and resilient to localized failures.
"Multiple availability zones across multiple regions" is incorrect because Auto Scaling operates at the regional level, not across regions. Scaling across regions requires separate configurations per region.
"Everywhere, there are no constraints" is incorrect because Auto Scaling is limited by the region and available AZs. It cannot automatically manage instances outside the configured region.

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
"Amazon Machine Images (AMIs)" is correct. Customers are responsible for creating, maintaining, hardening, and updating their own AMIs. This includes selecting the base operating system, installing required software, and applying security patches. AMIs directly affect the security posture of EC2 instances. Improperly maintained AMIs can introduce vulnerabilities across all launched instances.
"Applications in EC2 instances" is correct. Customers fully manage the applications running inside EC2, including installation, configuration, patching, and security updates. This responsibility includes application-level firewalls, encryption, authentication mechanisms, and vulnerability management. AWS does not control or manage customer application behavior inside EC2.
"Virtualization infrastructure" is incorrect because AWS manages the hypervisor and the underlying virtualization layer. Customers have no visibility or control over this layer. AWS ensures isolation, security, and maintenance of the virtualization stack.
"Network infrastructure" is incorrect because AWS manages the physical networking hardware, including routers, switches, and backbone connectivity. While customers configure security groups and routing at the logical level, the physical network itself is fully AWS-managed.
"Physical security of hardware" is incorrect because AWS is solely responsible for securing data centers, servers, storage devices, and physical access controls. Customers have no responsibility or access at the physical infrastructure level.

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
  "AWS Lambda" is correct. Lambda functions can be triggered directly by SNS messages, enabling serverless event-driven workflows. This allows automatic processing of notifications without manual intervention.
  "Email" is correct. SNS can send notifications directly to email endpoints, making it suitable for alerting users. Subscribers receive messages in real time.
  "Amazon S3" is incorrect; S3 cannot directly subscribe to SNS topics. It relies on other services like Lambda or EventBridge for integration.
  "Amazon CloudWatch" is incorrect; CloudWatch can trigger SNS notifications but does not act as a subscriber to topics. It serves as a monitoring and alerting tool.

---

## 33. What are two benefits of deploying a relational database on Amazon RDS instead of Amazon EC2?

- Software patching
- Unlimited resources
- Cost savings
- Automatic backup

**Explanation:**
"Software patching" is correct. Amazon RDS handles patching of the database engine and underlying infrastructure so you don’t need to manually update software or OS on the managed database servers.
"Automatic backup" is correct. RDS automatically creates backups and preserves transaction logs to allow point‑in‑time recovery, reducing the manual effort required to maintain reliable backups.
"Unlimited resources" is incorrect because RDS allocates resources (compute, storage, IOPS) per instance and you are limited by the instance class, storage quotas, and AWS account limits.
"Cost savings" is incorrect because while RDS may reduce operational overhead, cost savings depend on usage patterns, instance types, storage size, and configuration — they are not guaranteed.

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
"It retrieves authentication information from a central repository using an API call" is correct. AWS Secrets Manager allows applications to securely access secrets programmatically without embedding credentials in code.
"It encrypts data at rest" is correct. Secrets Manager automatically encrypts stored secrets using AWS Key Management Service (KMS), ensuring secure storage.
"It provides free storage" is incorrect because Secrets Manager is a paid service with charges per secret and API calls.
"It replaces hardcoding authentication information in code" is incorrect; while it reduces the need to hardcode secrets, it does not automatically modify existing code.
"It replaces IAM users and roles" is incorrect; Secrets Manager manages secrets and credentials, but does not replace identity and access management controls.

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
"Reduced operational overhead" is correct. Managed services handle routine tasks such as patching, scaling, and monitoring, reducing manual effort.
"Automated backups" is correct. Managed services often include built-in backup capabilities, ensuring data protection without user intervention.
"Reduced capital expenses" is incorrect; managed services incur operational costs rather than directly reducing capital expenditures.
"Automated infrastructure deployment using code" is incorrect; this functionality is provided by infrastructure-as-code tools like AWS CloudFormation, not by managed services themselves.

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
"HDD" is correct. EBS provides HDD-backed volumes designed for large, sequential workloads where throughput is more important than low latency. These volumes are suitable for log processing, big data workloads, and streaming applications. They offer lower cost per GB compared to SSD. HDD options include st1 and sc1 volume types.
"SSD" is correct. EBS provides SSD-backed volumes optimized for transactional workloads requiring low latency and high IOPS performance. These volumes support databases, boot volumes, and latency-sensitive applications. SSD options include gp3 and io2. They deliver predictable performance with consistent I/O characteristics.
"NAS" is incorrect because EBS is not a network-attached file storage system. It provides block-level storage attached to a single EC2 instance.
"Object" is incorrect because object storage refers to services like Amazon S3, not EBS. EBS volumes present as raw block devices for file systems or applications.
"SAN" is incorrect because EBS is not a traditional storage area network exposed over specialized hardware. It is a managed, network-based block storage service abstracted by AWS.

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
"AWS Cost Explorer" is correct. AWS Cost Explorer allows customers to visualize, analyze, and forecast AWS spending using historical cost and usage data. It provides predictive forecasts based on previous consumption patterns, helping organizations estimate future expenses. The tool supports filtering by service, account, tag, and region to improve financial planning accuracy. It is widely used for budgeting, cost optimization, and trend analysis.
"AWS Organizations" is incorrect because it is designed for centralized account management and governance, not cost forecasting. It helps manage multiple AWS accounts, apply Service Control Policies, and consolidate billing. While it supports cost allocation across accounts, it does not generate predictive cost forecasts.
"Amazon DevPay" is incorrect because it was a legacy billing and monetization service that allowed developers to charge customers for applications hosted on AWS. It did not provide cost forecasting or spending analysis tools. The service has been deprecated and is no longer part of the active AWS ecosystem.
"AWS Trusted Advisor" is incorrect because it provides best-practice recommendations for cost optimization, security, fault tolerance, performance, and service limits. While it can identify potential cost savings, it does not generate spending forecasts. Its focus is on improving efficiency and reducing waste rather than predicting future costs.

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
"IAM" is correct. IAM is a global service that manages users, groups, roles, and permissions across all AWS regions. It does not belong to any single region and its configurations apply globally to the entire AWS account. This allows consistent identity and access control regardless of where resources are deployed.
"CloudFront" is correct. CloudFront is a global content delivery network that distributes content through edge locations worldwide. It is not tied to a specific AWS region and serves users based on geographic proximity. CloudFront improves performance, availability, and security on a global scale.
"Lightsail" is incorrect. Lightsail is a regional service where all instances, storage, and networking resources are created within a specific AWS region. Availability and resource location are region-dependent.
"S3" is incorrect. S3 buckets are created in specific regions and data residency is tied to the selected region, even though the service itself is accessible globally. Replication across regions requires explicit configuration.
"EC2" is incorrect. EC2 instances are launched within specific regions and Availability Zones. Compute capacity, networking, and storage are all region-scoped resources.

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
"Amazon EC2" is correct. Customers manage and patch the OS on EC2. EC2 provides full control over the virtual machine, including the operating system, networking stack, and installed software. Because of this control, customers are fully responsible for applying security updates, patches, and OS hardening. This responsibility exists regardless of whether the instance runs Linux, Windows, or a custom OS image.
"AWS Fargate" is incorrect; AWS manages the OS for this service. Fargate is a serverless compute engine for containers that removes the need to manage servers or virtual machines. Customers only define container images, CPU, memory, and networking. All underlying OS maintenance, patching, and infrastructure security are handled entirely by AWS.
"Amazon Lambda" is incorrect; AWS manages the OS for this service. Lambda is a fully managed serverless compute service where customers upload code and define execution parameters only. The runtime environment, operating system, scaling, and patching are fully controlled by AWS. Customers are responsible only for application code and its dependencies.
"Amazon DynamoDB" is incorrect; AWS manages the OS for this service. DynamoDB is a fully managed NoSQL database service where customers interact only with tables, items, and access policies. The underlying servers, operating systems, storage, and patching processes are fully abstracted and maintained by AWS. Customers have no OS-level access or maintenance responsibility.

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

---
