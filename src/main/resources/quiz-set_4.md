# Practice Exam 1 for AWS Cloud Practitioner (CLF-CO2)

---

## 1. If you wanted to have identical configurations across your AWS systems for database connections, but you want to have the ability to have different systems connect to different database names depending if they are production or test environments, which AWS service would be ideal to implement?

- Parameter Store
- Distributor
- AWS AppConfig
- Automation

**Explanation:**
"Parameter Store" is correct. Parameter Store in AWS Systems Manager allows centralized storage of configuration values, secrets, and parameters. You can maintain different values for different environments (e.g., prod/test) while keeping consistent keys across systems.
"Distributor" is incorrect. Distributor is for deploying software packages and scripts to managed instances; it does not provide centralized configuration management.
"AWS AppConfig" is incorrect. AppConfig is designed to safely deploy application configuration updates but does not provide hierarchical parameter storage suitable for multiple environment separation.
"Automation" is incorrect. Automation runs operational runbooks, not centralized storage of configuration parameters.

---

## 2. Which Amazon EC2 pricing model allows customers to use existing server-bound software licenses?

- On-Demand Instances
- Reserved Instances
- Spot Instances
- Dedicated Hosts

**Explanation:**
"On-Demand Instances" is incorrect. On-Demand Instances allow you to pay for compute capacity by the hour or second with no long-term commitments, but they do not support bringing your own server-bound licenses.
"Reserved Instances" is incorrect. Reserved Instances provide a significant discount compared to On-Demand pricing in exchange for a one- or three-year commitment, but they do not support bringing your own server-bound licenses.
"Spot Instances" is incorrect. Spot Instances allow you to bid on unused EC2 capacity at reduced rates, but they do not support bringing your own server-bound licenses.
"Dedicated Hosts" is correct. Dedicated Hosts provide physical servers dedicated to your use, allowing you to use existing server-bound software licenses (such as Windows Server, SQL Server, or SUSE Linux Enterprise Server) that are bound to physical hardware.

---

## 3. Your company wants to provide easy and quick access to its developers to try applications and codes across multiple frameworks to determine what gets the best performance and scalability. Which cloud service category would you be looking to utilize?

- PaaS
- SaaS
- IaaS
- DaaS

**Explanation:**
"PaaS" is correct. Platform as a Service provides ready-to-use platforms with OS, runtime, and frameworks preconfigured. Developers can deploy applications quickly without managing infrastructure.
"SaaS" is incorrect. SaaS provides fully managed software applications; developers cannot deploy arbitrary code.
"IaaS" is incorrect. Infrastructure as a Service provides VMs and storage but requires developers to configure the platform themselves.
"DaaS" is incorrect. Desktop as a Service provides virtual desktops, not application deployment platforms.

---

## 4. Which of the following is a correct designation for an AWS Availability Zone?

- eu-south-1az2
- eu-south-1-a
- eu-south-1a
- eu-south-1.az1

**Explanation:**
"eu-south-1az2" is incorrect. This format is invalid; AZ identifiers have a single letter suffix.
"eu-south-1-a" is incorrect. Hyphen is not used before the letter.
"eu-south-1a" is correct. Availability Zones follow the pattern `<region><letter>`.
"eu-south-1.az1" is incorrect. This is not AWS’s naming convention.

---

## 5. Security groups are virtual firewalls within an AWS VPC. Which of the following is true about how security groups are applied?

- Security groups only apply to inbound traffic.
- Security groups apply to both inbound and outbound traffic.
- Security groups only apply to outbound traffic.
- Security groups only apply to traffic within the VPC.

**Explanation:**
"Security groups only apply to inbound traffic." is incorrect; they also control outbound traffic.
"Security groups apply to both inbound and outbound traffic." is correct. Security groups are stateful, allowing inbound rules and outbound rules for associated resources.
"Security groups only apply to outbound traffic." is incorrect.
"Security groups only apply to traffic within the VPC." is incorrect; they apply to traffic both inside and outside the VPC depending on rules.

---

## 6. Which component of the AWS Systems Manager provides an API to perform tasks against your resources throughout AWS?

- Explorer
- AWS AppConfig
- OpsCenter
- Inventory

**Explanation:**
"Explorer" is incorrect. Explorer provides aggregated visibility for operations, not task automation.
"AWS AppConfig" is incorrect. AppConfig manages configuration deployments.
"OpsCenter" is correct. OpsCenter provides APIs for investigating and remediating operational issues across AWS resources.
"Inventory" is incorrect. Inventory collects metadata about managed instances.

---

## 7. What AWS mechanism is used to protect the overall availability of resources within AWS and to protect users from potentially runaway billing as well?

- Constraints
- Segments
- Blocks
- Quotas

**Explanation:**
"Constraints" is incorrect; this term is not used for quota/billing limits in AWS.
"Segments" is incorrect; it does not relate to usage limits.
"Blocks" is incorrect; AWS does not use "blocks" for usage/billing control.
"Quotas" is correct. AWS service quotas (formerly limits) prevent overuse and potential runaway costs, and ensure resources remain available.

---

## 8. In a traditional data center, if you needed to add storage beyond what you already had connected to a server, you would need to buy or move hardware to expand. What key concept of cloud computing enables resources to be added without needing to add more hardware?

- On-demand self-service
- Virtualization
- Rapid elasticity
- Metered service

**Explanation:**
"On-demand self-service" is incorrect. This refers to the ability to request resources, not the elasticity concept itself.
"Virtualization" is partially related but does not directly address dynamic resource scaling.
"Rapid elasticity" is correct. Rapid elasticity allows cloud resources to be scaled up or down dynamically to meet demand without physical hardware changes.
"Metered service" is incorrect; it relates to billing, not dynamic resource scaling.

---

## 9. Which of the following AWS services under the Free Tier would have limitations for both storage of data and the number of requests per month to access it?

- CloudWatch
- Lambda
- Server Migration Service
- DynamoDB

**Explanation:**
"CloudWatch" is incorrect; its free tier primarily limits metrics and dashboards, not requests per se.
"Lambda" is incorrect; free tier is limited by compute time and invocation counts, not storage.
"Server Migration Service" is incorrect; free tier is not storage/request based.
"DynamoDB" is correct. DynamoDB free tier includes storage limits and request throughput limits (read/write capacity units).

---

## 10. Prior to performing data classification, which process must first be performed?

- Tokenization
- Discovery
- Location
- Identification

**Explanation:**
"Tokenization" is incorrect. Tokenization is replacing sensitive data with tokens after discovery/classification.
"Discovery" is correct. Discovery identifies where data resides, which is necessary before classifying it.
"Location" is partially related but is a subset of discovery.
"Identification" is subsequent to discovery; discovery comes first.

---

## 11. Select two managed instances that are offered as part of AWS OpsWorks.

- Git
- Rsync
- FlashCopy
- Chef Automate
- Puppet Enterprise

**Explanation:**
"Git" is incorrect; OpsWorks does not manage Git.
"Rsync" is incorrect; OpsWorks does not manage Rsync.
"FlashCopy" is incorrect; unrelated.
"Chef Automate" is correct. OpsWorks provides managed Chef Automate instances.
"Puppet Enterprise" is correct. OpsWorks also supports managed Puppet Enterprise.

---

## 12. Select two prominent headers for drop-down menus that appear across the top of the AWS Management Console.

- Billing Dashboard
- Cost Explorer
- Regions
- Automation
- Services

**Explanation:**
"Billing Dashboard" is incorrect; it’s a service page, not a top console menu.
"Cost Explorer" is incorrect; it’s a service page.
"Regions" is correct. AWS console includes a region selection drop-down at the top.
"Automation" is incorrect; not a top-level console menu.
"Services" is correct. Services drop-down provides access to all AWS services.

---

## 13. Which AWS support resource is an extensive set of FAQ pages that cover all AWS services and can be a useful resource for learning about AWS services and implementation ideas?

- Documentation
- Knowledge Center
- Discussion forums
- AWS Cloud Adoption Framework

**Explanation:**
"Documentation" is incorrect; it is product-specific docs, not FAQ-style content.
"Knowledge Center" is correct. Knowledge Center contains FAQ articles, guides, and troubleshooting tips.
"Discussion forums" is incorrect; forums are community-driven, not formal AWS FAQs.
"AWS Cloud Adoption Framework" is incorrect; it is a methodology, not FAQ content.

---

## 14. When moving to a cloud environment, which facet of computing does an organization give up control over and responsibilities for?

- Operations
- Security
- Hardware
- Data

**Explanation:**
"Operations" is partially retained via monitoring and management.
"Security" is shared with AWS; not fully given up.
"Hardware" is correct. Physical hardware, network, and underlying infrastructure are fully managed by AWS.
"Data" remains the responsibility of the customer.

---

## 15. You want to logically define an isolated and protected network space within AWS to deploy services. Which AWS service would you use?

- AWS Shield
- AWS VPC
- AWS Snowball
- AWS VPN

**Explanation:**
"AWS Shield" is incorrect; Shield provides DDoS protection.
"AWS VPC" is correct. Virtual Private Cloud creates an isolated network within AWS for deploying resources.
"AWS Snowball" is incorrect; Snowball is for data transport.
"AWS VPN" is incorrect; VPN connects existing networks to AWS, but does not create the isolated network itself.

---

## 16. Which process involves determining the security controls that are necessary for a piece of data based on its sensitivity and value?

- Labeling
- Hashing
- Classification
- Discovery

**Explanation:**
"Labeling" is only marking data; it does not determine controls.
"Hashing" is unrelated; it ensures integrity.
"Classification" is correct. Classification assesses sensitivity and guides what security controls should be applied.
"Discovery" is prior to classification; it identifies where data exists.

---

## 17. You suspect that one of your employees has been using your AWS services, including incurring billing charges, for personal use. Which AWS service would be the most useful to your investigation?

- AWS Budgets
- AWS Shield
- AWS CloudTrail
- Cost Explorer

**Explanation:**
"AWS Budgets" only shows cost limits and alerts, not detailed user actions.
"AWS Shield" is for DDoS protection; irrelevant.
"AWS CloudTrail" is correct. CloudTrail logs all API activity, enabling auditing of who accessed what and when.
"Cost Explorer" only analyzes cost patterns, not detailed API actions.

---

## 18. Which technology is widely used to verify the integrity of data objects against a known original value for any potential alterations or corruptions?

- Anonymizing
- Obfuscation
- Hashing
- Tokenization

**Explanation:**
"Anonymizing" removes identifiers; does not check integrity.
"Obfuscation" hides data; does not verify integrity.
"Hashing" is correct. Hash functions produce digests to verify that data has not been altered.
"Tokenization" replaces sensitive data with tokens; does not check integrity.

---

## 19. Which AWS region is limited to specific customers and is not available for selection in general?

- us-gov-west-1
- ca-central-1
- me-south-1
- sa-east-1

**Explanation:**
"us-gov-west-1" is correct. AWS GovCloud regions are restricted to US government customers and approved accounts.
"ca-central-1" is incorrect; publicly available.
"me-south-1" is incorrect; publicly available.
"sa-east-1" is incorrect; publicly available.

---

## 20. To provide optimal responsiveness for customers, AWS maintains a network of Edge locations throughout the world to provide ultra-low-latency access to data. Which AWS service is not available through Edge locations?

- CloudFront
- Lightsail
- AWS Shield
- Route 53

**Explanation:**
"CloudFront" is available at Edge locations for CDN functionality.
"Lightsail" is correct. Lightsail instances are not served via Edge locations.
"AWS Shield" is integrated with Edge locations to protect CloudFront.
"Route 53" is globally distributed and uses Edge network.

---

## 21. While AWS has the capabilities to meet many different hosting needs and models, which cloud deployment model best describes AWS as a whole?

- Community
- Private
- Hybrid
- Public

**Explanation:**
"Community" is incorrect. Community cloud is shared among a specific group of organizations.
"Private" is incorrect. Private cloud is dedicated to a single organization.
"Hybrid" is incorrect. Hybrid cloud combines on-premises and public cloud, but AWS itself is a public provider.
"Public" is correct. AWS provides services available to any customer via the internet, which defines a public cloud.

---

## 22. With a Platform as a Service (PaaS) implementation, which two areas of responsibility lie with the cloud user?

- Operating system
- Networking
- Storage
- Data
- Application code

**Explanation:**
"Operating system" is incorrect; PaaS abstracts OS management.
"Networking" is incorrect; PaaS handles networking setup internally.
"Storage" is incorrect; PaaS handles persistent storage management.
"Data" is correct. Users are responsible for their application data.
"Application code" is correct. Users develop and manage their application logic while the platform handles infrastructure and runtime.

---

## 23. Which of the following states is true about password policies for IAM accounts?

- AWS has a global password policy that is enforced for all IAM accounts to meet industry best practices.
- IAM accounts are free to use whatever password is desired by the account holder.
- IAM account passwords can only be set by the root account and cannot be modified by the account itself.
- IAM password policies have granular controls and can be set based on the regulatory or corporate policies required for the account.

**Explanation:**
"AWS has a global password policy that is enforced for all IAM accounts to meet industry best practices." is incorrect; IAM password policies are configurable per account.
"IAM accounts are free to use whatever password is desired by the account holder." is incorrect; passwords must follow the defined policy.
"IAM account passwords can only be set by the root account and cannot be modified by the account itself." is incorrect; users can change their passwords within policy limits.
"IAM password policies have granular controls and can be set based on the regulatory or corporate policies required for the account." is correct. Policies can enforce length, complexity, expiration, and reuse rules.

---

## 24. With implementing a data loss prevention (DLP) strategy, where would you place the solution to protect data in use?

- Network firewalls
- Web server
- User's device
- Storage system

**Explanation:**
"Network firewalls" is incorrect; they protect data in transit, not in use.
"Web server" is incorrect; protects specific data at rest or transit points, not in-use on devices.
"User's device" is correct. DLP agents on endpoints monitor and protect data while it is actively processed or used.
"Storage system" is incorrect; this protects data at rest, not actively in use.

---

## 25. What is the main difference between AWS Shield and AWS WAF?

- AWS Shield protects at the Layer 3 and 4 network levels, while AWS WAF protects at the Layer 7 content level.
- AWS Shield protects storage services; AWS WAF protects compute services.
- AWS Shield protects from external attacks, whereas AWS WAF protects between services within AWS.
- AWS Shield protects at the Layer 7 content level, while AWS WAF protects at the Layer 3 and 4 network traffic levels.

**Explanation:**
"AWS Shield protects at the Layer 3 and 4 network levels, while AWS WAF protects at the Layer 7 content level." is correct. Shield provides DDoS protection, and WAF provides application-layer filtering.
"AWS Shield protects storage services; AWS WAF protects compute services." is incorrect. Shield protects network attacks, not storage specifically.
"AWS Shield protects from external attacks, whereas AWS WAF protects between services within AWS." is incorrect; WAF protects application content at the edge.
"AWS Shield protects at the Layer 7 content level, while AWS WAF protects at the Layer 3 and 4 network traffic levels." is incorrect; the layers are reversed.

---

---

## 26. Which of the following is a correct service endpoint for an EC2 instance within AWS?

- ec2.amazonaws.com
- ec2.aws.com
- ec2.eu-west-2.amazonaws.com
- ec2.aws.amazon.com

**Explanation:**
"ec2.amazonaws.com" is partially correct but lacks region specificity.
"ec2.aws.com" is incorrect; AWS domains are amazonaws.com.
"ec2.eu-west-2.amazonaws.com" is correct. Standard endpoint format includes service.region.amazonaws.com.
"ec2.aws.amazon.com" is incorrect; domain format is invalid.

---

## 27. Within a cloud environment, which of the following is not a shared resource between tenants or customers?

- Data
- Storage
- Memory
- CPU

**Explanation:**
"Data" is correct. Each tenant's data is logically isolated and not shared.
"Storage" can be virtualized and shared among tenants.
"Memory" can be shared in virtualized environments.
"CPU" can be shared through hypervisor scheduling.

---

## 28. If you were located in Germany and wanted to run an EC2 instance within your own jurisdiction, which AWS region would allow you to accomplish that?

- us-west-1
- af-south-1
- eu-central-1
- ge-south-1

**Explanation:**
"us-west-1" is incorrect; located in the US.
"af-south-1" is incorrect; located in South Africa.
"eu-central-1" is correct. This AWS region is in Frankfurt, Germany.
"ge-south-1" is incorrect; there is no such AWS region.

---

## 29. Which cloud deployment model is associated with many popular services such as iCloud, OneDrive, and Instagram?

- SaaS
- IaaS
- DaaS
- PaaS

**Explanation:**
"SaaS" is correct. Software as a Service provides complete software applications accessible over the internet.
"IaaS" is incorrect. IaaS provides infrastructure, not end-user applications.
"DaaS" is incorrect; provides virtual desktops.
"PaaS" is incorrect; provides platforms to deploy applications, not ready-made consumer services.

---

## 30. Which CIDR block sizing will allow for the largest number of IP addresses within a subnet?

- /32
- /28
- /24
- /16

**Explanation:**
"/32" is incorrect; represents a single IP address.
"/28" is incorrect; provides 16 IPs.
"/24" is incorrect; provides 256 IPs.
"/16" is correct. /16 provides 65,536 IP addresses.

---

## 31. Access control list (ACLs) are security layers on the VPC that control traffic at the subnet level. Which of the following statements about ACLs is incorrect?

- ACLs are composed only of ALLOW rules.
- Every subnet must have an ACL assigned to it.
- ACLs can have different inbound and outbound rules.
- ACLs have numbered rules that are processed in order.

**Explanation:**
"ACLs are composed only of ALLOW rules." is correct as the incorrect statement. Network ACLs can have both ALLOW and DENY rules.
"Every subnet must have an ACL assigned to it." is correct; default ACL is automatically applied if not customized.
"ACLs can have different inbound and outbound rules." is correct.
"ACLs have numbered rules that are processed in order." is correct.

---

## 32. Which cloud service model is most closely associated with DevOps?

- SaaS
- IaaS
- DaaS
- PaaS

**Explanation:**
"SaaS" is incorrect; it is end-user software.
"IaaS" is incorrect; provides infrastructure.
"DaaS" is incorrect; virtual desktops.
"PaaS" is correct. PaaS provides platforms and deployment automation, supporting CI/CD pipelines central to DevOps practices.

---

## 33. Which key cloud computing characteristic enables someone to create an account with AWS and get up and running quickly after providing a credit card number?

- Broad network access
- Resource pooling
- On-demand self-service
- Multitenancy

**Explanation:**
"Broad network access" is incorrect; it refers to service access from any device.
"Resource pooling" is incorrect; it refers to shared physical resources.
"On-demand self-service" is correct. Users can provision resources instantly without human intervention.
"Multitenancy" is incorrect; it refers to shared resources among multiple customers.

---

## 34. Which component of the AWS Trusted Advisor would you use to look for any flagged resources that are not optimally configured to minimize service interruptions?

- Fault Tolerance
- Service Limits
- Security
- Performance

**Explanation:**
"Fault Tolerance" is correct. Trusted Advisor flags underutilized or misconfigured resources and provides guidance to improve availability and fault tolerance.
"Service Limits" checks quota usage, not fault tolerance.
"Security" identifies security gaps.
"Performance" identifies efficiency optimizations, but fault tolerance specifically focuses on availability.

---

## 35. With EC2, which layer belongs to AWS under the Shared Responsibility model?

- Hardware
- Data
- Application code
- Operating system

**Explanation:**
"Hardware" is correct. AWS is responsible for physical infrastructure.
"Data" is the customer’s responsibility.
"Application code" is the customer’s responsibility.
"Operating system" is generally the customer’s responsibility for EC2 instances.

---

## 36. Which computing concept allows the provisioning of services within a large pool of resources and sharing the same hardware infrastructure via a hypervisor?

- Elasticity
- Virtualization
- Containers
- Metered service

**Explanation:**
"Elasticity" is incorrect; elasticity refers to scaling resources.
"Virtualization" is correct. Virtualization allows multiple VMs to share the same physical hardware using hypervisors.
"Containers" are isolated processes but require an OS, not full virtualization.
"Metered service" is incorrect; refers to billing.

---

## 37. Which service of the AWS Systems Manager provides playbooks to perform tasks, both those provided by AWS and ones that can be custom-written by users?

- Automation
- OpsCenter
- Patch Manager
- AWS AppConfig

**Explanation:**
"Automation" is correct. Automation lets users execute workflows or runbooks (playbooks) on AWS resources.
"OpsCenter" manages operational issues.
"Patch Manager" applies patches.
"AWS AppConfig" manages application configuration rollout.

---

## 38. If you wanted to maintain flexibility in data processing, where the majority of your processes could be performed in a cloud environment, with other data-intensive processes such as video editing being maintained in your own data center, which cloud model would you utilize?

- Hybrid
- Private
- Public
- Community

**Explanation:**
"Hybrid" is correct. Hybrid cloud combines on-premises infrastructure with cloud resources for optimal flexibility.
"Private" is incorrect; fully on-premises.
"Public" is incorrect; fully cloud.
"Community" is incorrect; shared infrastructure for a group.

---

## 39. Which core aspect of cloud computing refers to users only paying for specific services that they use and only during the time in which they are in use?

- On-demand self-service
- Metered service
- Multitenancy
- Resource pooling

**Explanation:**
"On-demand self-service" is incorrect; provisioning, not billing.
"Metered service" is correct. Customers are billed for exact resource usage.
"Multitenancy" is incorrect; relates to shared resources.
"Resource pooling" is incorrect; relates to efficient hardware usage.

---

## 40. Which security concept is the use of hashing associated with?

- Privacy
- Availability
- Confidentiality
- Integrity

**Explanation:**
"Privacy" is partially related but not precise.
"Availability" is incorrect; hashing does not improve uptime.
"Confidentiality" is incorrect; hashing does not hide data, it ensures integrity.
"Integrity" is correct. Hashing verifies that data has not been altered.

---

## 41. What feature does the AWS Pricing Calculator offer for users to organize services for estimates?

- Units
- Services
- Groups
- Projects

**Explanation:**
"Units" is incorrect; units describe quantity, not organization.
"Services" is incorrect; this refers to individual AWS services, not grouping.
"Groups" is incorrect; no specific “groups” feature exists.
"Projects" is correct. Projects allow users to organize multiple service estimates together under a single project for easier tracking and management.

---

## 42. Which protocol is the most commonly used to protect data in transit with applications and services?

- HTTPS
- SMTP
- FTP
- SCP

**Explanation:**
"HTTPS" is correct. HTTPS encrypts HTTP traffic using TLS, protecting data in transit.
"SMTP" is incorrect; it is for email transmission, not general application data.
"FTP" is incorrect; FTP is unencrypted.
"SCP" is incorrect; SCP is for secure file transfer but not broadly used for general application data in transit.

---

## 43. When implementing multifactor security, which two things can be used along with a password to fulfill the requirements?

- Retinal scan
- PIN
- Challenge question
- Date of birth
- Hardware token

**Explanation:**
"Retinal scan" is correct; biometric factor.
"PIN" is incorrect; a PIN alone is knowledge-based and not a true second factor.
"Challenge question" is incorrect; knowledge-based, not considered strong MFA.
"Date of birth" is incorrect; same as above.
"Hardware token" is correct; a physical device generating codes fulfills MFA requirements.

---

## 44. Which key concept of cloud computing enables a user to remove all systems, accounts, and data from a cloud environment and ensure they have been completely removed?

- Reversibility
- Removability
- Erasability
- Portability

**Explanation:**
"Reversibility" is correct. Reversibility ensures that a customer can completely remove data and workloads from the cloud without vendor lock-in.
"Removability" is not a standard cloud concept.
"Erasability" is partially correct, but reversibility is the formal term in cloud computing.
"Portability" refers to moving workloads between providers, not deletion.

---

## 45. Which of the following is not an example of data at rest and the potential security implications of it?

- Machine images
- S3 objects
- API calls
- DynamoDB tables

**Explanation:**
"Machine images" is data at rest.
"S3 objects" is data at rest.
"API calls" is correct. API calls are transient events in transit, not stored data.
"DynamoDB tables" is data at rest.

---

## 46. Which key concept of cloud computing allows the resources to an application to be expanded to meet increased demand of the user without having to provision for maximum capacity in advance?

- Multitenancy
- Resource pooling
- Elasticity
- Metered service

**Explanation:**
"Multitenancy" is incorrect; it refers to shared infrastructure among customers.
"Resource pooling" is incorrect; it refers to sharing infrastructure.
"Elasticity" is correct. Elasticity enables automatic scaling of resources to meet demand.
"Metered service" is incorrect; it relates to billing.

---

## 47. While reserved instances apply only to EC2, Savings Plans incorporates two additional AWS services. Select these two services.

- Lightsail
- Elastic Beanstalk
- Fargate
- Lambda
- S3

**Explanation:**
"Lightsail" is incorrect; not covered by Savings Plans.
"Elastic Beanstalk" is incorrect; Savings Plans apply to the underlying compute, not the platform abstraction.
"Fargate" is correct. Savings Plans provide discounts for Fargate usage.
"Lambda" is correct. Lambda compute usage is covered under Savings Plans.
"S3" is incorrect; Savings Plans do not apply to storage.

---

## 48. Which of the following is not a technology used to protect data in transit?

- VPN
- HTTPS
- Ipsec
- S3 Encryption

**Explanation:**
"VPN" is used to encrypt data in transit.
"HTTPS" encrypts data in transit.
"Ipsec" encrypts network traffic.
"S3 Encryption" is correct. S3 encryption protects data at rest, not in transit.

---

## 49. Your company wants to save money by no longer running applications themselves or paying software developers for custom application code. Which cloud service category would you be looking at offerings for?

- PaaS
- IaaS
- SaaS
- DaaS

**Explanation:**
"PaaS" is incorrect; requires application code deployment.
"IaaS" is incorrect; requires deploying and managing applications.
"SaaS" is correct. SaaS provides fully managed applications, so you don’t need developers.
"DaaS" is incorrect; virtual desktops do not replace application development costs.

---

## 50. For optimal security, when should a root user account be used within AWS?

- To create initial admin accounts from the IAM console
- To use tools on the Billing Dashboard
- To approve S3 bucket creations
- To provision new services

**Explanation:**
"To create initial admin accounts from the IAM console" is correct. The root account should only be used for initial setup, billing, and emergency access.
"To use tools on the Billing Dashboard" is partially correct; root is required for some billing tasks, but IAM users with billing permissions are preferred.
"To approve S3 bucket creations" is incorrect; IAM users can create buckets.
"To provision new services" is incorrect; IAM users can provision services without root.

---

## 51. Which is the lowest support plan you would need to choose in order to get access to the AWS Trusted Advisor?

- Business
- Free
- Enterprise
- Developer

**Explanation:**
"Business" is incorrect; higher tier than required.
"Free" is incorrect; free tier has limited Trusted Advisor checks.
"Enterprise" is higher than required.
"Developer" is correct. Developer support gives limited Trusted Advisor access.

---

## 52. You want to restrict inbound requests to an EC2 instance, but you also want the systems to have the ability to automatically respond to those allowed requests without having to specifically allow the responses. Which AWS service would you use to accomplish this?

- AWS Shield
- Subnets
- Security groups
- ACLs

**Explanation:**
"AWS Shield" is incorrect; DDoS protection only.
"Subnets" is incorrect; subnets do not control per-instance traffic.
"Security groups" is correct. Security groups are stateful; they automatically allow response traffic for allowed inbound requests.
"ACLs" is incorrect; network ACLs are stateless and require explicit outbound rules.

---

## 53. Select two types of reserved instances offered by AWS for EC2 services.

- Dynamic
- Standard
- Convertible
- Hybrid
- Flexible

**Explanation:**
"Dynamic" is incorrect; not a reserved instance type.
"Standard" is correct. Standard RIs offer fixed discounts with predictable usage.
"Convertible" is correct. Convertible RIs allow exchanging for different instance types.
"Hybrid" is incorrect; not an AWS term.
"Flexible" is incorrect; not an AWS type.

---

## 54. With which AWS service would you expect to see service quotas regarding number of buckets, maximum object size, or number of restore requests?

- EC2
- S3 Glacier
- S3
- EBS

**Explanation:**
"EC2" is incorrect; EC2 quotas relate to instances, volumes, IPs.
"S3 Glacier" is incorrect; quotas are not prominently displayed here.
"S3" is correct. S3 provides service quotas for buckets, objects, requests, and lifecycle operations.
"EBS" is incorrect; quotas relate to volumes, snapshots, and IOPS.

---

## 55. Which cloud service category has volume and object storage associated with it?

- SaaS
- IaaS
- DaaS
- PaaS

**Explanation:**
"SaaS" is incorrect; application software does not provide raw storage.
"IaaS" is correct. IaaS provides virtualized compute, volume storage, and object storage for customers.
"DaaS" is incorrect; virtual desktops are not storage-focused.
"PaaS" is incorrect; PaaS abstracts storage management.

---

## 56. Which notation correctly identifies an Availability Zone within AWS?

- us-east-1-1
- eu-west-1a
- us-west-1.a
- sa-east-1-a

**Explanation:**
"us-east-1-1" is incorrect; incorrect format.
"eu-west-1a" is correct. AWS AZs are denoted by region plus a letter.
"us-west-1.a" is incorrect; dot notation is invalid.
"sa-east-1-a" is incorrect; extra hyphen is invalid.

---

## 57. As a government employee, you need to provide proof that any cloud systems you are using meet FedRAMP requirements. Where in the AWS Management Console would you look to find FedRAMP certifications?

- AWS Systems Manager
- AWS OpsWorks
- AWS Artifact
- AWS CloudTrail

**Explanation:**
"AWS Systems Manager" is incorrect; operational management, not compliance reports.
"AWS OpsWorks" is incorrect; configuration management only.
"AWS Artifact" is correct. Artifact contains compliance documents such as FedRAMP and SOC reports.
"AWS CloudTrail" is incorrect; logs API activity, not compliance evidence.

---

## 58. Which AWS tool will allow you to initiate processes as a result of events that are detected within CloudWatch and take action based on the value of the event?

- Alarms
- Triggers
- Alerts
- Events

**Explanation:**
"Alarms" is partially correct; alarms detect thresholds but don’t perform custom actions.
"Triggers" is correct. Triggers in CloudWatch Events (now EventBridge) initiate workflows in response to events.
"Alerts" is incorrect; they are notifications only.
"Events" is incomplete; CloudWatch Events provides infrastructure, triggers execute actions.

---

## 59. As part of the AWS Free Tier, which service offers a user a free one-month trial of either a Linux or Windows platform?

- Lightsail
- AppStream
- Inspector
- GuardDuty

**Explanation:**
"Lightsail" is correct. Lightsail provides simple VM instances with a one-month free trial.
"AppStream" is incorrect; managed application streaming.
"Inspector" is incorrect; security assessment tool.
"GuardDuty" is incorrect; threat detection service.

---

## 60. Which cloud concept refers to the assigning of jobs, tasks, roles, and responsibilities and ensuring they are satisfactorily performed?

- Maintenance
- Auditability
- Governance
- Interoperability

**Explanation:**
"Maintenance" is incorrect; operational work only.
"Auditability" is incorrect; relates to checking performance.
"Governance" is correct. Governance ensures accountability, roles, and enforcement of policies.
"Interoperability" is incorrect; relates to system compatibility.

---

## 61. Which authentication method is supported by the AWS CLI to perform automation tasks on your AWS account?

- Username/password
- MFA
- Security hardware token
- Access/secret key

**Explanation:**
"Username/password" is incorrect; AWS CLI does not support password-based automation.
"MFA" is partially correct; used as additional authentication, not primary CLI auth.
"Security hardware token" is incorrect; hardware token is for MFA.
"Access/secret key" is correct. AWS CLI uses access key ID and secret access key for automated authentication.

---

## 62. Which AWS service is utilized to consolidate monitoring and measure services for your entire account within AWS?

- AWS Shield
- AWS CloudWatch
- AWS WAF
- AWS CloudTrail

**Explanation:**
"AWS Shield" is incorrect; DDoS protection.
"AWS CloudWatch" is correct. CloudWatch aggregates metrics, logs, and monitoring across all AWS services.
"AWS WAF" is incorrect; application firewall.
"AWS CloudTrail" is incorrect; logs API calls, not metrics.

---

## 63. AWS offers a fully managed virtual desktop infrastructure (VDI) solution with both Windows and Linux options. Which AWS service is this?

- AppStream
- AWS Desktop
- WorkLink
- WorkSpaces

**Explanation:**
"AppStream" is incorrect; application streaming, not full desktop VDI.
"AWS Desktop" is incorrect; service name is not correct.
"WorkLink" is incorrect; mobile access to internal apps.
"WorkSpaces" is correct. WorkSpaces provides managed Windows/Linux virtual desktops.

---

## 64. Which standard is widely used for SSO federations and implementations?

- xml
- sql
- SAML
- Json

**Explanation:**
"xml" is incorrect; XML is a markup language, not a standard.
"sql" is incorrect; unrelated to authentication.
"SAML" is correct. Security Assertion Markup Language (SAML) is the standard for SSO and federated authentication.
"Json" is incorrect; data interchange format only.

---

## 65. In the AWS Pricing Calculator, which AWS service offers options for both a quick estimate and an advanced estimate?

- Elastic Beanstalk
- Lightsail
- EC2
- S3

**Explanation:**
"Elastic Beanstalk" is incorrect; calculator uses underlying compute services.
"Lightsail" is incorrect; calculator supports simple estimates only.
"EC2" is correct. EC2 offers both quick and advanced estimates due to configurable instance types, pricing models, and additional features.
"S3" is incorrect; calculator provides simpler object storage cost estimation only.

