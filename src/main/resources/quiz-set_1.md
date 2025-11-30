# AWS Certification / Cloud Concepts

---

## 1. Which Amazon Web Services security tool uses an agent installed on Amazon Elastic Compute Cloud instances to check for vulnerabilities or unexpected changes in the application?
- **Amazon Inspector**
- Amazon Macie
- Amazon Glacier

**Explanations:**
- **Amazon Inspector:** Correct. Amazon Inspector uses an agent installed on EC2 instances to automatically assess applications for vulnerabilities or deviations from best practices, including unexpected changes.
- **Amazon Macie:** Incorrect. Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS, such as personally identifiable information (PII), but it does not use an agent on EC2 instances.
- **Amazon Glacier:** Incorrect. Amazon Glacier is a secure, durable, and low-cost storage service for data archiving and long-term backup, not a security assessment tool.

---

## 2. Which Amazon EC2 pricing model allows customers to use existing server-bound software licenses?
- **On-Demand Instances**
- **Reserved Instances**
- **Spot Instances**
- **Dedicated Hosts**

**Explanations:**
- **On-Demand Instances:** Incorrect. On-Demand Instances allow you to pay for compute capacity by the hour or second with no long-term commitments, but they do not support bringing your own server-bound licenses.
- **Reserved Instances:** Incorrect. Reserved Instances provide a significant discount compared to On-Demand pricing in exchange for a one- or three-year commitment, but they do not support bringing your own server-bound licenses.
- **Spot Instances:** Incorrect. Spot Instances allow you to bid on unused EC2 capacity at reduced rates, but they do not support bringing your own server-bound licenses.
`- **Dedicated Hosts:** Correct. Dedicated` Hosts provide physical servers dedicated to your use, allowing you to use existing server-bound software licenses (such as Windows Server, SQL Server, or SUSE Linux Enterprise Server) that are bound to physical hardware.

---

## 3. Which Amazon Web Services service allows you to assign a policy to a user group?
- **IAM**
- **S3**
- **EC2**
- **CloudFormation**

**Explanations:**
- **IAM:** Correct. AWS Identity and Access Management (IAM) allows you to create user groups and assign policies to them, controlling permissions for multiple users at once.
- **S3:** Incorrect. Amazon S3 is an object storage service and does not manage user groups or assign policies to them directly; it uses bucket policies and access control lists for resource permissions.
- **EC2:** Incorrect. Amazon EC2 is a compute service for running virtual servers and does not manage user groups or policies.
- **CloudFormation:** Incorrect. AWS CloudFormation is a service for provisioning AWS resources using templates, not for managing user groups or policies.

---

## 4. What is Amazon responsible for under the AWS shared responsibility model?
- **Managing guest operating systems**
- **Securing underlying infrastructure and foundation services**
- **Securing application access and data**
- **Configuring third-party applications**

**Explanations:**
- **Managing guest operating systems:** Incorrect. Customers are responsible for managing the guest operating systems on their EC2 instances and other compute resources.
- **Securing underlying infrastructure and foundation services:** Correct. AWS is responsible for securing the infrastructure that runs all of the services offered in the AWS Cloud, including hardware, software, networking, and facilities.
- **Securing application access and data:** Incorrect. Customers are responsible for securing their applications and data within AWS services.
- **Configuring third-party applications:** Incorrect. Customers are responsible for configuring and managing any third-party applications they deploy on AWS.

---

## 5. Which cloud deployment model involves using public cloud resources in addition to keeping some servers on-premises?
- **Hybrid cloud**
- **Community cloud**
- **Public cloud**
- **Private cloud**

**Explanations:**
- **Hybrid cloud:** Correct. A hybrid cloud deployment combines public cloud resources with on-premises infrastructure, allowing data and applications to be shared between them.
- **Community cloud:** Incorrect. A community cloud is shared by several organizations with common concerns, not specifically a mix of public cloud and on-premises resources.
- **Public cloud:** Incorrect. A public cloud is fully managed by a third-party provider and resources are available to the general public, with no on-premises integration.
- **Private cloud:** Incorrect. A private cloud is dedicated to a single organization and may be hosted on-premises or by a third party, but does not involve public cloud resources.

---

## 6. Which of the following are true about security groups, but not ACLs? (Choose two)
- **Traffic is automatically allowed outbound to respond to an allowed inbound rule.**
- **Rules are applied to only specify things allowed.**
- **The VPC by default will allow a traffic for both inbound and outbound routes**
- **Rule are applied at the subnet level.**
- **Each subnet must have a security group applied**

**Explanations:**
- **Traffic is automatically allowed outbound to respond to an allowed inbound rule:** Correct. Security groups are stateful, meaning if you allow inbound traffic, the response is automatically allowed outbound. ACLs are stateless and require explicit rules for both directions.
- **Rules are applied to only specify things allowed:** Correct. Security groups use only "allow" rules, while ACLs can have both "allow" and "deny" rules.
- **The VPC by default will allow a traffic for both inbound and outbound routes:** Incorrect. VPCs do not automatically allow all traffic; security groups and ACLs control traffic.
- **Rule are applied at the subnet level:** Incorrect. This describes network ACLs, not security groups.
- **Each subnet must have a security group applied:** Incorrect. Security groups are applied to instances, not subnets.

---

## 7. Where in the architecture should firewalling be implemented for a web hosting design using AWS?
- **For all access layer functions**
- **At the perimeter**
- **At the core**
- **At all layers.**

**Explanations:**
- **For all access layer functions:** Incorrect. While firewalling is important at the access layer, limiting it to only this layer does not provide comprehensive protection.
- **At the perimeter:** Incorrect. Perimeter firewalling protects the boundary of the network, but threats can exist internally as well.
- **At the core:** Incorrect. The core is the central part of the network, but firewalling only here leaves other areas vulnerable.
- **At all layers:** Correct. Implementing firewalling at all layers (perimeter, access, core, and application) provides defense in depth and comprehensive protection against threats.

---

## 8. Which cloud characteristic involves delivering the same resources to a large pool of customers?
- **Elasticity**
- **Agility**
- **Scalability**
- **Multitenancy**

**Explanations:**
- **Elasticity:** Incorrect. Elasticity is the ability to automatically scale resources up or down based on demand, not about sharing resources among customers.
- **Agility:** Incorrect. Agility refers to the speed and flexibility to adapt to changes, not about resource sharing.
- **Scalability:** Incorrect. Scalability is the ability to handle increased workload by adding resources, not about sharing resources among customers.
- **Multitenancy:** Correct. Multitenancy is the characteristic where the same resources are securely and efficiently shared among multiple customers (tenants).

---

## 9. Which two options should be used to improve the security of your AWS Management Console?
- **IAM roles**
- **Strong password policies**
- **Multi-factor authentication (MFA)**
- **AWS Key Management Service (KMS)**

**Explanations:**
- **IAM roles:** Incorrect. IAM roles are used to delegate permissions to AWS resources and services, not directly to secure console access.
- **Strong password policies:** Correct. Enforcing strong password policies ensures that users create complex, hard-to-guess passwords, improving account security.
- **Multi-factor authentication (MFA):** Correct. MFA adds an extra layer of security by requiring a second form of authentication in addition to a password.
- **AWS Key Management Service (KMS):** Incorrect. KMS is used for managing cryptographic keys, not for securing console access.

---

## 10. Which AWS database service encrypts data at rest by default?
- **Amazon Aurora**
- **Amazon RDS**
- **Amazon Redshift**
- **Amazon DynamoDB**

**Explanations:**
- **Amazon Aurora:** Incorrect. Aurora supports encryption at rest, but it is not enabled by default; you must enable it when creating the database cluster.
- **Amazon RDS:** Incorrect. RDS supports encryption at rest, but it is not enabled by default; you must enable it when creating the database instance.
- **Amazon Redshift:** Incorrect. Redshift supports encryption at rest, but it is not enabled by default; you must enable it when creating the cluster.
- **Amazon DynamoDB:** Correct. DynamoDB encrypts all data at rest by default, with no action required from the user.

---

This is a partial list of the 65 questions. Due to the character limit, I cannot include all 65 questions in one response. If you'd like, I can provide the rest of the questions in subsequent responses. Let me know! 😊
next in same frame format
markdown


---

## 11. Which of the following statements about security groups is true?
- **Security groups allow all inbound traffic by default, but no outbound traffic.**
- **Security groups allow all outbound traffic by default, but no inbound traffic.**
- **Security groups allow all outbound and inbound traffic by default.**
- **Security groups deny all inbound and outbound traffic by default.**

**Explanations:**
- **Security groups allow all inbound traffic by default, but no outbound traffic:** Incorrect. By default, security groups deny all inbound traffic and allow all outbound traffic.
- **Security groups allow all outbound traffic by default, but no inbound traffic:** Correct. By default, security groups deny all inbound traffic and allow all outbound traffic.
- **Security groups allow all outbound and inbound traffic by default:** Incorrect. Only outbound traffic is allowed by default; inbound traffic is denied.
- **Security groups deny all inbound and outbound traffic by default:** Incorrect. Outbound traffic is allowed by default.

---

## 12. Which feature of the AWS Systems Manager provides a way to store and push software packages out to your AWS instances?
- **Distributor**
- **Inventory**
- **AWS AppConfig**
- **Explorer**

**Explanations:**
- **Distributor:** Correct. Distributor is a feature of AWS Systems Manager that allows you to securely store and distribute software packages to your managed instances.
- **Inventory:** Incorrect. Inventory collects and queries configuration and inventory information about your AWS resources, not for distributing software.
- **AWS AppConfig:** Incorrect. AppConfig is used for managing and deploying application configurations, not software packages.
- **Explorer:** Incorrect. Explorer provides a customizable operations dashboard for insights into your AWS resources, not for distributing software.

---

## 13. Which Amazon Web Services (AWS) service is designed for time series data analytics?
- **Amazon ElasticSearch**
- **Amazon DynamoDB**
- **Amazon Timestream**
- **Amazon Kinesis**

**Explanations:**
- **Amazon ElasticSearch:** Incorrect. Amazon Elasticsearch (now Amazon OpenSearch Service) is designed for search and analytics of log and text data, not specifically for time series data.
- **Amazon DynamoDB:** Incorrect. DynamoDB is a NoSQL database for key-value and document data, not optimized for time series analytics.
- **Amazon Timestream:** Correct. Amazon Timestream is a purpose-built time series database for storing and analyzing time series data, such as IoT sensor data and operational metrics.
- **Amazon Kinesis:** Incorrect. Amazon Kinesis is designed for real-time data streaming and processing, not specifically for time series analytics.

---

## 14. Which Amazon Web Services tool can be used to monitor, store and access log files created by EC2 instances and on-premises servers?
- **Amazon CloudFront**
- **AWS Global Accelerator**
- **Amazon CloudWatch Logs**
- **AWS Organization**

**Explanations:**
- **Amazon CloudFront:** Incorrect. CloudFront is a content delivery network (CDN) for distributing content globally, not for log management.
- **AWS Global Accelerator:** Incorrect. Global Accelerator improves the availability and performance of your applications with global users, not for log management.
- **Amazon CloudWatch Logs:** Correct. CloudWatch Logs can monitor, store, and access log files from EC2 instances and on-premises servers.
- **AWS Organization:** Incorrect. AWS Organizations is used for managing multiple AWS accounts, not for log management.

---

## 15. At what level are security groups applied?
- **Subnet**
- **Instance**
- **Account**
- **VPC**

**Explanations:**
- **Subnet:** Incorrect. Security groups are not applied at the subnet level; network ACLs are used for subnet-level security.
- **Instance:** Correct. Security groups are applied at the instance level, controlling inbound and outbound traffic for each EC2 instance.
- **Account:** Incorrect. Security groups are not applied at the AWS account level; they are associated with resources like instances.
- **VPC:** Incorrect. Security groups are associated with resources within a VPC, but not applied to the VPC itself.

---

## 16. You are starting to move your company's systems into AWS, and you need to make sure you have a support plan that will assist with integrating many of your common third-party applications into the AWS ecosystem. Which is the lowest-level support plan you would need to purchase for this level of support?
- **Business**
- **Developer**
- **Integration**
- **Enterprise**

**Explanations:**
- **Business:** Correct. The Business support plan is the lowest-level AWS support plan that provides guidance and support for integrating third-party applications, including access to AWS Trusted Advisor and 24x7 support.
- **Developer:** Incorrect. The Developer support plan provides guidance for AWS best practices and general questions, but does not include support for third-party application integration.
- **Integration:** Incorrect. There is no AWS support plan called "Integration."
- **Enterprise:** Incorrect. The Enterprise support plan provides the highest level of support, including a Technical Account Manager, but the Business plan is the lowest plan that covers third-party integration.

---

## 17. Which characteristic of cloud computing enables accessing computer system resources rapidly and elastically?
- **Agility**
- **Availability**
- **Scalability**
- **Durability**

**Explanations:**
- **Agility:** Incorrect. Agility refers to the ability to quickly adapt to changes and deploy new solutions, not specifically to rapid and elastic resource access.
- **Availability:** Incorrect. Availability is about ensuring resources are accessible when needed, not about rapid or elastic scaling.
- **Scalability:** Correct. Scalability is the characteristic that allows cloud resources to be accessed and adjusted rapidly and elastically to meet changing demands.
- **Durability:** Incorrect. Durability refers to the ability of data to remain intact and accessible over time, not to resource scaling.

---

## 18. Which AWS service allows you to centrally manage security and compliance controls across multiple AWS accounts?
- **AWS Config**
- **AWS Shield**
- **AWS Organizations**
- **AWS Inspector**

**Explanations:**
- **AWS Config:** Incorrect. AWS Config is used for tracking resource configurations and compliance within a single account, not for central management across multiple accounts.
- **AWS Shield:** Incorrect. AWS Shield provides DDoS protection, not central management of security and compliance controls.
- **AWS Organizations:** Correct. AWS Organizations allows you to centrally manage policies, security, and compliance controls across multiple AWS accounts in your organization.
- **AWS Inspector:** Incorrect. AWS Inspector is a security assessment service for identifying vulnerabilities in AWS resources, not for central management across accounts.

---

## 19. Which AWS service allows traffic from the internet to access resources in a VPC?
- **Transit Gateway**
- **Network Access Control List (NaCl)**
- **NAT Gateway**
- **Internet Gateway**

**Explanations:**
- **Transit Gateway:** Incorrect. Transit Gateway is used to connect multiple VPCs and on-premises networks, not for direct internet access.
- **Network Access Control List (NaCl):** Incorrect. NACLs are used to control traffic at the subnet level within a VPC, not to provide internet access.
- **NAT Gateway:** Incorrect. NAT Gateway allows instances in a private subnet to access the internet, but does not allow inbound internet traffic to those resources.
- **Internet Gateway:** Correct. An Internet Gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between resources in your VPC and the internet.

---

## 20. Which Amazon Web Services service is designed for time series data and operational analytics?
- **Amazon Timestream**
- **Amazon DynamoDB**
- **Amazon ElasticSearch**
- **Amazon Kinesis**

**Explanations:**
- **Amazon Timestream:** Correct. Amazon Timestream is a purpose-built time series database for storing and analyzing time series data, such as operational metrics and IoT sensor data.
- **Amazon DynamoDB:** Incorrect. DynamoDB is a NoSQL database for key-value and document data, not optimized for time series analytics.
- **Amazon ElasticSearch:** Incorrect. Amazon Elasticsearch (now Amazon OpenSearch Service) is designed for search and analytics of log and text data, not specifically for time series data.
- **Amazon Kinesis:** Incorrect. Amazon Kinesis is designed for real-time data streaming and processing, not specifically for time series analytics.

---

## 21. Which of the following AWS services under the Free Tier would have limitations for 750 hours of usage for the month?
- **CloudWatch**
- **Lambda**
- **RDS Migration Service**
- **EC2**

**Explanations:**
- **CloudWatch:** Incorrect. CloudWatch Free Tier is based on metrics and logs, not on a specific number of hours of usage.
- **Lambda:** Incorrect. Lambda Free Tier is based on the number of requests and compute time (GB-seconds), not on hours of usage.
- **RDS Migration Service:** Incorrect. AWS Database Migration Service Free Tier is based on migration hours, but not specifically 750 hours per month.
- **EC2:** Correct. The AWS Free Tier for EC2 provides up to 750 hours of t2.micro or t3.micro instance usage per month for the first 12 months.

---

## 22. Which Amazon Web Services service can you use to create billing alarms?
- **AWS Systems Manager**
- **Amazon CloudWatch**
- **Amazon CloudFormation**
- **Amazon CloudFront**

**Explanations:**
- **AWS Systems Manager:** Incorrect. Systems Manager is used for managing AWS resources and automating operational tasks, not for creating billing alarms.
- **Amazon CloudWatch:** Correct. CloudWatch allows you to create billing alarms to monitor your AWS usage and costs.
- **Amazon CloudFormation:** Incorrect. CloudFormation is used for provisioning AWS resources using templates, not for creating billing alarms.
- **Amazon CloudFront:** Incorrect. CloudFront is a content delivery network (CDN) for distributing content globally, not for creating billing alarms.

---

## 23. Which AWS security service will provide protection against DDoS attacks with both Standard and Advanced Tiers?
- **Route 53**
- **AWS Shield**
- **AWS WAF**
- **AWS CloudWatch**

**Explanations:**
- **Route 53:** Incorrect. Route 53 is a DNS service that provides domain name resolution and routing, but it does not specifically protect against DDoS attacks.
- **AWS Shield:** Correct. AWS Shield is a managed DDoS protection service that offers two tiers: Standard (free, automatic protection) and Advanced (paid, enhanced protection).
- **AWS WAF:** Incorrect. AWS WAF is a web application firewall that protects against common web exploits, but it is not specifically designed for DDoS protection.
- **AWS CloudWatch:** Incorrect. CloudWatch is a monitoring service for AWS resources and applications, not a DDoS protection service.

---

## 24. What should customers do to ensure the availability and backup of Amazon EBS volumes?
- **Attach new volumes to EC2 instances**
- **Delete the data and create new EBS volumes**
- **Create EBS snapshots**
- **Create copies of EBS volumes**

**Explanations:**
- **Attach new volumes to EC2 instances:** Incorrect. Attaching new volumes does not ensure backup or availability; it simply adds storage to an instance.
- **Delete the data and create new EBS volumes:** Incorrect. Deleting data and creating new volumes does not provide backup or availability; it results in data loss.
- **Create EBS snapshots:** Correct. EBS snapshots are point-in-time backups of EBS volumes that can be used to restore data or create new volumes.
- **Create copies of EBS volumes:** Incorrect. While copying volumes can duplicate data, snapshots are the recommended method for backups and availability.

---

## 25. Which AWS Cloud Adoption Framework perspective focuses on aligning cloud adoption with business goals?
- **Security perspective**
- **Business perspective**
- **Governance perspective**
- **People perspective**

**Explanations:**
- **Security perspective:** Incorrect. The Security perspective focuses on ensuring compliance, data protection, and securing workloads, not aligning cloud adoption with business goals.
- **Business perspective:** Correct. The Business perspective focuses on aligning cloud adoption with business goals, ensuring that cloud strategies support organizational objectives.
- **Governance perspective:** Incorrect. The Governance perspective focuses on managing cloud resources and ensuring compliance, not directly aligning with business goals.
- **People perspective:** Incorrect. The People perspective focuses on workforce development and organizational change management, not directly aligning with business goals.

---

## 26. Which AWS service allows a customer to mirror their corporate network within AWS with the same types of topographies?
- **AWS VPC**
- **AWS VPN**
- **Route 53**
- **CloudFront**

**Explanations:**
- **AWS VPC:** Correct. Amazon Virtual Private Cloud (VPC) allows customers to create a logically isolated network within AWS, enabling them to replicate their corporate network's topologies, including subnets, routing, and security.
- **AWS VPN:** Incorrect. AWS VPN provides secure connectivity between on-premises networks and AWS, but it does not create a mirrored network topology within AWS.
- **Route 53:** Incorrect. Route 53 is a DNS service for routing traffic, not for creating network topologies.
- **CloudFront:** Incorrect. CloudFront is a content delivery network (CDN) for distributing content globally, not for creating network topologies.

---

## 27. Which Amazon Web Services tool can identify the user that terminated an Amazon EC2 instance?
- **Amazon Inspector**
- **AWS Trusted Advisor**
- **AWS CloudTrail**
- **AWS Config**

**Explanations:**
- **Amazon Inspector:** Incorrect. Amazon Inspector is a security assessment service that identifies vulnerabilities in your AWS resources, but it does not track user actions like terminating an EC2 instance.
- **AWS Trusted Advisor:** Incorrect. Trusted Advisor provides best practice recommendations for cost optimization, performance, and security, but it does not track user actions.
- **AWS CloudTrail:** Correct. AWS CloudTrail records API calls and user activity, including actions like terminating an EC2 instance, and provides details about the user who performed the action.
- **AWS Config:** Incorrect. AWS Config tracks resource configurations and changes over time, but it does not provide detailed user activity logs.

---

## 28. If you wanted to use Chef to maintain your Windows and IIS web servers within your AWS account, which AWS service would you use?
- **AWS AppConfig**
- **OpsWorks**
- **CodeDeploy**
- **Automation**

**Explanations:**
- **AWS AppConfig:** Incorrect. AWS AppConfig is used for managing and deploying application configurations, not for managing servers with Chef.
- **OpsWorks:** Correct. AWS OpsWorks is a configuration management service that supports Chef and Puppet to automate the configuration, deployment, and management of applications on servers, including Windows and IIS web servers.
- **CodeDeploy:** Incorrect. AWS CodeDeploy is used for automating application deployments, not for server configuration management with Chef.
- **Automation:** Incorrect. Automation is a feature of AWS Systems Manager for automating operational tasks, not for managing servers with Chef.

---

## 29. Which authentication method should be used to programmatically access AWS resources from the AWS CLI?
- **User ID and Password**
- **Fingerprint**
- **IAM Role**
- **Client Certificate**

**Explanations:**
- **User ID and Password:** Incorrect. The AWS CLI does not support authentication using a user ID and password. Instead, it uses access keys or IAM roles for programmatic access.
- **Fingerprint:** Incorrect. Fingerprints are not a supported authentication method for the AWS CLI.
- **IAM Role:** Correct. IAM roles provide temporary security credentials for programmatic access to AWS resources, especially when used with EC2 instances or other AWS services.
- **Client Certificate:** Incorrect. Client certificates are not used for AWS CLI authentication; they are used for mutual TLS authentication in specific scenarios.

---

## 30. Which feature of the AWS Systems Manager provides an automatically created display of operational data from throughout your account?
- **Inventory**
- **Insights Dashboard**
- **Explorer**
- **AWS AppConfig**

**Explanations:**
- **Inventory:** Incorrect. Inventory collects and queries configuration and inventory information about your AWS resources, but it does not provide a centralized operational data display.
- **Insights Dashboard:** Incorrect. There is no AWS Systems Manager feature called "Insights Dashboard."
- **Explorer:** Correct. Explorer is a Systems Manager feature that provides a customizable operations dashboard to display operational data from across your AWS account.
- **AWS AppConfig:** Incorrect. AppConfig is used for managing and deploying application configurations, not for displaying operational data.

---

## 31. Where can a user find the policies and rules about prohibited actions when using AWS infrastructure and services?
- **AWS Identity and Access Management (IAM)**
- **AWS Acceptable Use Policy**
- **AWS Trusted Advisor**
- **AWS Billing Console**

**Explanations:**
- **AWS Identity and Access Management (IAM):** Incorrect. IAM is used for managing access to AWS resources, not for outlining prohibited actions.
- **AWS Acceptable Use Policy:** Correct. The AWS Acceptable Use Policy outlines prohibited actions and rules for using AWS infrastructure and services.
- **AWS Trusted Advisor:** Incorrect. Trusted Advisor provides best practice recommendations for cost optimization, performance, and security, but does not outline prohibited actions.
- **AWS Billing Console:** Incorrect. The Billing Console is used for managing payments and viewing costs, not for outlining prohibited actions.

---

## 32. Which Amazon EC2 pricing option provides the largest discounts when you reserve capacity for a 1 or 3 year term?
- **Reserved Instances**
- **Dedicated Instances**
- **On-Demand Instances**
- **Spot Instances**

**Explanations:**
- **Reserved Instances:** Correct. Reserved Instances provide the largest discounts (up to 75%) compared to On-Demand pricing when you commit to a 1- or 3-year term.
- **Dedicated Instances:** Incorrect. Dedicated Instances are physical EC2 servers dedicated to a single customer, but they do not offer the same level of discounts as Reserved Instances.
- **On-Demand Instances:** Incorrect. On-Demand Instances are billed per hour or second with no long-term commitment, and they do not offer discounts for reserved capacity.
- **Spot Instances:** Incorrect. Spot Instances offer steep discounts for unused capacity, but they are not reserved for a fixed term and can be interrupted by AWS.

---

## 33. Which Amazon EC2 purchasing option allows you to use your existing per-socket, per-core, or per-VM software licenses like Microsoft Windows Server?
- **Reserved Instance**
- **Dedicated Host**
- **On-Demand Instance**
- **Dedicated Instance**

**Explanations:**
- **Reserved Instance:** Incorrect. Reserved Instances provide cost savings for long-term commitments but do not allow you to bring your own per-socket, per-core, or per-VM software licenses.
- **Dedicated Host:** Correct. Dedicated Hosts provide physical servers dedicated to your use, allowing you to use your existing per-socket, per-core, or per-VM software licenses, such as Microsoft Windows Server or SQL Server.
- **On-Demand Instance:** Incorrect. On-Demand Instances are billed per hour or second with no long-term commitment, but they do not allow you to bring your own server-bound licenses.
- **Dedicated Instance:** Incorrect. Dedicated Instances run on hardware dedicated to a single customer, but they do not provide the same level of control over the physical server as Dedicated Hosts, which is required for using per-socket, per-core, or per-VM licenses.

---

## 34. What resources should be deployed in the private subnet of an Amazon VPC for security?
- **Internet Gateways**
- **Database Servers**
- **NAT Gateways**
- **Bastion Hosts**

**Explanations:**
- **Internet Gateways:** Incorrect. Internet Gateways are deployed in the public subnet to allow communication between resources in the VPC and the internet.
- **Database Servers:** Correct. Database servers should be deployed in the private subnet to restrict direct access from the internet and enhance security.
- **NAT Gateways:** Incorrect. NAT Gateways are deployed in the public subnet to allow instances in private subnets to access the internet for updates or other outbound traffic.
- **Bastion Hosts:** Incorrect. Bastion Hosts are deployed in the public subnet to provide secure access to instances in private subnets.

---

## 35. Which report, offered in CSV format, can be downloaded to audit your list of users, their access permissions, and other information about logins?
- **Credential report**
- **User audit**
- **IAM report**
- **User report**

**Explanations:**
- **Credential report:** Correct. The IAM Credential Report is a downloadable CSV file that provides details about your AWS account's users, their credentials, and their access permissions.
- **User audit:** Incorrect. There is no AWS feature or report called "User audit."
- **IAM report:** Incorrect. While IAM provides tools for managing users and permissions, there is no specific "IAM report" feature.
- **User report:** Incorrect. There is no AWS feature or report called "User report."

---

## 36. Your application has the potential for very high levels of traffic, and you want to get optimal performance from Elastic Load Balancing. Which type of ELB would be best suited for this application?
- **Classic**
- **Application**
- **Dynamic**
- **Network**

**Explanations:**
- **Classic:** Incorrect. Classic Load Balancers are older-generation ELBs and are not optimized for high-performance or high-traffic applications.
- **Application:** Incorrect. Application Load Balancers are optimized for HTTP/HTTPS traffic and advanced routing, but they are not specifically designed for very high levels of traffic.
- **Dynamic:** Incorrect. There is no ELB type called "Dynamic."
- **Network:** Correct. Network Load Balancers are designed for very high levels of traffic and are optimized for ultra-low latency and handling millions of requests per second.

---

## 37. Which of the following statements best explains AWS Service Quotas?
- **Service Quotas is specific to a region and will place default limits on the number of specific types of resources you can allocate.**
- **Service Quotas sets limitations on the amount of AWS services that may be allocated across AWS for a specific account.**
- **Service Quotas only apply to compute and storage instances across AWS.**
- **Service Quotas places limits on AWS Services within an account but can always be increased for a fee specific to that service.**

**Explanations:**
- **Service Quotas is specific to a region and will place default limits on the number of specific types of resources you can allocate:** Correct. Service Quotas are region-specific and set default limits on the number of resources (e.g., EC2 instances, S3 buckets) that can be allocated in a specific region.
- **Service Quotas sets limitations on the amount of AWS services that may be allocated across AWS for a specific account:** Incorrect. Service Quotas are region-specific, not account-wide across all regions.
- **Service Quotas only apply to compute and storage instances across AWS:** Incorrect. Service Quotas apply to a wide range of AWS services, not just compute and storage.
- **Service Quotas places limits on AWS Services within an account but can always be increased for a fee specific to that service:** Incorrect. While some quotas can be increased, there is no fee for increasing quotas; you must submit a request to AWS Support.

---

## 38. Amazon CloudFront allows for ultra-low-latency data transmissions. Which AWS technology does CloudFront leverage to achieve this?
- **Edge locations**
- **Availability Zones**
- **Regions**
- **ELB**

**Explanations:**
- **Edge locations:** Correct. CloudFront leverages a global network of edge locations to cache content closer to users, reducing latency and improving performance.
- **Availability Zones:** Incorrect. Availability Zones are isolated locations within a region used for deploying AWS resources, but they are not used for caching or reducing latency.
- **Regions:** Incorrect. Regions are geographic areas where AWS data centers are located, but they are not specifically used for caching or reducing latency.
- **ELB:** Incorrect. Elastic Load Balancing (ELB) distributes traffic across multiple targets, but it is not used for caching or reducing latency.

---

## 39. What Amazon Web Services feature enables fast, secure transfers of files over long distances between your computer and your Amazon S3 storage bucket?
- **HTTP Transfer**
- **Amazon S3 Transfer Acceleration**
- **S3 Acceleration**
- **File Transfer**

**Explanations:**
- **HTTP Transfer:** Incorrect. HTTP is a protocol for transferring data, but it does not optimize file transfers over long distances.
- **Amazon S3 Transfer Acceleration:** Correct. S3 Transfer Acceleration uses AWS's global network of edge locations to speed up file transfers to S3 buckets over long distances.
- **S3 Acceleration:** Incorrect. "S3 Acceleration" is not the correct name for this feature; the proper term is "Amazon S3 Transfer Acceleration."
- **File Transfer:** Incorrect. File Transfer is a general term and not an AWS-specific feature for optimizing transfers to S3.

---

## 40. What is a key financial benefit of migrating systems hosted in your on-premises data center to AWS?
- **Opportunity to replace upfront capital expenses (CAPEX) with low variable costs**
- **Opportunity to replace variable capital expenses (CAPEX) with low upfront costs**
- **Opportunity to replace upfront operational expenses (OPEX) with low variable operational expenses (OPEX)**
- **Opportunity to replace variable operational expenses (OPEX) with low upfront capital expenses (CAPEX)**

**Explanations:**
- **Opportunity to replace upfront capital expenses (CAPEX) with low variable costs:** Correct. Migrating to AWS allows you to avoid large upfront investments in hardware and infrastructure (CAPEX) and instead pay for resources on a pay-as-you-go basis (OPEX).
- **Opportunity to replace variable capital expenses (CAPEX) with low upfront costs:** Incorrect. CAPEX is typically an upfront cost, not variable, and AWS does not require upfront payments for most services.
- **Opportunity to replace upfront operational expenses (OPEX) with low variable operational expenses (OPEX):** Incorrect. Operational expenses (OPEX) are ongoing costs, and AWS does not replace them with upfront costs.
- **Opportunity to replace variable operational expenses (OPEX) with low upfront capital expenses (CAPEX):** Incorrect. AWS does not require upfront capital expenses; it operates on a pay-as-you-go model.

---

## 41. What is the maximum amount of data that can be stored in Amazon S3?
- **100 PB**
- **1 PB**
- **Virtually Unlimited**
- **1 EB**

**Explanations:**
- **100 PB:** Incorrect. While Amazon S3 can store petabytes of data, it is not limited to 100 PB.
- **1 PB:** Incorrect. Amazon S3 can store much more than 1 PB of data.
- **Virtually Unlimited:** Correct. Amazon S3 is designed to provide virtually unlimited storage capacity, allowing customers to store as much data as they need.
- **1 EB:** Incorrect. While Amazon S3 can store exabytes of data, it is not limited to 1 EB.

---

## 42. Which AWS service allows internet traffic to access resources in a VPC?
- **Network Access Control List (NaCl)**
- **Internet Gateway**
- **NAT Gateway**

**Explanations:**
- **Network Access Control List (NaCl):** Incorrect. NACLs are used to control inbound and outbound traffic at the subnet level, but they do not enable internet access to resources in a VPC.
- **Internet Gateway:** Correct. An Internet Gateway is a VPC component that allows resources in the VPC to communicate with the internet. It is required for internet-facing resources.
- **NAT Gateway:** Incorrect. NAT Gateway allows instances in private subnets to initiate outbound internet traffic, but it does not allow inbound internet traffic to resources in a VPC.

---

## 43. Which Amazon Web Services feature allows customers to create a copy of their Lightsail instance in EC2?
- **LightSail Copy**
- **LightSail Backup**
- **LightSail-EC2 snapshot**
- **Upgrade to EC2**

**Explanations:**
- **LightSail Copy:** Incorrect. There is no feature called "LightSail Copy" in AWS.
- **LightSail Backup:** Incorrect. LightSail Backup is used to create backups of Lightsail instances, but it does not create a copy in EC2.
- **LightSail-EC2 snapshot:** Incorrect. While snapshots are used for backups, there is no feature called "LightSail-EC2 snapshot."
- **Upgrade to EC2:** Correct. The "Upgrade to EC2" feature allows customers to create a copy of their Lightsail instance in Amazon EC2 for more advanced configurations and scaling.

---

## 44. Which type of AWS Reserved Instance offers the smaller cost savings?
- **Limited**
- **Standard**
- **Flexible**
- **Convertible**

**Explanations:**
- **Limited:** Incorrect. There is no Reserved Instance type called "Limited."
- **Standard:** Incorrect. Standard Reserved Instances offer the highest cost savings (up to 75%) compared to On-Demand pricing.
- **Flexible:** Incorrect. There is no Reserved Instance type called "Flexible."
- **Convertible:** Correct. Convertible Reserved Instances offer smaller cost savings compared to Standard Reserved Instances but allow you to change instance attributes (e.g., instance family, operating system) during the term.

---

## 45. Which characteristic of the AWS Cloud enables companies to innovate faster?
- **High Availability**
- **Cost Savings**
- **Agility**
- **Security**

**Explanations:**
- **High Availability:** Incorrect. High Availability ensures that systems are operational and accessible, but it does not directly enable faster innovation.
- **Cost Savings:** Incorrect. Cost savings reduce expenses but do not directly contribute to faster innovation.
- **Agility:** Correct. Agility enables companies to innovate faster by allowing them to quickly develop, test, and deploy new applications and services without the need for extensive infrastructure setup.
- **Security:** Incorrect. Security ensures data and systems are protected, but it does not directly enable faster innovation.

---

## 46. What are two services offered by Amazon Route 53?
- **Domain Name System (DNS)**
- **Caching**
- **Data Storage**
- **Traffic Flow**

**Explanations:**
- **Domain Name System (DNS):** Correct. Amazon Route 53 is primarily a scalable and highly available Domain Name System (DNS) web service that translates domain names into IP addresses.
- **Caching:** Incorrect. Caching is not a feature of Route 53; it is a feature of services like Amazon CloudFront.
- **Data Storage:** Incorrect. Route 53 does not provide data storage; it is a DNS and traffic management service.
- **Traffic Flow:** Correct. Route 53 Traffic Flow allows you to manage traffic globally through routing policies, such as geolocation and latency-based routing.

---

## 47. Which Amazon Web Services service is regional?
- **AWS Identity and Access Management (IAM)**
- **Amazon Elastic File System (EFS)**
- **Amazon CloudFront**
- **Amazon Route 53**

**Explanations:**
- **AWS Identity and Access Management (IAM):** Incorrect. IAM is a global service, meaning it is not tied to any specific region.
- **Amazon Elastic File System (EFS):** Correct. Amazon EFS is a regional service, meaning the file system is stored and accessed within a specific AWS region.
- **Amazon CloudFront:** Incorrect. CloudFront is a global service that uses a network of edge locations to deliver content with low latency.
- **Amazon Route 53:** Incorrect. Route 53 is a global service that provides DNS and traffic management across multiple regions.

---

## 48. When doing a cost estimation for EC2 services, which other AWS service is a required component?
- **Lambda**
- **EBS**
- **RDS**
- **S3**

**Explanations:**
- **Lambda:** Incorrect. AWS Lambda is a serverless compute service and is not a required component for EC2 cost estimation.
- **EBS:** Correct. Amazon Elastic Block Store (EBS) is a required component for EC2 cost estimation because EC2 instances typically use EBS volumes for persistent storage, and the cost of EBS storage must be included in the estimation.
- **RDS:** Incorrect. Amazon RDS is a managed relational database service and is not a required component for EC2 cost estimation.
- **S3:** Incorrect. Amazon S3 is an object storage service and is not a required component for EC2 cost estimation.

---

## 49. Which Amazon Web Services tool allows you to check Amazon EC2 instances for security vulnerabilities by analyzing them against predefined security templates?
- **AWS Inspector**
- **AWS Trusted Advisor**
- **AWS Config**
- **Amazon GuardDuty**

**Explanations:**
- **AWS Inspector:** Correct. Amazon Inspector is a security assessment service that analyzes EC2 instances for vulnerabilities and deviations from best practices using predefined security templates.
- **AWS Trusted Advisor:** Incorrect. Trusted Advisor provides best practice recommendations for cost optimization, performance, and security, but it does not analyze EC2 instances for vulnerabilities.
- **AWS Config:** Incorrect. AWS Config tracks resource configurations and changes over time but does not perform security vulnerability assessments.
- **Amazon GuardDuty:** Incorrect. GuardDuty is a threat detection service that monitors AWS accounts and workloads for malicious activity, but it does not analyze EC2 instances against security templates.


---

## 50. What AWS services and resources are contained within an Amazon Virtual Private Cloud (VPC)?
- **Resources across multiple Availability Zones in a single region**
- **Resources across multiple regions**
- **Only resources in a single Availability Zone**
- **Resources across multiple AWS regions and your on-premises networks**

**Explanations:**
- **Resources across multiple Availability Zones in a single region:** Correct. A VPC spans multiple Availability Zones within a single AWS region, allowing you to deploy resources across multiple zones for high availability and fault tolerance.
- **Resources across multiple regions:** Incorrect. A VPC is confined to a single AWS region and cannot span multiple regions.
- **Only resources in a single Availability Zone:** Incorrect. A VPC spans multiple Availability Zones within a region, not just a single zone.
- **Resources across multiple AWS regions and your on-premises networks:** Incorrect. A VPC is limited to a single AWS region, though it can connect to on-premises networks via VPN or Direct Connect.

---

## 51. Which AWS service can be used to track user activity in AWS?
- **AWS CloudTrail**
- **Amazon Elastic Cache**
- **AWS CloudWatch**
- **Amazon Beanstalk**

**Explanations:**
- **AWS CloudTrail:** Correct. AWS CloudTrail is a service that tracks user activity and API calls across your AWS account, providing a history of actions taken by users, roles, and AWS services.
- **Amazon Elastic Cache:** Incorrect. Amazon ElastiCache is a caching service and does not provide user activity tracking.
- **AWS CloudWatch:** Incorrect. AWS CloudWatch is a monitoring service for AWS resources and applications, but it does not provide detailed user activity logs.
- **Amazon Beanstalk:** Incorrect. AWS Elastic Beanstalk is a platform-as-a-service (PaaS) for deploying and managing applications, but it does not track user activity.

---

## 52. Which Amazon Web Services offering enables users to find, buy, and immediately start using software solutions in their AWS environment?
- **AWS OpsWorks**
- **AWS Marketplace**
- **AWS Config**
- **AWS SDK**

**Explanations:**
- **AWS OpsWorks:** Incorrect. AWS OpsWorks is a configuration management service that uses Chef and Puppet to automate the deployment and management of applications, but it does not provide a marketplace for software solutions.
- **AWS Marketplace:** Correct. AWS Marketplace is an online store that allows users to find, buy, and immediately deploy software solutions in their AWS environment.
- **AWS Config:** Incorrect. AWS Config is a service for tracking resource configurations and compliance, not for purchasing software solutions.
- **AWS SDK:** Incorrect. AWS SDK is a set of software development tools for building applications that interact with AWS services, but it does not provide a marketplace for software solutions.

---

## 53. Which Amazon Web Services (AWS) compute service allows you to run custom software on a Red Hat operating system?
- **AWS S3**
- **AWS DynamoDB**
- **AWS EC2**
- **AWS Lambda**

**Explanations:**
- **AWS S3:** Incorrect. Amazon S3 is an object storage service and does not provide compute capabilities to run custom software or operating systems.
- **AWS DynamoDB:** Incorrect. DynamoDB is a NoSQL database service and does not provide compute capabilities or support for running operating systems.
- **AWS EC2:** Correct. Amazon EC2 allows you to run custom software on virtual servers, including instances running the Red Hat operating system.
- **AWS Lambda:** Incorrect. AWS Lambda is a serverless compute service that runs code in response to events, but it does not allow you to run a full operating system like Red Hat.

---

## 54. Which Amazon Web Services networking service enables a company to create a private virtual network within AWS?
- **Amazon Virtual Private Cloud (Amazon VPC)**
- **AWS Direct Connect**
- **AWS Config**
- **Amazon Route 53**

**Explanations:**
- **Amazon Virtual Private Cloud (Amazon VPC):** Correct. Amazon VPC allows companies to create a private, isolated virtual network within AWS, where they can launch and manage AWS resources securely.
- **AWS Direct Connect:** Incorrect. AWS Direct Connect provides a dedicated network connection between on-premises data centers and AWS, but it does not create a private virtual network.
- **AWS Config:** Incorrect. AWS Config is used for tracking resource configurations and compliance, not for creating private virtual networks.
- **Amazon Route 53:** Incorrect. Route 53 is a DNS service for routing traffic, not for creating private virtual networks.

---

## 55. Which Amazon Web Services resource requires customers to be responsible for security configurations related to the infrastructure?
- **Amazon DynamoDB**
- **Amazon EC2**
- **AWS Fargate**
- **Amazon RDS**

**Explanations:**
- **Amazon DynamoDB:** Incorrect. DynamoDB is a fully managed NoSQL database service, and AWS handles the underlying infrastructure security. Customers are responsible for securing their data and access permissions.
- **Amazon EC2:** Correct. With Amazon EC2, customers are responsible for managing the security configurations of the operating system, applications, and network settings on their instances.
- **AWS Fargate:** Incorrect. Fargate is a serverless compute engine for containers, and AWS manages the underlying infrastructure security. Customers are responsible for securing their containerized applications.
- **Amazon RDS:** Incorrect. RDS is a managed relational database service, and AWS handles the infrastructure security. Customers are responsible for securing their data and access permissions.

---

## 56. What are two benefits of using the Amazon Web Services (AWS) Cloud?
- **Instant migration of any service to the cloud**
- **100% SLA**
- **Go global in minutes**
- **Fast setup of IT resources**

**Explanations:**
- **Instant migration of any service to the cloud:** Incorrect. While AWS provides tools to assist with migration, not all services can be instantly migrated to the cloud without planning and configuration.
- **100% SLA:** Incorrect. AWS provides high availability but does not guarantee a 100% Service Level Agreement (SLA).
- **Go global in minutes:** Correct. AWS allows customers to deploy applications and resources in multiple regions worldwide quickly, enabling global reach.
- **Fast setup of IT resources:** Correct. AWS provides on-demand access to IT resources, allowing customers to quickly set up and scale infrastructure as needed.

---

## 57. What benefit does Elasticity provide according to Amazon Web Services (AWS)?
- **It allows systems to scale up or down based on changes in demand.**
- **It minimizes storage needs by reducing logging and auditing activities.**
- **It allows delivery of the same resources to a large pool of customers in a scalable way.**
- **It provisions new servers to meet static demand growth.**

**Explanations:**
- **It allows systems to scale up or down based on changes in demand:** Correct. Elasticity enables AWS resources to automatically adjust to changes in demand, ensuring optimal performance and cost efficiency.
- **It minimizes storage needs by reducing logging and auditing activities:** Incorrect. Elasticity does not minimize storage needs or affect logging and auditing activities.
- **It allows delivery of the same resources to a large pool of customers in a scalable way:** Incorrect. This describes multitenancy, not elasticity.
- **It provisions new servers to meet static demand growth:** Incorrect. Elasticity is about dynamic scaling based on demand, not provisioning for static growth.

---

## 58. What are two benefits of using AWS Elastic Load Balancing?
- **Pay-per-use pricing**
- **Automated scaling**
- **High availability**
- **Reduced management overhead**

**Explanations:**
- **Pay-per-use pricing:** Incorrect. While AWS services generally follow a pay-as-you-go pricing model, this is not a specific benefit of Elastic Load Balancing.
- **Automated scaling:** Correct. Elastic Load Balancing works with Auto Scaling to automatically distribute traffic across healthy instances as demand changes.
- **High availability:** Correct. Elastic Load Balancing ensures high availability by distributing traffic across multiple targets, such as EC2 instances, in different Availability Zones.
- **Reduced management overhead:** Incorrect. While Elastic Load Balancing simplifies traffic distribution, reduced management overhead is not a primary benefit.

---

## 59. What benefits does a database administrator get by using Amazon Relational Database Service (RDS)?
- **RDS databases automatically scale based on load**
- **RDS provides extremely high reliability and durability.**
- **RDS enables users to dynamically adjust CPU and RAM resources.**
- **RDS simplifies tasks related to managing relational databases.**

**Explanations:**
- **RDS databases automatically scale based on load:** Incorrect. While RDS supports features like Auto Scaling for storage, it does not automatically scale compute resources based on load.
- **RDS provides extremely high reliability and durability:** Incorrect. While RDS provides high availability and durability through features like Multi-AZ deployments, this is not the primary benefit for database administrators.
- **RDS enables users to dynamically adjust CPU and RAM resources:** Incorrect. RDS does not allow dynamic adjustment of CPU and RAM resources; instance types must be changed manually.
- **RDS simplifies tasks related to managing relational databases:** Correct. RDS automates many administrative tasks, such as backups, software patching, and monitoring, reducing the operational burden for database administrators.

---

## 60. Which concept focuses on building applications from small, loosely coupled components?
- **Scalability**
- **Microservices**
- **Elasticity**
- **Availability**

**Explanations:**
- **Scalability:** Incorrect. Scalability refers to the ability of a system to handle increased workload by adding resources, but it does not specifically focus on building applications from small, loosely coupled components.
- **Microservices:** Correct. Microservices is an architectural style that focuses on building applications as a collection of small, independent, and loosely coupled services that can be developed, deployed, and scaled independently.
- **Elasticity:** Incorrect. Elasticity refers to the ability to scale resources up or down dynamically based on demand, not the design of application components.
- **Availability:** Incorrect. Availability refers to the ability of a system to remain operational and accessible, not the design of application components.

---

## 61. What are two common tasks that AWS can manage for their customers when running applications in the AWS Cloud?
- **Patching database software**
- **Customize your code**
- **Taking backups of databases**
- **Design schema of your data**

**Explanations:**
- **Patching database software:** Correct. AWS manages tasks like patching database software for managed services such as Amazon RDS, reducing the operational burden on customers.
- **Customize your code:** Incorrect. AWS does not manage or customize application code; this is the responsibility of the customer.
- **Taking backups of databases:** Correct. AWS automates database backups for managed services like RDS, ensuring data durability and recovery options.
- **Design schema of your data:** Incorrect. AWS does not design database schemas; this is the responsibility of the customer.

---

## 62. Which two Amazon Web Services support plans provide 24/7 access to enhanced technical support?
- **Business**
- **All plans**
- **Enterprise**
- **Developer**

**Explanations:**
- **Business:** Correct. The Business support plan provides 24/7 access to Cloud Support Engineers for technical support.
- **All plans:** Incorrect. Not all AWS support plans provide 24/7 access to technical support. For example, the Basic and Developer plans do not include 24/7 technical support.
- **Enterprise:** Correct. The Enterprise support plan provides 24/7 access to senior Cloud Support Engineers and a Technical Account Manager (TAM) for mission-critical workloads.
- **Developer:** Incorrect. The Developer support plan provides business hours access to Cloud Support Associates, not 24/7 technical support.

---

## 63. Which AWS service can be used to capture information about inbound and outbound IP traffic on network interfaces in a VPC?
- **VPC Flow Logs**
- **VPC Peering**
- **Transit Gateway**
- **Site-to-Site VPN**

**Explanations:**
- **VPC Flow Logs:** Correct. VPC Flow Logs capture information about the IP traffic going to and from network interfaces in a VPC, which can be used for monitoring and troubleshooting.
- **VPC Peering:** Incorrect. VPC Peering is used to connect two VPCs privately, but it does not capture traffic information.
- **Transit Gateway:** Incorrect. Transit Gateway connects multiple VPCs and on-premises networks, but it does not capture traffic information.
- **Site-to-Site VPN:** Incorrect. Site-to-Site VPN provides secure connectivity between on-premises networks and AWS, but it does not capture traffic information.

---

## 64. Which AWS tool will allow you to execute commands on servers within AWS without having to use SSH or PowerShell?
- **Distributor**
- **Run Command**
- **CodeDeploy**
- **AWS AppConfig**

**Explanations:**
- **Distributor:** Incorrect. Distributor is used for storing and distributing software packages to AWS instances, not for executing commands directly.
- **Run Command:** Correct. AWS Systems Manager Run Command allows you to execute commands on servers within AWS without needing SSH or PowerShell, simplifying remote management.
- **CodeDeploy:** Incorrect. CodeDeploy is used for automating application deployments, not for executing commands on servers.
- **AWS AppConfig:** Incorrect. AppConfig is used for managing and deploying application configurations, not for executing commands on servers.

---

## 65. You update the CIDR block on one of your subnets from /16 to /24. What is the resulting impact on the subnet?
- **The number of IP addresses available within it decreases.**
- **The number of IP addresses available within it increases.**
- **The subnet is opened to the public Internet.**
- **The use of IPv6 addresses is permitted.**

**Explanations:**
- **The number of IP addresses available within it decreases:** Correct. Changing the CIDR block from /16 to /24 reduces the number of available IP addresses in the subnet. A /16 subnet provides 65,536 IP addresses, while a /24 subnet provides only 256 IP addresses.
- **The number of IP addresses available within it increases:** Incorrect. Reducing the size of the CIDR block (e.g., from /16 to /24) decreases the number of available IP addresses.
- **The subnet is opened to the public Internet:** Incorrect. Changing the CIDR block does not automatically expose the subnet to the public internet. Internet access depends on the presence of an Internet Gateway and associated routing rules.
- **The use of IPv6 addresses is permitted:** Incorrect. Changing the CIDR block does not enable IPv6. IPv6 must be explicitly enabled for the VPC and subnet.

---
