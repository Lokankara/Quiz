# AWS Certification / Cloud Concepts v3

---

## 1. With EC2, which layer belongs to AWS under the Shared Responsibility model?

- Data
- Application code
- Hardware
- Operating system

**Explanation:**
"Data" is incorrect. The customer is responsible for the data they store and manage in EC2 instances; AWS does not control the content or integrity of customer data.
"Application code" is incorrect. The customer is responsible for the application code they deploy and run on EC2; AWS only provides the underlying infrastructure.
"Hardware" is correct. AWS manages the physical servers, networking, and storage hardware as part of the Shared Responsibility model.
"Operating system" is incorrect. The customer is responsible for managing the OS installed on EC2 instances unless using managed services like AWS RDS.

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

## 3. If you wanted to maintain flexibility in data processing, where the majority of your processes could be performed in a cloud environment, with other data‑intensive processes such as video editing being maintained in your own data center, which cloud model would you utilize?

- Hybrid
- Public
- Community
- Private

**Explanation:**
"Hybrid" is correct. A hybrid cloud allows workloads to be distributed between on‑premises and cloud environments, offering flexibility for data‑intensive or specialized tasks.
"Public" is incorrect. Public cloud exclusively runs on shared cloud infrastructure; all workloads would reside in the cloud.
"Community" is incorrect. Community cloud is shared among organizations with similar requirements but does not provide on‑premises integration flexibility.
"Private" is incorrect. Private cloud isolates all resources for a single organization and would not provide the hybrid flexibility required.

---

## 4. With implementing a data loss prevention (DLP) strategy, where would you place the solution to protect data in use?

- Web server
- Storage system
- User’s device
- Network firewalls

**Explanation:**
"Web server" is incorrect. Web servers mainly handle data in transit and storage; they are not the primary place to prevent data loss during active use.
"Storage system" is incorrect. Storage systems protect data at rest but do not prevent leaks while data is actively used.
"User’s device" is correct. DLP solutions protecting data in use monitor endpoints (user devices) to prevent unauthorized sharing, copying, or printing of sensitive data.
"Network firewalls" is incorrect. Firewalls protect data in transit and network access, but they do not control data while it is actively being used on the device.

---

## 5. AWS offers a fully managed virtual desktop infrastructure (VDI) solution with both Windows and Linux options. Which AWS service is this?

- WorkSpaces
- WorkLink
- AWS Desktop
- AppStream

**Explanation:**
"WorkSpaces" is correct. WorkSpaces provides managed virtual desktops, supporting Windows and Linux, accessible from multiple devices.
"WorkLink" is incorrect. WorkLink provides secure access to internal websites and applications from mobile devices, not full virtual desktops.
"AWS Desktop" is incorrect. There is no AWS service officially named “AWS Desktop.”
"AppStream" is incorrect. AppStream is a managed application streaming service, delivering apps but not a full virtual desktop environment.

---

## 6. Access control list (ACLs) are security layers on the VPC that control traffic at the subnet level. Which of the following statements about ACLs is incorrect?

- Every subnet must have an ACL assigned to it.
- ACLs can have different inbound and outbound rules.
- ACLs have numbered rules that are processed in order.
- ACLs are composed only of ALLOW rules.

**Explanation:**
"Every subnet must have an ACL assigned to it." is correct. Every subnet automatically has a default ACL if none is explicitly assigned.
"ACLs can have different inbound and outbound rules." is correct. Network ACLs can independently control inbound and outbound traffic.
"ACLs have numbered rules that are processed in order." is correct. ACL rules are evaluated starting from the lowest number.
"ACLs are composed only of ALLOW rules." is incorrect. ACLs can include both ALLOW and DENY rules; the statement that they only have ALLOW rules is false.

---

## 7. Which process involves determining the security controls that are necessary for a piece of data based on its sensitivity and value?

- Hashing
- Labeling
- Discovery
- Classification

**Explanation:**
"Hashing" is incorrect. Hashing is a method to verify data integrity, not to determine security controls.
"Labeling" is incorrect. Labeling assigns metadata to data but does not determine security controls.
"Discovery" is incorrect. Discovery identifies where data resides but does not define its required protection.
"Classification" is correct. Classification involves assessing data based on sensitivity and value to apply appropriate security measures.

---

## 8. Which AWS region is limited to specific customers and is not available for selection in general?

- us-gov-west-1
- sa-east-1
- ca-central-1
- me-south-1

**Explanation:**
"us-gov-west-1" is correct. This is a GovCloud region available only to U.S. government agencies and eligible contractors.
"sa-east-1" is incorrect. This is a public region in South America accessible to all AWS customers.
"ca-central-1" is incorrect. This is a public region in Canada accessible to all AWS customers.
"me-south-1" is incorrect. This is a public Middle East region available for general AWS customers.

---

## 9. Which cloud service model is most closely associated with DevOps?

- DaaS
- PaaS
- SaaS
- IaaS

**Explanation:**
"DaaS" is incorrect. Desktop‑as‑a‑Service provides virtual desktops, not directly aligned with DevOps practices.
"PaaS" is correct. Platform‑as‑a‑Service provides environments for developers to deploy, manage, and scale applications, supporting DevOps workflows.
"SaaS" is incorrect. Software‑as‑a‑Service delivers applications to end users, not development environments.
"IaaS" is incorrect. Infrastructure‑as‑a‑Service provides virtualized hardware but requires more management; less directly tied to DevOps tooling.

---

## 10. Which of the following is not a technology used to protect data in transit?

- S3 Encryption
- IPsec
- VPN
- HTTPS

**Explanation:**
"S3 Encryption" is correct. S3 encryption protects data at rest, not in transit.
"IPsec" is incorrect. IPsec secures data in transit between networked systems.
"VPN" is incorrect. VPNs encrypt data in transit over public networks.
"HTTPS" is incorrect. HTTPS encrypts web traffic in transit.

---

## 11. Which of the following is not an example of data at rest and the potential security implications of it?

- DynamoDB tables
- S3 objects
- API calls
- Machine images

**Explanation:**
"DynamoDB tables" is incorrect. DynamoDB stores persistent data, representing data at rest.
"S3 objects" is incorrect. S3 objects are stored in AWS and are considered data at rest.
"API calls" is correct. API calls are data in motion, not at rest.
"Machine images" is incorrect. AMIs (Amazon Machine Images) are stored snapshots, considered data at rest.

---

## 12. Which AWS tool will allow you to initiate processes as a result of events that are detected within CloudWatch and take action based on the value of the event?

- Alarms
- Triggers
- Alerts
- Events

**Explanation:**
"Alarms" is correct. CloudWatch Alarms monitor metrics and can trigger actions automatically when thresholds are breached.
"Triggers" is incorrect. While triggers may sound like event initiators, AWS does not use this term for CloudWatch automation.
"Alerts" is incorrect. Alerts notify but do not initiate automated actions.
"Events" is incorrect. CloudWatch Events (now EventBridge) can detect events but require a target for execution; alarms directly initiate actions based on metric thresholds.

---

## 13. Which authentication method is supported by the AWS CLI to perform automation tasks on your AWS account?

- Security hardware token
- MFA
- Access/secret key
- Username/password

**Explanation:**
"Security hardware token" is incorrect. Tokens alone are not used for CLI authentication; they may be part of MFA.
"MFA" is incorrect. MFA adds security but requires keys; it is not standalone for CLI automation.
"Access/secret key" is correct. CLI automation uses programmatic credentials (access key ID and secret access key) to authenticate.
"Username/password" is incorrect. Passwords are used for console login, not CLI automation.

---

## 14. If your application utilizes or stores any type of sensitive information, you will need to comply with specific regulatory requirements. Which AWS service would provide information on AWS certifications with major governing bodies and regulations?

- AWS Systems Manager
- AWS Billing Console
- AWS Artifact
- AWS CloudTrail

**Explanation:**
"AWS Systems Manager" is incorrect. Systems Manager helps manage infrastructure but does not provide compliance certification information.
"AWS Billing Console" is incorrect. Provides billing data, not compliance documents.
"AWS Artifact" is correct. Artifact provides access to AWS compliance reports and certifications for regulatory bodies.
"AWS CloudTrail" is incorrect. CloudTrail provides auditing and logging of API calls, not regulatory certification information.

---

## 15. Select two managed instances that are offered as part of AWS OpsWorks.

- Git
- Puppet Enterprise
- FlashCopy
- Chef Automate
- Rsync

**Explanation:**
"Git" is incorrect. Git is a version control tool, not a managed instance in OpsWorks.
"Puppet Enterprise" is correct. OpsWorks supports Puppet Enterprise for configuration management.
"FlashCopy" is incorrect. FlashCopy is an IBM storage feature, not AWS OpsWorks.
"Chef Automate" is correct. OpsWorks integrates with Chef Automate for automation of infrastructure.
"Rsync" is incorrect. Rsync is a file transfer tool, not a managed instance in OpsWorks.

---

## 16. Which key concept of cloud computing allows the resources to an application to be expanded to meet increased demand of the user without having to provision for maximum capacity in advance?

- Metered service
- Elasticity
- Resource pooling
- Multitenancy

**Explanation:**
"Metered service" is incorrect. Metered service relates to billing based on usage, not resource scaling.
"Elasticity" is correct. Elasticity allows resources to automatically scale up or down to meet demand.
"Resource pooling" is incorrect. Resource pooling shares resources among multiple tenants but does not imply dynamic scaling.
"Multitenancy" is incorrect. Multitenancy allows multiple users to share resources, unrelated to dynamic scaling.

---

## 17. Which Amazon EC2 feature allows you to run multiple instances across distinct physical locations within an Availability Zone?

- Placement Groups – Cluster
- Placement Groups – Partition
- Placement Groups – Spread
- Auto Scaling Groups

**Explanation:**
"Placement Groups – Cluster" is incorrect. Cluster placement groups place instances close together in a single AZ to achieve low‑latency networking, not to separate them physically.
"Placement Groups – Partition" is incorrect. Partition placement groups separate instances into partitions across racks, but they are optimized for large distributed systems like HDFS and are not intended for small groups of isolated instances.
"Placement Groups – Spread" is correct. Spread placement groups ensure each instance is placed on distinct hardware within an AZ, minimizing correlated failure.
"Auto Scaling Groups" is incorrect. Auto Scaling manages instance count and scaling, not physical hardware separation.

---

## 18. What is the primary benefit of using EC2 Reserved Instances?

- Improved network bandwidth
- Lower compute costs in exchange for commitment
- Ability to run instances on dedicated physical hardware
- Guaranteed higher I/O performance

**Explanation:**
"Improved network bandwidth" is incorrect. Reserved Instances do not change performance characteristics.
"Lower compute costs in exchange for commitment" is correct. Reserved Instances reduce hourly pricing if you commit for 1 or 3 years.
"Ability to run instances on dedicated physical hardware" is incorrect. This is a feature of Dedicated Hosts.
"Guaranteed higher I/O performance" is incorrect. Performance depends on instance type, not reservation.

---

## 19. Which EC2 purchase option is best for workloads that cannot tolerate interruption?

- Spot Instances
- On-Demand Instances
- Savings Plans
- Dedicated Hosts

**Explanation:**
"Spot Instances" is incorrect. Spot Instances can be terminated at any moment when capacity or price changes.
"On-Demand Instances" is correct. They provide uninterrupted compute with no risk of involuntary termination.
"Savings Plans" is incorrect. Savings Plans reduce cost but do not influence instance interruption or guarantees.
"Dedicated Hosts" is incorrect. Dedicated Hosts provide hardware isolation but are not inherently tied to interruption guarantees.

---

## 20. Which instance type family is optimized for memory-intensive applications?

- M family
- R family
- C family
- I family

**Explanation:**
"M family" is incorrect. M is general-purpose with balanced CPU, memory, and networking.
"R family" is correct. R instances are explicitly memory‑optimized for high RAM workloads.
"C family" is incorrect. C instances are compute‑optimized.
"I family" is incorrect. I instances are storage‑optimized for high IOPS, not memory.

---

## 21. What does Elastic IP primarily solve?

- Scaling compute capacity
- Automating instance recovery
- Maintaining a static public IPv4 across instance replacements
- Encrypting traffic between instances

**Explanation:**
"Scaling compute capacity" is incorrect. IPs do not influence compute scaling.
"Automating instance recovery" is incorrect. Elastic IPs do not handle resilience.
"Maintaining a static public IPv4 across instance replacements" is correct. EIPs let you reassign IPs to new instances instantly.
"Encrypting traffic between instances" is incorrect. This is handled by security protocols, not EIPs.

---

## 22. Which EC2 storage type provides the highest IOPS and is ideal for transactional workloads?

- Instance Store
- EBS General Purpose SSD (gp3)
- EBS Provisioned IOPS SSD (io2)
- EFS Standard

**Explanation:**
"Instance Store" is incorrect. Fast, but ephemeral and not designed for sustained transactional IOPS.
"EBS General Purpose SSD (gp3)" is incorrect. Good baseline performance but not highest IOPS.
"EBS Provisioned IOPS SSD (io2)" is correct. io2 / io2 Block Express provide maximum durability and highest IOPS for databases.
"EFS Standard" is incorrect. Distributed filesystem, not block storage for transactional workloads.

---

## 23. What happens when an EC2 instance with Instance Store volume stops?

- Instance Store data persists
- Instance Store data is lost
- EBS volumes detach automatically
- The instance cannot be started again

**Explanation:**
"Instance Store data persists" is incorrect. Instance Store is ephemeral.
"Instance Store data is lost" is correct. Stopping or terminating the instance wipes the instance store data.
"EBS volumes detach automatically" is incorrect. Stopping does not detach EBS unless done manually.
"The instance cannot be started again" is incorrect. Instances can be restarted, but data is gone.

---

## 24. What is the purpose of EC2 user data?

- Applying IAM roles
- Running boot-time automation scripts
- Setting security groups
- Configuring networking rules

**Explanation:**
"Applying IAM roles" is incorrect. IAM roles are attached separately.
"Running boot-time automation scripts" is correct. User data provides initialization automation at instance launch.
"Setting security groups" is incorrect. Security groups are defined externally.
"Configuring networking rules" is incorrect. Networking is managed via VPC configuration, not user data.

---

## 25. What can be used to allow EC2 instances to access AWS services securely without storing credentials?

- API keys stored in user data
- IAM roles
- Root access keys
- OS-level accounts

**Explanation:**
"API keys stored in user data" is incorrect and insecure.
"IAM roles" is correct. Provide temporary credentials via IMDS with no static secrets.
"Root access keys" is incorrect. Should never be distributed or embedded.
"OS-level accounts" is incorrect. OS users cannot authenticate to AWS APIs.

---

## 26. Which networking feature acts as a virtual firewall for EC2 instances?

- Network ACLs
- Route Tables
- Security Groups
- Internet Gateways

**Explanation:**
"Network ACLs" is incorrect. NACLs operate at subnet level, stateless.
"Route Tables" is incorrect. These define traffic paths.
"Security Groups" is correct. Instance-level, stateful firewalls controlling inbound/outbound traffic.
"Internet Gateways" is incorrect. Provide internet connectivity, not filtering.

---

## 27. What determines the maximum number of ENIs (Elastic Network Interfaces) an instance can have?

- VPC size
- Instance type
- Region
- AMI

**Explanation:**
"VPC size" is incorrect. ENI limits are not tied to CIDR capacity.
"Instance type" is correct. Each instance type family defines ENI limits.
"Region" is incorrect. Limits are consistent across regions.
"AMI" is incorrect. AMIs do not affect network interface limits.

---

## 28. Which feature provides automatic recovery of an EC2 instance when system status checks fail?

- EC2 Auto Recovery
- Auto Scaling
- CloudWatch Logs
- Elastic Beanstalk

**Explanation:**
"EC2 Auto Recovery" is correct. Automatically recovers instances when underlying hardware fails.
"Auto Scaling" is incorrect. Auto Scaling replaces instances based on custom health checks, not EC2 system checks.
"CloudWatch Logs" is incorrect. Logging does not trigger instance recovery.
"Elastic Beanstalk" is incorrect. It manages environments but is not an EC2 recovery feature.

---

## 29. Which option provides the highest level of isolation for EC2?

- Dedicated Instances
- Dedicated Hosts
- Spot Instances
- Savings Plans

**Explanation:**
"Dedicated Instances" is incorrect. Provide isolation at host level but without hardware visibility.
"Dedicated Hosts" is correct. Give full physical host control and license management.
"Spot Instances" is incorrect. No isolation guarantees.
"Savings Plans" is incorrect. Only billing mechanism.

---

## 30. What describes EC2’s “burstable performance” instance family?

- T‑family instances accumulate CPU credits and spend them during spikes
- M‑family instances offer balanced CPU and memory
- C‑family instances provide maximum CPU
- R‑family instances provide high memory capacity

**Explanation:**
"T‑family instances accumulate CPU credits and spend them during spikes" is correct. Burst model with CPU credit system.
"M‑family instances offer balanced CPU and memory" is incorrect. Not burst-based.
"C‑family instances provide maximum CPU" is incorrect. Compute-focused but not credit-based.
"R‑family instances provide high memory capacity" is incorrect. Memory-optimized, unrelated to burst.

---

## 31. What is the main benefit of using EC2 Auto Scaling?

- Automatic OS patching
- Automatic adjustment of instance count based on demand
- Automatic switching between instance types
- Automatic application deployment

**Explanation:**
"Automatic OS patching" is incorrect. This is handled via SSM, not Auto Scaling.
"Automatic adjustment of instance count based on demand" is correct. Auto Scaling matches capacity to load.
"Automatic switching between instance types" is incorrect. Only possible with mixed instance policies, but not the core purpose.
"Automatic application deployment" is incorrect. This is a CI/CD or Elastic Beanstalk responsibility.

---

## 32. Which Amazon EBS volume type is best suited for a balance of price and performance for a wide variety of workloads?

- Magnetic (standard)
- Provisioned IOPS SSD (io2)
- General Purpose SSD (gp3)
- Throughput Optimized HDD (st1)

**Explanation:**
"Magnetic (standard)" is incorrect. Magnetic (previously standard) volumes are legacy HDD-backed volumes that offer lower performance and are rarely recommended for modern workloads where SSDs are preferable.
"Provisioned IOPS SSD (io2)" is incorrect. io2 provides the highest sustained IOPS and throughput for mission-critical databases but is more expensive and targeted at I/O-intensive workloads rather than general use.
"General Purpose SSD (gp3)" is correct. gp3 is designed to deliver a balance of price and performance for a broad set of workloads, allowing baseline performance and the ability to provision additional IOPS and throughput independently of volume size.
"Throughput Optimized HDD (st1)" is incorrect. st1 is optimized for large, sequential throughput for big data or log processing and is not the balanced general-purpose option.

---

## 33. When you create an AMI from an instance, what is captured and can be used to recreate instances?

- Only the instance’s metadata
- The instance’s root volume and optional attached EBS volumes (snapshots)
- Only the running process list
- User data script only

**Explanation:**
"Only the instance’s metadata" is incorrect. Metadata (instance‑id, etc.) is ephemeral and not sufficient to recreate the instance filesystem or configuration.
"The instance’s root volume and optional attached EBS volumes (snapshots)" is correct. Creating an AMI typically snapshots the root EBS volume (and optionally other EBS volumes), capturing the filesystem state to launch identical instances.
"Only the running process list" is incorrect. The process list is transient and not used to recreate the full instance image.
"User data script only" is incorrect. User data is a bootstrap script attached at launch, but an AMI contains the underlying disk image, not just the user data.

---

## 34. Which of the following statements about EBS snapshots is true?

- Snapshots are incremental after the first full snapshot
- Each snapshot always duplicates the entire volume data
- Snapshots cannot be used to create new volumes
- Snapshots are automatically copied to all regions

**Explanation:**
"Snapshots are incremental after the first full snapshot" is correct. After the initial full snapshot, subsequent snapshots store only changed blocks, making them incremental and more storage-efficient.
"Each snapshot always duplicates the entire volume data" is incorrect. Only the first snapshot is effectively a full copy; subsequent snapshots record changed blocks relative to prior snapshots.
"Snapshots cannot be used to create new volumes" is incorrect. Snapshots are commonly used to create new EBS volumes in the same region (and can be copied to other regions first).
"Snapshots are automatically copied to all regions" is incorrect. Snapshots remain in the region where created unless you explicitly copy them to other regions.

---

## 35. Which IMDS (Instance Metadata Service) version improves protection against SSRF and session hijacking by requiring session-oriented tokens for requests?

- IMDSv1
- IMDSv2
- Both IMDSv1 and IMDSv2 are identical in protection
- Neither; metadata access cannot be protected

**Explanation:**
"IMDSv1" is incorrect. IMDSv1 accepts unsigned HTTP requests and is more vulnerable to SSRF and unauthorized metadata access.
"IMDSv2" is correct. IMDSv2 requires a session‑oriented PUT to obtain a time‑limited token which must be included in subsequent GET requests, significantly reducing SSRF and request‑forgery risks.
"Both IMDSv1 and IMDSv2 are identical in protection" is incorrect. IMDSv2 adds tokenization and is more secure than IMDSv1.
"Neither; metadata access cannot be protected" is incorrect. IMDSv2 provides explicit protection mechanisms for metadata access.

---

## 36. Which of these is true about instance store volumes?

- Instance store data persists after instance stop/terminate
- Instance store provides ephemeral storage physically attached to the host
- Instance store volumes can be snapshotted to S3 automatically
- Instance store is recommended for long-term durable storage

**Explanation:**
"Instance store data persists after instance stop/terminate" is incorrect. Instance store is ephemeral; data is lost when the instance stops, hibernates, or terminates.
"Instance store provides ephemeral storage physically attached to the host" is correct. Instance store (also called ephemeral storage) is physically attached to the host and offers high I/O but no durability across host failure or instance stop.
"Instance store volumes can be snapshotted to S3 automatically" is incorrect. Only EBS volumes support snapshots; instance store cannot be snapshotted by AWS.
"Instance store is recommended for long-term durable storage" is incorrect. Because of its ephemeral nature, instance store is unsuitable for durable long-term data unless replicated to durable storage.

---

## 37. What is the recommended way to provide applications on an EC2 instance with temporary AWS credentials?

- Embed long-lived access keys in application config
- Use IAM roles attached to the instance (Instance Profile)
- Store root account credentials on the instance
- Manually rotate IAM user credentials daily

**Explanation:**
"Embed long-lived access keys in application config" is incorrect. Embedding long-lived keys is insecure and risks credential leakage.
"Use IAM roles attached to the instance (Instance Profile)" is correct. IAM roles provide temporary, automatically rotated credentials via the Instance Metadata Service, which is the secure AWS best practice.
"Store root account credentials on the instance" is incorrect. Root credentials must never be stored on instances.
"Manually rotate IAM user credentials daily" is incorrect. Manual rotation is error-prone and unnecessary when instance roles provide temporary credentials automatically.

---

## 38. Which of the following best describes an Elastic Network Interface (ENI)?

- A virtual network card that can be attached to an EC2 instance
- AWS’s term for a subnet
- A physical NIC in the AWS data center
- The route table for a VPC

**Explanation:**
"A virtual network card that can be attached to an EC2 instance" is correct. An ENI is a logical network interface with private IPs, security groups, and MAC that can be attached/detached from instances.
"AWS’s term for a subnet" is incorrect. Subnets are CIDR‑based subdivisions of a VPC; ENIs are per-instance interfaces.
"A physical NIC in the AWS data center" is incorrect. ENIs are virtual constructs managed by AWS, not a physical device you control.
"The route table for a VPC" is incorrect. Route tables control routing; ENI is a network interface.

---

## 39. Which EC2 capability lets you preserve the root device and data when you stop and start an instance?

- Using Instance Store-backed AMIs
- Using EBS-backed root volumes
- Using Spot Instances
- Using a T2 instance family

**Explanation:**
"Using Instance Store-backed AMIs" is incorrect. Instance-store-backed AMIs lose instance store data on stop; they don’t persist root by stopping.
"Using EBS-backed root volumes" is correct. Instances with EBS-backed root volumes can be stopped and restarted while preserving the EBS volume contents.
"Using Spot Instances" is incorrect. Spot instances can be terminated; they don’t guarantee persistent root preservation.
"Using a T2 instance family" is incorrect. Instance family does not determine persistence; root persistence depends on the root device type (EBS vs instance store).

---

## 40. What is the recommended approach for backing up critical data on EC2 instances?

- Rely solely on instance store volumes
- Use EBS snapshots and copy them to another region or use lifecycle policies
- Store backups only on the instance’s local disk and manual copy
- Do not back up; rely on auto-healing

**Explanation:**
"Rely solely on instance store volumes" is incorrect. Instance store is ephemeral and not suitable for backups.
"Use EBS snapshots and copy them to another region or use lifecycle policies" is correct. EBS snapshots (incremental) and cross‑region copies or automated lifecycle policies are recommended for durable backups.
"Store backups only on the instance’s local disk and manual copy" is incorrect. Local disks are ephemeral; manual procedures are error-prone and not durable.
"Do not back up; rely on auto-healing" is incorrect. Auto-healing replaces instances but does not preserve application data unless backed up.

---

## 41. While AWS has the capabilities to meet many different hosting needs and models, which cloud deployment model best describes AWS as a whole?

- Public
- Hybrid
- Private
- Community

**Explanation:**
"Public" is correct. AWS is a public cloud provider offering computing, storage, and other services over the internet to multiple tenants with shared infrastructure.
"Hybrid" is incorrect. A hybrid cloud combines on‑premises and cloud resources; AWS itself is not inherently hybrid.
"Private" is incorrect. A private cloud is dedicated to a single organization, while AWS serves multiple organizations on shared infrastructure.
"Community" is incorrect. Community clouds are shared among organizations with similar concerns; AWS serves general customers beyond a single community.

---

## 42. Which AWS service is utilized to consolidate monitoring and measure services for your entire account within AWS?

- AWS WAF
- AWS Shield
- AWS CloudWatch
- AWS CloudTrail

**Explanation:**
"AWS WAF" is incorrect. WAF is a web application firewall and does not provide consolidated monitoring.
"AWS Shield" is incorrect. Shield provides DDoS protection, not general monitoring.
"AWS CloudWatch" is correct. CloudWatch collects metrics, logs, and events, providing monitoring and dashboards for your AWS resources.
"AWS CloudTrail" is incorrect. CloudTrail records API calls and audit logs, not continuous performance metrics.

---

## 43. What AWS mechanism is used to protect the overall availability of resources and to protect users from potentially runaway billing?

- Constraints
- Segments
- Quotas
- Blocks

**Explanation:**
"Constraints" is incorrect. Constraints are rules in service configuration but do not enforce usage limits.
"Segments" is incorrect. Segments are not relevant to AWS usage control.
"Quotas" is correct. AWS service quotas (formerly limits) restrict resource consumption per account to prevent accidental overuse or cost overruns.
"Blocks" is incorrect. Blocks are not an official AWS mechanism for limiting resource usage.

---

## 44. Which AWS support resource is an extensive set of FAQ pages that cover all AWS services and can be a useful resource for learning about AWS services and implementation ideas?

- Documentation
- Discussion forums
- AWS Cloud Adoption Framework
- Knowledge Center

**Explanation:**
"Documentation" is incorrect. Documentation provides manuals and technical references but not a dedicated FAQ format.
"Discussion forums" is incorrect. Forums allow community discussion, not a curated FAQ.
"AWS Cloud Adoption Framework" is incorrect. CAF is a guidance framework for planning adoption, not an FAQ.
"Knowledge Center" is correct. The AWS Knowledge Center contains FAQs with detailed answers for common AWS service questions.

---

## 45. Which cloud concept refers to the assigning of jobs, tasks, roles, and responsibilities and ensuring they are satisfactorily performed?

- Auditability
- Interoperability
- Maintenance
- Governance

**Explanation:**
"Auditability" is incorrect. Auditability refers to the ability to track and review actions.
"Interoperability" is incorrect. Interoperability refers to systems working across different platforms.
"Maintenance" is incorrect. Maintenance refers to updating, patching, or repairing systems.
"Governance" is correct. Governance ensures organizational policies, roles, and responsibilities are defined and enforced effectively.

---

## 46. Security groups are virtual firewalls within an AWS VPC. Which of the following is true about how security groups are applied?

- Security groups only apply to traffic within the VPC
- Security groups apply to both inbound and outbound traffic
- Security groups only apply to outbound traffic
- Security groups only apply to inbound traffic

**Explanation:**
"Security groups only apply to traffic within the VPC" is incorrect. Security groups apply to all traffic entering or leaving the instance, including from the Internet if assigned a public IP.
"Security groups apply to both inbound and outbound traffic" is correct. Security groups have rules for both inbound and outbound traffic, controlling connectivity in both directions.
"Security groups only apply to outbound traffic" is incorrect. They control inbound traffic as well.
"Security groups only apply to inbound traffic" is incorrect. Outbound rules are also required to allow traffic leaving the instance.

---

## 47. If you were located in Germany and wanted to run an EC2 instance within your own jurisdiction, which AWS region would allow you to accomplish that?

- us-west-1
- ge-south-1
- eu-central-1
- af-south-1

**Explanation:**
"us-west-1" is incorrect. This is a US-based region and does not meet data residency requirements in Germany.
"ge-south-1" is incorrect. This region does not exist.
"eu-central-1" is correct. eu-central-1 corresponds to Frankfurt, Germany, and satisfies jurisdictional requirements for running instances locally.
"af-south-1" is incorrect. This region is in Africa (Cape Town) and is outside Germany.

---

## 48. Select two types of reserved instances offered by AWS for EC2 services.

- Flexible
- Dynamic
- Convertible
- Standard
- Hybrid

**Explanation:**
"Flexible" is incorrect. There is no AWS Reserved Instance type called “Flexible.”
"Dynamic" is incorrect. “Dynamic” is not an official EC2 Reserved Instance category.
"Convertible" is correct. Convertible Reserved Instances allow you to change instance types, OS, or tenancy during the reservation period while maintaining cost benefits.
"Standard" is correct. Standard Reserved Instances provide the largest discount over On‑Demand pricing but cannot be modified significantly during the term.
"Hybrid" is incorrect. AWS does not offer a “Hybrid” Reserved Instance type.

---

## 49. Which computing concept allows the provisioning of services within a large pool of resources and sharing the same hardware infrastructure via a hypervisor?

- Elasticity
- Metered service
- Containers
- Virtualization

**Explanation:**
"Elasticity" is incorrect. Elasticity refers to scaling resources up or down based on demand, not sharing hardware.
"Metered service" is incorrect. Metered service is about pay‑per‑use billing, not resource abstraction.
"Containers" is incorrect. Containers provide application-level isolation, but hypervisors relate to virtualization.
"Virtualization" is correct. Virtualization uses a hypervisor to abstract and share physical hardware across multiple virtual machines.

---

## 50. In a traditional data center, if you needed to add storage beyond what you already had connected to a server, you would need to buy or move hardware to expand. What key concept of cloud computing enables resources to be added without needing to add more hardware?

- On-demand self-service
- Virtualization
- Rapid elasticity
- Metered service

**Explanation:**
"On-demand self-service" is incorrect. This allows users to provision resources without human intervention, but doesn’t inherently avoid adding hardware.
"Virtualization" is correct. Virtualization abstracts hardware, allowing allocation of resources from a large shared pool without physically adding hardware.
"Rapid elasticity" is incorrect. Elasticity allows scaling resources automatically, but underlying virtualization is required to avoid new hardware purchases.
"Metered service" is incorrect. Metered service relates to billing, not resource allocation or abstraction.

---

## 51. Within a cloud environment, which of the following is not a shared resource between tenants or customers?

- Storage
- Data
- CPU
- Memory

**Explanation:**
"Storage" is incorrect. Storage is typically virtualized and shared across tenants, with logical isolation.
"Data" is correct. Customer data is logically isolated and not shared between tenants.
"CPU" is incorrect. Physical CPU cores are shared via virtualization across tenants.
"Memory" is incorrect. Physical memory is allocated to instances but shared at the hypervisor level; the memory itself is not isolated physically.

---

## 52. Which of the following is a correct service endpoint for an EC2 instance within AWS?

- ec2.amazonaws.com
- ec2.aws.amazon.com
- ec2.eu-west-2.amazonaws.com
- ec2.aws.com

**Explanation:**
"ec2.amazonaws.com" is correct. This is the standard global endpoint for EC2 API requests.
"ec2.aws.amazon.com" is incorrect. This is not a valid AWS endpoint.
"ec2.eu-west-2.amazonaws.com" is correct for the specific London region; regional endpoints include the region code.
"ec2.aws.com" is incorrect. AWS endpoints always include amazonaws.com.

---

## 53. Which statement about password policies for IAM accounts is correct?

- IAM accounts are free to use whatever password is desired by the account holder
- IAM password policies have granular controls and can be set based on the regulatory or corporate policies required for the account
- IAM account passwords can only be set by the root account and cannot be modified by the account itself
- AWS has a global password policy that is enforced for all IAM accounts to meet industry best practices

**Explanation:**
"IAM accounts are free to use whatever password is desired by the account holder" is incorrect. AWS allows administrators to enforce password policies.
"IAM password policies have granular controls and can be set based on the regulatory or corporate policies required for the account" is correct. IAM policies can enforce length, complexity, expiration, and reuse restrictions to meet regulatory requirements.
"IAM account passwords can only be set by the root account and cannot be modified by the account itself" is incorrect. Users can change their own passwords within policy constraints.
"AWS has a global password policy that is enforced for all IAM accounts to meet industry best practices" is incorrect. There is no global enforced policy; each account manages its own IAM password policy.

---

## 54. When implementing multifactor security, which two things can be used along with a password to fulfill the requirements?

- Date of birth
- Hardware token
- Retinal scan
- PIN
- Challenge question

**Explanation:**
"Date of birth" is incorrect. Personal info like DOB is not considered a valid MFA factor.
"Hardware token" is correct. Hardware tokens (e.g. YubiKey, virtual MFA apps) provide a second factor beyond password.
"Retinal scan" is correct. Biometric factors such as retinal or fingerprint scans are valid MFA methods if supported.
"PIN" is incorrect. A PIN alone is insufficient; MFA requires a separate factor.
"Challenge question" is incorrect. Knowledge-based questions are considered single-factor and do not satisfy true MFA.

---

## 55. In the AWS Pricing Calculator, which AWS service offers options for both a quick estimate and an advanced estimate?

- S3
- Elastic Beanstalk
- EC2
- Lightsail

**Explanation:**
"S3" is incorrect. S3 pricing calculator options are relatively simple and do not offer the same advanced compute-level configurations.
"Elastic Beanstalk" is incorrect. Elastic Beanstalk abstracts the infrastructure and does not require extensive parameter estimation in the calculator.
"EC2" is correct. EC2 has both simple quick estimates and advanced options for configuring instance type, storage, networking, and pricing details.
"Lightsail" is incorrect. Lightsail has simpler fixed-pricing bundles; the calculator has limited advanced options.

---

## 56. Which AWS service allows secure, programmatic access to your AWS resources without using long-term credentials?

- AWS IAM
- AWS Secrets Manager
- AWS KMS
- AWS STS

**Explanation:**
"AWS IAM" is incorrect. IAM defines identities and policies, but access without long-term credentials requires temporary credentials.
"AWS Secrets Manager" is incorrect. Secrets Manager stores and rotates secrets but does not directly issue temporary credentials.
"AWS KMS" is incorrect. KMS manages encryption keys, not access credentials.
"AWS STS" is correct. Security Token Service (STS) provides temporary, limited-privilege credentials to access AWS resources programmatically without storing long-term keys.

---

## 57. Which of the following is a feature of AWS Security Groups?

- Stateless traffic filtering
- Applies at subnet level
- Allows rules based on IP, protocol, and port
- Automatically scales horizontally

**Explanation:**
"Stateless traffic filtering" is incorrect. Security Groups are stateful; they track return traffic automatically.
"Applies at subnet level" is incorrect. Security Groups are applied at the instance level.
"Allows rules based on IP, protocol, and port" is correct. Security Groups define inbound and outbound rules using IP addresses, protocols, and ports.
"Automatically scales horizontally" is incorrect. Security Groups do not scale compute resources; they control traffic.

---

## 58. Which EC2 feature allows you to protect data at rest using encryption?

- Security Groups
- EBS Encryption
- IAM Roles
- Network ACLs

**Explanation:**
"Security Groups" is incorrect. Security Groups control network traffic, not data encryption.
"EBS Encryption" is correct. EBS volumes can be encrypted at rest using AWS-managed or customer-managed keys.
"IAM Roles" is incorrect. IAM roles manage permissions, not encryption.
"Network ACLs" is incorrect. NACLs control traffic at the subnet level; they do not encrypt data.

---

## 59. Which of the following is true about Spot Instances?

- They are the most expensive EC2 option
- They can be interrupted by AWS with a 2-minute warning
- They guarantee uninterrupted compute
- They cannot be used with Auto Scaling

**Explanation:**
"They are the most expensive EC2 option" is incorrect. Spot Instances are the cheapest option due to bidding on unused capacity.
"They can be interrupted by AWS with a 2-minute warning" is correct. Spot Instances can be terminated when capacity is reclaimed, with a 2-minute notification.
"They guarantee uninterrupted compute" is incorrect. Spot Instances are interruptible and do not provide guaranteed compute.
"They cannot be used with Auto Scaling" is incorrect. Spot Instances can be part of Auto Scaling groups.

---

## 60. Which AWS service can be used to automate EC2 instance configuration management using Puppet or Chef?

- AWS CloudFormation
- AWS OpsWorks
- AWS Systems Manager
- AWS Config

**Explanation:**
"AWS CloudFormation" is incorrect. CloudFormation provisions resources but does not directly manage configuration with Puppet or Chef.
"AWS OpsWorks" is correct. OpsWorks supports configuration management using Chef and Puppet for automated EC2 instance setup.
"AWS Systems Manager" is incorrect. Systems Manager provides patching and automation but does not natively integrate Puppet or Chef.
"AWS Config" is incorrect. Config monitors and audits configuration compliance, not instance setup via Chef/Puppet.

---

## 61. Which AWS EC2 pricing model allows customers to commit to a consistent amount of usage for a one- or three-year term in exchange for a lower price?

- On-Demand Instances
- Spot Instances
- Savings Plans
- Reserved Instances

**Explanation:**
"On-Demand Instances" is incorrect. On-Demand charges per usage with no long-term commitment.
"Spot Instances" is incorrect. Spot Instances bid on unused capacity, not long-term commitment.
"Savings Plans" is incorrect. Savings Plans apply to usage discounts but are not specific to EC2 reservations per se.
"Reserved Instances" is correct. Reserved Instances provide lower hourly rates in exchange for 1- or 3-year commitment.

---

## 62. Which AWS service is primarily used for object storage with unlimited scaling?

- Amazon EBS
- Amazon S3
- Amazon EFS
- Amazon FSx

**Explanation:**
"Amazon EBS" is incorrect. EBS provides block storage for EC2, limited per volume.
"Amazon S3" is correct. S3 offers object storage that scales virtually unlimited in capacity.
"Amazon EFS" is incorrect. EFS is a scalable file system for Linux instances but has throughput limits.
"Amazon FSx" is incorrect. FSx is a managed Windows or Lustre file system, not unlimited object storage.

---

## 63. Which AWS feature allows you to isolate resources by creating a logically separated section of the AWS Cloud?

- Availability Zones
- Subnets
- Virtual Private Cloud (VPC)
- Regions

**Explanation:**
"Availability Zones" is incorrect. AZs are physical data center clusters, not logical isolation boundaries.
"Subnets" is incorrect. Subnets are subdivisions within a VPC, not top-level isolation.
"Virtual Private Cloud (VPC)" is correct. A VPC provides a logically isolated section of AWS resources with its own IP ranges, routing, and security.
"Regions" is incorrect. Regions are geographic locations, not logical isolation constructs within an account.

---

## 64. Which of the following is NOT a valid state for an EC2 instance?

- Pending
- Running
- Stopping
- Retiring

**Explanation:**
"Pending" is incorrect. This is a valid state while an instance is initializing.
"Running" is incorrect. Indicates the instance is operational.
"Stopping" is incorrect. Indicates an instance is being stopped.
"Retiring" is correct. "Retiring" is not a standard instance state; AWS may mark an instance for retirement but it is not a formal state like pending, running, stopping, or terminated.

---

## 65. Which EC2 feature allows you to maintain persistent storage across instance stops and starts?

- Instance Store
- EBS Volumes
- Security Groups
- Elastic IP

**Explanation:**
"Instance Store" is incorrect. Instance store is ephemeral and loses data on stop/terminate.
"EBS Volumes" is correct. EBS-backed volumes persist across instance stops and starts, maintaining data.
"Security Groups" is incorrect. Security groups manage network access, not storage persistence.
"Elastic IP" is incorrect. Elastic IP provides static IPs, not data storage.
