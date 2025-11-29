# AWS Certification / Cloud Concepts v3

---

## 1. With EC2, which layer belongs to AWS under the Shared Responsibility model?
- **Data**
- **Application code**
- **Hardware**
- **Operating system**

**Explanations:**
- **Data:** Incorrect. The customer is responsible for the data they store and manage in EC2 instances; AWS does not control the content or integrity of customer data.
- **Application code:** Incorrect. The customer is responsible for the application code they deploy and run on EC2; AWS only provides the underlying infrastructure.
- **Hardware:** Correct. AWS manages the physical servers, networking, and storage hardware as part of the Shared Responsibility model.
- **Operating system:** Incorrect. The customer is responsible for managing the OS installed on EC2 instances unless using managed services like AWS RDS.

---

## 2. If you wanted to maintain flexibility in data processing, where the majority of your processes could be performed in a cloud environment, with other data-intensive processes such as video editing being maintained in your own data center, which cloud model would you utilize?
- **Hybrid**
- **Public**
- **Community**
- **Private**

**Explanations:**
- **Hybrid:** Correct. A hybrid cloud allows workloads to be distributed between on-premises and cloud environments, offering flexibility for data-intensive or specialized tasks.
- **Public:** Incorrect. Public cloud exclusively runs on shared cloud infrastructure; all workloads would reside in the cloud.
- **Community:** Incorrect. Community cloud is shared among organizations with similar requirements but does not provide on-premises integration flexibility.
- **Private:** Incorrect. Private cloud isolates all resources for a single organization and would not provide the hybrid flexibility required.

---

## 3. With implementing a data loss prevention (DLP) strategy, where would you place the solution to protect data in use?
- **Web server**
- **Storage system**
- **User's device**
- **Network firewalls**

**Explanations:**
- **Web server:** Incorrect. Web servers mainly handle data in transit and storage; they are not the primary place to prevent data loss during active use.
- **Storage system:** Incorrect. Storage systems protect data at rest but do not prevent leaks while data is actively used.
- **User's device:** Correct. DLP solutions protecting data in use monitor endpoints (user devices) to prevent unauthorized sharing, copying, or printing of sensitive data.
- **Network firewalls:** Incorrect. Firewalls protect data in transit and network access, but they do not control data while it is actively being used on the device.

---

## 4. AWS offers a fully managed virtual desktop infrastructure (VDI) solution with both Windows and Linux options. Which AWS service is this?
- **WorkSpaces**
- **WorkLink**
- **AWS Desktop**
- **AppStream**

**Explanations:**
- **WorkSpaces:** Correct. WorkSpaces provides managed virtual desktops, supporting Windows and Linux, accessible from multiple devices.
- **WorkLink:** Incorrect. WorkLink provides secure access to internal websites and applications from mobile devices, not full virtual desktops.
- **AWS Desktop:** Incorrect. There is no AWS service officially named “AWS Desktop.”
- **AppStream:** Incorrect. AppStream is a managed application streaming service, delivering apps but not a full virtual desktop environment.

---

## 5. Access control list (ACLs) are security layers on the VPC that control traffic at the subnet level. Which of the following statements about ACLs is incorrect?
- **Every subnet must have an ACL assigned to it.**
- **ACLs can have different inbound and outbound rules.**
- **ACLs have numbered rules that are processed in order.**
- **ACLs are composed only of ALLOW rules.**

**Explanations:**
- **Every subnet must have an ACL assigned to it:** Correct. Every subnet automatically has a default ACL if none is explicitly assigned.
- **ACLs can have different inbound and outbound rules:** Correct. Network ACLs can independently control inbound and outbound traffic.
- **ACLs have numbered rules that are processed in order:** Correct. ACL rules are evaluated starting from the lowest number.
- **ACLs are composed only of ALLOW rules:** Incorrect. ACLs can include both ALLOW and DENY rules; the statement that they only have ALLOW rules is false.

---

## 6. Which process involves determining the security controls that are necessary for a piece of data based on its sensitivity and value?
- **Hashing**
- **Labeling**
- **Discovery**
- **Classification**

**Explanations:**
- **Hashing:** Incorrect. Hashing is a method to verify data integrity, not to determine security controls.
- **Labeling:** Incorrect. Labeling assigns metadata to data but does not determine security controls.
- **Discovery:** Incorrect. Discovery identifies where data resides but does not define its required protection.
- **Classification:** Correct. Classification involves assessing data based on sensitivity and value to apply appropriate security measures.

---

## 7. Which AWS region is limited to specific customers and is not available for selection in general?
- **us-gov-west-1**
- **sa-east-1**
- **ca-central-1**
- **me-south-1**

**Explanations:**
- **us-gov-west-1:** Correct. This is a GovCloud region available only to U.S. government agencies and eligible contractors.
- **sa-east-1:** Incorrect. This is a public region in South America accessible to all AWS customers.
- **ca-central-1:** Incorrect. This is a public region in Canada accessible to all AWS customers.
- **me-south-1:** Incorrect. This is a public Middle East region available for general AWS customers.

---

## 8. Which cloud service model is most closely associated with DevOps?
- **DaaS**
- **PaaS**
- **SaaS**
- **IaaS**

**Explanations:**
- **DaaS:** Incorrect. Desktop-as-a-Service provides virtual desktops, not directly aligned with DevOps practices.
- **PaaS:** Correct. Platform-as-a-Service provides environments for developers to deploy, manage, and scale applications, supporting DevOps workflows.
- **SaaS:** Incorrect. Software-as-a-Service delivers applications to end users, not development environments.
- **IaaS:** Incorrect. Infrastructure-as-a-Service provides virtualized hardware but requires more management; less directly tied to DevOps tooling.

---

## 9. Which of the following is not a technology used to protect data in transit?
- **S3 Encryption**
- **Ipsec**
- **VPN**
- **HTTPS**

**Explanations:**
- **S3 Encryption:** Correct. S3 encryption protects data at rest, not in transit.
- **Ipsec:** Incorrect. IPsec secures data in transit between networked systems.
- **VPN:** Incorrect. VPNs encrypt data in transit over public networks.
- **HTTPS:** Incorrect. HTTPS encrypts web traffic in transit.

---

## 10. Which of the following is not an example of data at rest and the potential security implications of it?
- **DynamoDB tables**
- **S3 objects**
- **API calls**
- **Machine images**

**Explanations:**
- **DynamoDB tables:** Incorrect. DynamoDB stores persistent data, representing data at rest.
- **S3 objects:** Incorrect. S3 objects are stored in AWS and are considered data at rest.
- **API calls:** Correct. API calls are data in motion, not at rest.
- **Machine images:** Incorrect. AMIs (Amazon Machine Images) are stored snapshots, considered data at rest.

---

## 11. Which AWS tool will allow you to initiate processes as a result of events that are detected within CloudWatch and take action based on the value of the event?
- **Alarms**
- **Triggers**
- **Alerts**
- **Events**

**Explanations:**
- **Alarms:** Correct. CloudWatch Alarms monitor metrics and can trigger actions automatically when thresholds are breached.
- **Triggers:** Incorrect. While triggers may sound like event initiators, AWS does not use this term for CloudWatch automation.
- **Alerts:** Incorrect. Alerts notify but do not initiate automated actions.
- **Events:** Incorrect. CloudWatch Events (now EventBridge) can detect events but require a target for execution; alarms directly initiate actions based on metric thresholds.

---

## 12. Which authentication method is supported by the AWS CLI to perform automation tasks on your AWS account?
- **Security hardware token**
- **MFA**
- **Access/secret key**
- **Username/password**

**Explanations:**
- **Security hardware token:** Incorrect. Tokens alone are not used for CLI authentication; they may be part of MFA.
- **MFA:** Incorrect. MFA adds security but requires keys; it is not standalone for CLI automation.
- **Access/secret key:** Correct. CLI automation uses programmatic credentials (access key ID and secret access key) to authenticate.
- **Username/password:** Incorrect. Passwords are used for console login, not CLI automation.

---

## 13. If your application utilizes or stores any type of sensitive information, you will need to comply with specific regulatory requirements. Which AWS service would provide information on AWS certifications with major governing bodies and regulations?
- **AWS Systems Manager**
- **AWS Billing Console**
- **AWS Artifact**
- **AWS CloudTrail**

**Explanations:**
- **AWS Systems Manager:** Incorrect. Systems Manager helps manage infrastructure but does not provide compliance certification information.
- **AWS Billing Console:** Incorrect. Provides billing data, not compliance documents.
- **AWS Artifact:** Correct. Artifact provides access to AWS compliance reports and certifications for regulatory bodies.
- **AWS CloudTrail:** Incorrect. CloudTrail provides auditing and logging of API calls, not regulatory certification information.

---

## 14. Select two managed instances that are offered as part of AWS OpsWorks.
- **Git**
- **Puppet Enterprise**
- **FlashCopy**
- **Chef Automate**
- **Rsync**

**Explanations:**
- **Git:** Incorrect. Git is a version control tool, not a managed instance in OpsWorks.
- **Puppet Enterprise:** Correct. OpsWorks supports Puppet Enterprise for configuration management.
- **FlashCopy:** Incorrect. FlashCopy is an IBM storage feature, not AWS OpsWorks.
- **Chef Automate:** Correct. OpsWorks integrates with Chef Automate for automation of infrastructure.
- **Rsync:** Incorrect. Rsync is a file transfer tool, not a managed instance in OpsWorks.

---

## 15. Which key concept of cloud computing allows the resources to an application to be expanded to meet increased demand of the user without having to provision for maximum capacity in advance?
- **Metered service**
- **Elasticity**
- **Resource pooling**
- **Multitenancy**

**Explanations:**
- **Metered service:** Incorrect. Metered service relates to billing based on usage, not resource scaling.
- **Elasticity:** Correct. Elasticity allows resources to automatically scale up or down to meet demand.
- **Resource pooling:** Incorrect. Resource pooling shares resources among multiple tenants but does not imply dynamic scaling.
- **Multitenancy:** Incorrect. Multitenancy allows multiple users to share resources, unrelated to dynamic scaling.

---

## 16. Which Amazon EC2 feature allows you to run multiple instances across distinct physical locations within an Availability Zone?

- **Placement Groups – Cluster**
- **Placement Groups – Partition**
- **Placement Groups – Spread**
- **Auto Scaling Groups**

**Explanations:**
- **Placement Groups – Cluster:** Incorrect. Cluster groups place instances close together in a single AZ to achieve low-latency networking, not to separate them physically.
- **Placement Groups – Partition:** Incorrect. Partition groups separate instances into partitions across racks, but they are optimized for large distributed systems like HDFS and are not intended for small groups of isolated instances.
- **Placement Groups – Spread:** Correct. Spread placement groups ensure each instance is placed on distinct hardware within an AZ, minimizing correlated failure.
- **Auto Scaling Groups:** Incorrect. Auto Scaling manages instance count and scaling, not physical hardware separation.

---

## 17. What is the primary benefit of using EC2 Reserved Instances?

- **Improved network bandwidth**
- **Lower compute costs in exchange for commitment**
- **Ability to run instances on dedicated physical hardware**
- **Guaranteed higher I/O performance**

**Explanations:**
- **Improved network bandwidth:** Incorrect. Reserved Instances do not change performance characteristics.
- **Lower compute costs in exchange for commitment:** Correct. Reserved Instances reduce hourly pricing if you commit for 1 or 3 years.
- **Ability to run instances on dedicated physical hardware:** Incorrect. This is a feature of Dedicated Hosts.
- **Guaranteed higher I/O performance:** Incorrect. Performance depends on instance type, not reservation.

---

## 18. Which EC2 purchase option is best for workloads that cannot tolerate interruption?

- **Spot Instances**
- **On-Demand Instances**
- **Savings Plans**
- **Dedicated Hosts**

**Explanations:**
- **Spot Instances:** Incorrect. Spot Instances can be terminated at any moment when capacity or price changes.
- **On-Demand Instances:** Correct. They provide uninterrupted compute with no risk of involuntary termination.
- **Savings Plans:** Incorrect. Savings Plans reduce cost but do not influence instance interruption or guarantees.
- **Dedicated Hosts:** Incorrect. Dedicated Hosts provide hardware isolation but are not inherently tied to interruption guarantees.

---

## 19. Which instance type family is optimized for memory-intensive applications?

- **M family**
- **R family**
- **C family**
- **I family**

**Explanations:**
- **M family:** Incorrect. M is general-purpose with balanced CPU, memory, and networking.
- **R family:** Correct. R instances are explicitly memory-optimized for high RAM workloads.
- **C family:** Incorrect. C instances are compute-optimized.
- **I family:** Incorrect. I instances are storage-optimized for high IOPS, not memory.

---

## 20. What does Elastic IP primarily solve?

- **Scaling compute capacity**
- **Automating instance recovery**
- **Maintaining a static public IPv4 across instance replacements**
- **Encrypting traffic between instances**

**Explanations:**
- **Scaling compute capacity:** Incorrect. IPs do not influence compute scaling.
- **Automating instance recovery:** Incorrect. Elastic IPs do not handle resilience.
- **Maintaining a static public IPv4 across instance replacements:** Correct. EIPs let you reassign IPs to new instances instantly.
- **Encrypting traffic between instances:** Incorrect. This is handled by security protocols, not EIPs.

---

## 21. Which EC2 storage type provides the highest IOPS and is ideal for transactional workloads?

- **Instance Store**
- **EBS General Purpose SSD (gp3)**
- **EBS Provisioned IOPS SSD (io2)**
- **EFS Standard**

**Explanations:**
- **Instance Store:** Incorrect. Fast, but ephemeral and not designed for sustained transactional IOPS.
- **EBS General Purpose SSD (gp3):** Incorrect. Good baseline performance but not highest IOPS.
- **EBS Provisioned IOPS SSD (io2):** Correct. io2/io2 Block Express provide maximum durability and highest IOPS for databases.
- **EFS Standard:** Incorrect. Distributed filesystem, not block storage for transactional workloads.

---

## 22. What happens when an EC2 instance with Instance Store volume stops?

- **Instance Store data persists**
- **Instance Store data is lost**
- **EBS volumes detach automatically**
- **The instance cannot be started again**

**Explanations:**
- **Instance Store data persists:** Incorrect. Instance Store is ephemeral.
- **Instance Store data is lost:** Correct. Stopping or terminating the instance wipes the instance store data.
- **EBS volumes detach automatically:** Incorrect. Stopping does not detach EBS unless done manually.
- **The instance cannot be started again:** Incorrect. Instances can be restarted, but data is gone.

---

## 23. What is the purpose of EC2 user data?

- **Applying IAM roles**
- **Running boot-time automation scripts**
- **Setting security groups**
- **Configuring networking rules**

**Explanations:**
- **Applying IAM roles:** Incorrect. IAM roles are attached separately.
- **Running boot-time automation scripts:** Correct. User data provides initialization automation at instance launch.
- **Setting security groups:** Incorrect. Security groups are defined externally.
- **Configuring networking rules:** Incorrect. Networking is managed via VPC configuration, not user data.

---

## 24. What can be used to allow EC2 instances to access AWS services securely without storing credentials?

- **API keys stored in user data**
- **IAM roles**
- **Root access keys**
- **OS-level accounts**

**Explanations:**
- **API keys stored in user data:** Incorrect and insecure.
- **IAM roles:** Correct. Provide temporary credentials via IMDS with no static secrets.
- **Root access keys:** Incorrect. Should never be distributed or embedded.
- **OS-level accounts:** Incorrect. OS users cannot authenticate to AWS APIs.

---

## 25. Which networking feature acts as a virtual firewall for EC2 instances?

- **Network ACLs**
- **Route Tables**
- **Security Groups**
- **Internet Gateways**

**Explanations:**
- **Network ACLs:** Incorrect. NACLs operate at subnet level, stateless.
- **Route Tables:** Incorrect. These define traffic paths.
- **Security Groups:** Correct. Instance-level, stateful firewalls controlling inbound/outbound.
- **Internet Gateways:** Incorrect. Provide internet connectivity, not filtering.

---

## 26. What determines the maximum number of ENIs (Elastic Network Interfaces) an instance can have?

- **VPC size**
- **Instance type**
- **Region**
- **AMI**

**Explanations:**
- **VPC size:** Incorrect. ENI limits are not tied to CIDR capacity.
- **Instance type:** Correct. Each instance type family defines ENI limits.
- **Region:** Incorrect. Limits are consistent across regions.
- **AMI:** Incorrect. AMIs do not affect network interface limits.

---

## 27. Which feature provides automatic recovery of an EC2 instance when system status checks fail?

- **EC2 Auto Recovery**
- **Auto Scaling**
- **CloudWatch Logs**
- **Elastic Beanstalk**

**Explanations:**
- **EC2 Auto Recovery:** Correct. Automatically recovers instances when underlying hardware fails.
- **Auto Scaling:** Incorrect. Auto Scaling replaces instances based on custom health checks, not EC2 system checks.
- **CloudWatch Logs:** Incorrect. Logging does not trigger instance recovery.
- **Elastic Beanstalk:** Incorrect. It manages environments but is not an EC2 recovery feature.

---

## 28. Which option provides the highest level of isolation for EC2?

- **Dedicated Instances**
- **Dedicated Hosts**
- **Spot Instances**
- **Savings Plans**

**Explanations:**
- **Dedicated Instances:** Incorrect. Provide isolation at host level but without hardware visibility.
- **Dedicated Hosts:** Correct. Give full physical host control and license management.
- **Spot Instances:** Incorrect. No isolation guarantees.
- **Savings Plans:** Incorrect. Only billing mechanism.

---

## 29. What describes EC2’s “burstable performance” instance family?

- **T-family instances accumulate CPU credits and spend them during spikes**
- **M-family instances offer balanced CPU and memory**
- **C-family instances provide maximum CPU**
- **R-family instances provide high memory capacity**

**Explanations:**
- **T-family instances accumulate CPU credits and spend them during spikes:** Correct. Burst model with CPU credit system.
- **M-family instances offer balanced CPU and memory:** Incorrect. Not burst-based.
- **C-family instances provide maximum CPU:** Incorrect. Compute-focused but not credit-based.
- **R-family instances provide high memory capacity:** Incorrect. Memory-optimized, unrelated to burst.

---

## 30. What is the main benefit of using EC2 Auto Scaling?

- **Automatic OS patching**
- **Automatic adjustment of instance count based on demand**
- **Automatic switching between instance types**
- **Automatic application deployment**

**Explanations:**
- **Automatic OS patching:** Incorrect. This is handled via SSM, not Auto Scaling.
- **Automatic adjustment of instance count based on demand:** Correct. Auto Scaling matches capacity to load.
- **Automatic switching between instance types:** Incorrect. Only possible with mixed instance policies, but not the core purpose.
- **Automatic application deployment:** Incorrect. This is a CI/CD or Elastic Beanstalk responsibility.

---

## 31. Which Amazon EBS volume type is best suited for a balance of price and performance for a wide variety of workloads?
- **Magnetic (standard)**
- **Provisioned IOPS SSD (io2)**
- **General Purpose SSD (gp3)**
- **Throughput Optimized HDD (st1)**

**Explanations:**
- **Magnetic (standard):** Incorrect. Magnetic (previously standard) volumes are legacy HDD-backed volumes that offer lower performance and are rarely recommended for modern workloads where SSDs are preferable.
- **Provisioned IOPS SSD (io2):** Incorrect. io2 provides the highest sustained IOPS and throughput for mission-critical databases but is more expensive and targeted at I/O-intensive workloads rather than general use.
- **General Purpose SSD (gp3):** Correct. gp3 is designed to deliver a balance of price and performance for a broad set of workloads, allowing baseline performance and the ability to provision additional IOPS and throughput independently of volume size.
- **Throughput Optimized HDD (st1):** Incorrect. st1 is optimized for large, sequential throughput for big data or log processing and is not the balanced general-purpose option.

---

## 32. When you create an AMI from an instance, what is captured and can be used to recreate instances?
- **Only the instance’s metadata**
- **The instance’s root volume and optional attached EBS volumes (snapshots)**
- **Only the running process list**
- **User data script only**

**Explanations:**
- **Only the instance’s metadata:** Incorrect. Metadata (instance-id, etc.) is ephemeral and not sufficient to recreate the instance filesystem or configuration.
- **The instance’s root volume and optional attached EBS volumes (snapshots):** Correct. Creating an AMI typically snapshots the root EBS volume (and optionally other EBS volumes), capturing the filesystem state to launch identical instances.
- **Only the running process list:** Incorrect. The process list is transient and not used to recreate the full instance image.
- **User data script only:** Incorrect. User data is a bootstrap script attached at launch, but an AMI contains the underlying disk image, not just the user data.

---

## 33. Which of the following statements about EBS snapshots is true?
- **Snapshots are incremental after the first full snapshot**
- **Each snapshot always duplicates the entire volume data**
- **Snapshots cannot be used to create new volumes**
- **Snapshots are automatically copied to all regions**

**Explanations:**
- **Snapshots are incremental after the first full snapshot:** Correct. After the initial full snapshot, subsequent snapshots store only changed blocks, making them incremental and more storage-efficient.
- **Each snapshot always duplicates the entire volume data:** Incorrect. Only the first snapshot is effectively a full copy; subsequent snapshots record changed blocks relative to prior snapshots.
- **Snapshots cannot be used to create new volumes:** Incorrect. Snapshots are commonly used to create new EBS volumes in the same region (and can be copied to other regions first).
- **Snapshots are automatically copied to all regions:** Incorrect. Snapshots remain in the region where created unless you explicitly copy them to other regions.

---

## 34. Which IMDS (Instance Metadata Service) version improves protection against SSRF and session hijacking by requiring session-oriented tokens for requests?
- **IMDSv1**
- **IMDSv2**
- **Both IMDSv1 and IMDSv2 are identical in protection**
- **Neither; metadata access cannot be protected**

**Explanations:**
- **IMDSv1:** Incorrect. IMDSv1 accepts unsigned HTTP requests and is more vulnerable to SSRF and unauthorized metadata access.
- **IMDSv2:** Correct. IMDSv2 requires a session-oriented PUT to obtain a time-limited token which must be included in subsequent GET requests, significantly reducing SSRF and request-forgery risks.
- **Both IMDSv1 and IMDSv2 are identical in protection:** Incorrect. IMDSv2 adds tokenization and is more secure than IMDSv1.
- **Neither; metadata access cannot be protected:** Incorrect. IMDSv2 provides explicit protection mechanisms for metadata access.

---

## 35. Which of these is true about instance store volumes?
- **Instance store data persists after instance stop/terminate**
- **Instance store provides ephemeral storage physically attached to the host**
- **Instance store volumes can be snapshotted to S3 automatically**
- **Instance store is recommended for long-term durable storage**

**Explanations:**
- **Instance store data persists after instance stop/terminate:** Incorrect. Instance store is ephemeral; data is lost when the instance stops, hibernates, or terminates.
- **Instance store provides ephemeral storage physically attached to the host:** Correct. Instance store (also called ephemeral storage) is physically attached to the host and offers high I/O but no durability across host failure or instance stop.
- **Instance store volumes can be snapshotted to S3 automatically:** Incorrect. Only EBS volumes support snapshots; instance store cannot be snapshotted by AWS.
- **Instance store is recommended for long-term durable storage:** Incorrect. Because of its ephemeral nature, instance store is unsuitable for durable long-term data unless replicated to durable storage.

---

## 36. What is the recommended way to provide applications on an EC2 instance with temporary AWS credentials?
- **Embed long-lived access keys in application config**
- **Use IAM roles attached to the instance (Instance Profile)**
- **Store root account credentials on the instance**
- **Manually rotate IAM user credentials daily**

**Explanations:**
- **Embed long-lived access keys in application config:** Incorrect. Embedding long-lived keys is insecure and risks credential leakage.
- **Use IAM roles attached to the instance (Instance Profile):** Correct. IAM roles provide temporary, automatically rotated credentials via the Instance Metadata Service, which is the secure AWS best practice.
- **Store root account credentials on the instance:** Incorrect. Root credentials must never be stored on instances.
- **Manually rotate IAM user credentials daily:** Incorrect. Manual rotation is error-prone and unnecessary when instance roles provide temporary credentials automatically.

---

## 37. Which of the following best describes an Elastic Network Interface (ENI)?
- **A virtual network card that can be attached to an EC2 instance**
- **AWS’s term for a subnet**
- **A physical NIC in the AWS data center**
- **The route table for a VPC**

**Explanations:**
- **A virtual network card that can be attached to an EC2 instance:** Correct. An ENI is a logical network interface with private IPs, security groups, and MAC that can be attached/detached from instances.
- **AWS’s term for a subnet:** Incorrect. Subnets are CIDR-based subdivisions of a VPC; ENIs are per-instance interfaces.
- **A physical NIC in the AWS data center:** Incorrect. ENIs are virtual constructs managed by AWS, not a physical device you control.
- **The route table for a VPC:** Incorrect. Route tables control routing; ENI is a network interface.

---

## 38. Which EC2 capability lets you preserve the root device and data when you stop and start an instance?
- **Using Instance Store-backed AMIs**
- **Using EBS-backed root volumes**
- **Using Spot Instances**
- **Using a T2 instance family**

**Explanations:**
- **Using Instance Store-backed AMIs:** Incorrect. Instance-store-backed AMIs lose instance store data on stop; they don’t persist root by stopping.
- **Using EBS-backed root volumes:** Correct. Instances with EBS-backed root volumes can be stopped and restarted while preserving the EBS volume contents.
- **Using Spot Instances:** Incorrect. Spot instances can be terminated; they don’t guarantee persistent root preservation.
- **Using a T2 instance family:** Incorrect. Instance family does not determine persistence; root persistence depends on the root device type (EBS vs instance store).

---

## 39. Which of these is true about security groups versus network ACLs (NACLs)?
- **Security groups are stateful; NACLs are stateless**
- **NACLs are stateful; security groups are stateless**
- **Security groups and NACLs are both stateful**
- **NACLs always override security groups**

**Explanations:**
- **Security groups are stateful; NACLs are stateless:** Correct. Security groups automatically allow return traffic for allowed inbound flows; NACLs require explicit rules for both directions.
- **NACLs are stateful; security groups are stateless:** Incorrect. This reverses the true behavior.
- **Security groups and NACLs are both stateful:** Incorrect. Only security groups are stateful.
- **NACLs always override security groups:** Incorrect. Both sets are evaluated (instance-level security groups and subnet-level NACLs), and a packet must pass both; it's not an override but conjunctive filtering.

---

## 40. What is the effect of enabling termination protection on an EC2 instance?
- **Prevents any API calls against the instance**
- **Blocks the instance from being terminated via the console/API unless protection is removed**
- **Makes the instance immutable (no changes allowed)**
- **Automatically creates AMI backups before termination**

**Explanations:**
- **Prevents any API calls against the instance:** Incorrect. Termination protection does not block other API actions like stop/start (unless IAM policies also restrict).
- **Blocks the instance from being terminated via the console/API unless protection is removed:** Correct. Termination protection prevents accidental termination; you must disable it before terminating.
- **Makes the instance immutable (no changes allowed):** Incorrect. The instance can still be modified, rebooted, or have attributes changed.
- **Automatically creates AMI backups before termination:** Incorrect. Termination protection does not create backups automatically.

---

## 41. Which of the following is true about EC2 key pairs?
- **Key pairs are used to encrypt EBS volumes**
- **Key pairs are used for SSH/RDP authentication to instances**
- **Key pairs are used to sign IAM policies**
- **Key pairs provide KMS encryption for S3**

**Explanations:**
- **Key pairs are used to encrypt EBS volumes:** Incorrect. EBS encryption uses AWS KMS, not EC2 key pairs.
- **Key pairs are used for SSH/RDP authentication to instances:** Correct. Key pairs provide the public key injected into the instance for SSH (Linux) or RDP (Windows) access.
- **Key pairs are used to sign IAM policies:** Incorrect. IAM policies are JSON documents; key pairs are not used for signing them.
- **Key pairs provide KMS encryption for S3:** Incorrect. KMS manages S3 encryption; EC2 key pairs are unrelated.

---

## 42. Which statement about instance metadata is true?
- **Instance metadata can include temporary credentials if an IAM role is attached**
- **Instance metadata is only accessible from outside the instance**
- **Instance metadata is identical across all instances in a region**
- **Instance metadata contains the instance root password**

**Explanations:**
- **Instance metadata can include temporary credentials if an IAM role is attached:** Correct. The Instance Metadata Service provides temporary IAM credentials when an instance has an instance profile attached.
- **Instance metadata is only accessible from outside the instance:** Incorrect. Metadata is accessible from inside the instance (via link-local address) and is not accessible externally by default.
- **Instance metadata is identical across all instances in a region:** Incorrect. Metadata is instance-specific (IDs, hostnames, attached roles).
- **Instance metadata contains the instance root password:** Incorrect. AWS does not expose root passwords via metadata; Linux typically uses key-based auth; Windows may retrieve a password via EC2 API encrypted with the key pair.

---

## 43. What does the EC2 instance attribute “user data” commonly accomplish when launching instances?
- **Stores encrypted credentials for all users**
- **Contains scripts or configuration executed on first boot**
- **Defines the instance’s security groups**
- **Specifies the instance’s billing plan**

**Explanations:**
- **Stores encrypted credentials for all users:** Incorrect. User data is not a secure credential store and is not intended for storing secrets long-term.
- **Contains scripts or configuration executed on first boot:** Correct. User data commonly contains bootstrap scripts to install software/configure the instance at launch.
- **Defines the instance’s security groups:** Incorrect. Security groups are attached via instance launch configuration or API, not via user data.
- **Specifies the instance’s billing plan:** Incorrect. Billing plans are determined by instance type/reservation, not user data.

---

## 44. Which of the following is true about instance types and vCPU limits?
- **Each AWS account has unlimited vCPU per region by default**
- **vCPU limits are per instance type family and can be adjusted via service quota requests**
- **vCPU limits cannot be viewed or changed**
- **vCPU limits are applied only to t-family instances**

**Explanations:**
- **Each AWS account has unlimited vCPU per region by default:** Incorrect. There are default vCPU quotas per instance family and region to protect capacity.
- **vCPU limits are per instance type family and can be adjusted via service quota requests:** Correct. AWS enforces vCPU quotas per family; customers can request quota increases through Service Quotas.
- **vCPU limits cannot be viewed or changed:** Incorrect. Limits are visible in the console and can be requested for increase.
- **vCPU limits are applied only to t-family instances:** Incorrect. Limits apply across instance families, not just T instances.

---

## 45. What is the behavior of an EC2 instance launched into a public subnet without an assigned public IPv4 address?
- **It will have no network connectivity**
- **It can communicate to the Internet if NAT Gateway is present and route is configured, but will not be directly reachable from the Internet**
- **It becomes automatically assigned an Elastic IP**
- **It is reachable from the internet via IPv6 automatically**

**Explanations:**
- **It will have no network connectivity:** Incorrect. Lack of public IPv4 does not prevent network connectivity within VPC or to Internet via NAT.
- **It can communicate to the Internet if NAT Gateway is present and route is configured, but will not be directly reachable from the Internet:** Correct. Instances without a public IP can use NAT Gateway/Instance via route table for outbound internet, but are not directly reachable from the public Internet.
- **It becomes automatically assigned an Elastic IP:** Incorrect. Elastic IPs must be explicitly allocated and associated.
- **It is reachable from the internet via IPv6 automatically:** Incorrect. IPv6 must be configured and the subnet must be IPv6-enabled; it is not automatic.

---

## 46. Which action is required to allow an EC2 instance to launch into a VPC with a specific subnet?
- **Set the instance’s AMI to the same CIDR as the subnet**
- **Specify the subnet ID or let AWS select a default subnet when launching**
- **Attach a security group after launching only**
- **Create an IAM user with network privileges**

**Explanations:**
- **Set the instance’s AMI to the same CIDR as the subnet:** Incorrect. AMIs are images and do not have a CIDR; subnets define CIDR ranges.
- **Specify the subnet ID or let AWS select a default subnet when launching:** Correct. When launching, you choose the VPC and subnet ID (or AWS picks default).
- **Attach a security group after launching only:** Incorrect. Security groups can be specified at launch; while you can attach after, it’s not the required step to select the subnet.
- **Create an IAM user with network privileges:** Incorrect. IAM users do not control subnet selection; subnet selection is a launching parameter.

---

## 47. What is the best way to migrate an instance-store-backed AMI to EBS-backed storage?
- **Create a snapshot from instance store**
- **Stop the instance and change root device type**
- **Launch a new EBS-backed instance and copy data from the instance-store root to an attached EBS volume, then create an AMI from that EBS volume**
- **You cannot migrate; instance-store AMIs are permanently immutable**

**Explanations:**
- **Create a snapshot from instance store:** Incorrect. Instance store cannot be snapshotted by AWS like EBS.
- **Stop the instance and change root device type:** Incorrect. Root device type is tied to how the AMI was created; you can’t flip it without data copy.
- **Launch a new EBS-backed instance and copy data from the instance-store root to an attached EBS volume, then create an AMI from that EBS volume:** Correct. The recommended approach is to copy the filesystem into EBS and create an EBS-backed AMI.
- **You cannot migrate; instance-store AMIs are permanently immutable:** Incorrect. Migration is possible using manual data copy and AMI creation.

---

## 48. Which of the following describes EC2 hibernation?
- **Hibernation saves the instance memory to the root volume and stops the instance, preserving the in-memory state for next start**
- **Hibernation resets BIOS and loses memory contents**
- **Hibernation is the same as stopping the instance**
- **Hibernation is only for spot instances**

**Explanations:**
- **Hibernation saves the instance memory to the root volume and stops the instance, preserving the in-memory state for next start:** Correct. Hibernation writes RAM to the EBS root volume and resumes the OS state later.
- **Hibernation resets BIOS and loses memory contents:** Incorrect. Hibernation specifically preserves memory contents.
- **Hibernation is the same as stopping the instance:** Incorrect. Stopping does not preserve in-memory state; hibernation does.
- **Hibernation is only for spot instances:** Incorrect. Hibernation can be used for supported instance types and images (not limited to spot instances).

---

## 49. Which feature allows you to specify a desired count, minimum, and maximum number of instances for a group to scale?
- **Placement Group**
- **Auto Scaling Group**
- **Launch Template**
- **Security Group**

**Explanations:**
- **Placement Group:** Incorrect. Placement groups control placement/pinning, not scaling behavior.
- **Auto Scaling Group:** Correct. ASGs let you define desired/min/max counts and scaling policies to manage fleets of instances.
- **Launch Template:** Incorrect. Launch Templates define provisioning parameters but do not themselves manage scaling counts.
- **Security Group:** Incorrect. Security groups control network access, not instance counts.

---

## 50. What is the recommended approach for backing up critical data on EC2 instances?
- **Rely solely on instance store volumes**
- **Use EBS snapshots and copy them to another region or use lifecycle policies**
- **Store backups only on the instance’s local disk and manual copy**
- **Do not back up; rely on auto-healing**

**Explanations:**
- **Rely solely on instance store volumes:** Incorrect. Instance store is ephemeral and not suitable for backups.
- **Use EBS snapshots and copy them to another region or use lifecycle policies:** Correct. EBS snapshots (incremental) and cross-region copies or automated lifecycle policies are recommended for durable backups.
- **Store backups only on the instance’s local disk and manual copy:** Incorrect. Local disks are ephemeral; manual procedures are error-prone and not durable.
- **Do not back up; rely on auto-healing:** Incorrect. Auto-healing replaces instances but does not preserve application data unless backed up.

---

## 51. While AWS has the capabilities to meet many different hosting needs and models, which cloud deployment model best describes AWS as a whole?
- **Public**
- **Hybrid**
- **Private**
- **Community**

**Explanations:**
- **Public:** Correct. AWS is a public cloud provider offering computing, storage, and other services over the internet to multiple tenants with shared infrastructure.
- **Hybrid:** Incorrect. A hybrid cloud combines on-premises and cloud resources; AWS itself is not inherently hybrid.
- **Private:** Incorrect. A private cloud is dedicated to a single organization, while AWS serves multiple organizations on shared infrastructure.
- **Community:** Incorrect. Community clouds are shared among organizations with similar concerns; AWS serves general customers beyond a single community.

---

## 52. Which AWS service is utilized to consolidate monitoring and measure services for your entire account within AWS?
- **AWS WAF**
- **AWS Shield**
- **AWS CloudWatch**
- **AWS CloudTrail**

**Explanations:**
- **AWS WAF:** Incorrect. WAF is a web application firewall and does not provide consolidated monitoring.
- **AWS Shield:** Incorrect. Shield provides DDoS protection, not general monitoring.
- **AWS CloudWatch:** Correct. CloudWatch collects metrics, logs, and events, providing monitoring and dashboards for your AWS resources.
- **AWS CloudTrail:** Incorrect. CloudTrail records API calls and audit logs, not continuous performance metrics.

---

## 53. What AWS mechanism is used to protect the overall availability of resources and to protect users from potentially runaway billing?
- **Constraints**
- **Segments**
- **Quotas**
- **Blocks**

**Explanations:**
- **Constraints:** Incorrect. Constraints are rules in service configuration but do not enforce usage limits.
- **Segments:** Incorrect. Segments are not relevant to AWS usage control.
- **Quotas:** Correct. AWS service quotas (formerly limits) restrict resource consumption per account to prevent accidental overuse or cost overruns.
- **Blocks:** Incorrect. Blocks are not an official AWS mechanism for limiting resource usage.

---

## 54. Which AWS support resource is an extensive set of FAQ pages that cover all AWS services and can be a useful resource for learning about AWS services and implementation ideas?
- **Documentation**
- **Discussion forums**
- **AWS Cloud Adoption Framework**
- **Knowledge Center**

**Explanations:**
- **Documentation:** Incorrect. Documentation provides manuals and technical references but not a dedicated Q&A FAQ format.
- **Discussion forums:** Incorrect. Forums allow community discussion, not a curated FAQ.
- **AWS Cloud Adoption Framework:** Incorrect. CAF is a guidance framework for planning adoption, not an FAQ.
- **Knowledge Center:** Correct. The AWS Knowledge Center contains FAQs with detailed answers for common AWS service questions.

---

## 55. Which cloud concept refers to the assigning of jobs, tasks, roles, and responsibilities and ensuring they are satisfactorily performed?
- **Auditability**
- **Interoperability**
- **Maintenance**
- **Governance**

**Explanations:**
- **Auditability:** Incorrect. Auditability refers to the ability to track and review actions.
- **Interoperability:** Incorrect. Interoperability refers to systems working across different platforms.
- **Maintenance:** Incorrect. Maintenance refers to updating, patching, or repairing systems.
- **Governance:** Correct. Governance ensures organizational policies, roles, and responsibilities are defined and enforced effectively.

---

## 56. Security groups are virtual firewalls within an AWS VPC. Which of the following is true about how security groups are applied?
- **Security groups only apply to traffic within the VPC**
- **Security groups apply to both inbound and outbound traffic**
- **Security groups only apply to outbound traffic**
- **Security groups only apply to inbound traffic**

**Explanations:**
- **Security groups only apply to traffic within the VPC:** Incorrect. Security groups apply to all traffic entering or leaving the instance, including from the Internet if assigned a public IP.
- **Security groups apply to both inbound and outbound traffic:** Correct. Security groups have rules for both inbound and outbound traffic, controlling connectivity in both directions.
- **Security groups only apply to outbound traffic:** Incorrect. They control inbound traffic as well.
- **Security groups only apply to inbound traffic:** Incorrect. Outbound rules are also required to allow traffic leaving the instance.

---

## 57. If you were located in Germany and wanted to run an EC2 instance within your own jurisdiction, which AWS region would allow you to accomplish that?
- **us-west-1**
- **ge-south-1**
- **eu-central-1**
- **af-south-1**

**Explanations:**
- **us-west-1:** Incorrect. This is a US-based region and does not meet data residency requirements in Germany.
- **ge-south-1:** Incorrect. This region does not exist.
- **eu-central-1:** Correct. eu-central-1 corresponds to Frankfurt, Germany, and satisfies jurisdictional requirements for running instances locally.
- **af-south-1:** Incorrect. This region is in Africa (Cape Town) and is outside Germany.

---

## 58. Select two types of reserved instances offered by AWS for EC2 services.
- **Flexible**
- **Dynamic**
- **Convertible**
- **Standard**
- **Hybrid**

**Explanations:**
- **Flexible:** Incorrect. There is no AWS Reserved Instance type called “Flexible.”
- **Dynamic:** Incorrect. “Dynamic” is not an official EC2 Reserved Instance category.
- **Convertible:** Correct. Convertible Reserved Instances allow you to change instance types, OS, or tenancy during the reservation period while maintaining cost benefits.
- **Standard:** Correct. Standard Reserved Instances provide the largest discount over On-Demand pricing but cannot be modified significantly during the term.
- **Hybrid:** Incorrect. AWS does not offer a “Hybrid” Reserved Instance type.

---

## 59. Which computing concept allows the provisioning of services within a large pool of resources and sharing the same hardware infrastructure via a hypervisor?
- **Elasticity**
- **Metered service**
- **Containers**
- **Virtualization**

**Explanations:**
- **Elasticity:** Incorrect. Elasticity refers to scaling resources up or down based on demand, not sharing hardware.
- **Metered service:** Incorrect. Metered service is about pay-per-use billing, not resource abstraction.
- **Containers:** Incorrect. Containers provide application-level isolation, but hypervisors relate to virtualization.
- **Virtualization:** Correct. Virtualization uses a hypervisor to abstract and share physical hardware across multiple virtual machines.

---

## 60. In a traditional data center, if you needed to add storage beyond what you already had connected to a server, you would need to buy or move hardware to expand. What key concept of cloud computing enables resources to be added without needing to add more hardware?
- **On-demand self-service**
- **Virtualization**
- **Rapid elasticity**
- **Metered service**

**Explanations:**
- **On-demand self-service:** Incorrect. This allows users to provision resources without human intervention, but doesn’t inherently avoid adding hardware.
- **Virtualization:** Correct. Virtualization abstracts hardware, allowing allocation of resources from a large shared pool without physically adding hardware.
- **Rapid elasticity:** Incorrect. Elasticity allows scaling resources automatically, but underlying virtualization is required to avoid new hardware purchases.
- **Metered service:** Incorrect. Metered service relates to billing, not resource allocation or abstraction.

---

## 61. Within a cloud environment, which of the following is not a shared resource between tenants or customers?
- **Storage**
- **Data**
- **CPU**
- **Memory**

**Explanations:**
- **Storage:** Incorrect. Storage is typically virtualized and shared across tenants, with logical isolation.
- **Data:** Correct. Customer data is logically isolated and not shared between tenants.
- **CPU:** Incorrect. Physical CPU cores are shared via virtualization across tenants.
- **Memory:** Incorrect. Physical memory is allocated to instances but shared at the hypervisor level; the memory itself is not isolated physically.

---

## 62. Which of the following is a correct service endpoint for an EC2 instance within AWS?
- **ec2.amazonaws.com**
- **ec2.aws.amazon.com**
- **ec2.eu-west-2.amazonaws.com**
- **ec2.aws.com**

**Explanations:**
- **ec2.amazonaws.com:** Correct. This is the standard global endpoint for EC2 API requests.
- **ec2.aws.amazon.com:** Incorrect. This is not a valid AWS endpoint.
- **ec2.eu-west-2.amazonaws.com:** Correct for the specific London region; regional endpoints include the region code.
- **ec2.aws.com:** Incorrect. AWS endpoints always include amazonaws.com.

---

## 63. Which of the following states is true about password policies for IAM accounts?
- **IAM accounts are free to use whatever password is desired by the account holder**
- **IAM password policies have granular controls and can be set based on the regulatory or corporate policies required for the account**
- **IAM account passwords can only be set by the root account and cannot be modified by the account itself**
- **AWS has a global password policy that is enforced for all IAM accounts to meet industry best practices**

**Explanations:**
- **IAM accounts are free to use whatever password is desired by the account holder:** Incorrect. AWS allows administrators to enforce password policies.
- **IAM password policies have granular controls and can be set based on the regulatory or corporate policies required for the account:** Correct. IAM policies can enforce length, complexity, expiration, and reuse restrictions to meet regulatory requirements.
- **IAM account passwords can only be set by the root account and cannot be modified by the account itself:** Incorrect. Users can change their own passwords within policy constraints.
- **AWS has a global password policy that is enforced for all IAM accounts to meet industry best practices:** Incorrect. There is no global enforced policy; each account manages its own IAM password policy.

---

## 64. When implementing multifactor security, which two things can be used along with a password to fulfill the requirements?
- **Date of birth**
- **Hardware token**
- **Retinal scan**
- **PIN**
- **Challenge question**

**Explanations:**
- **Date of birth:** Incorrect. Personal info like DOB is not considered a valid MFA factor.
- **Hardware token:** Correct. Hardware tokens (e.g., YubiKey, virtual MFA apps) provide a second factor beyond password.
- **Retinal scan:** Correct. Biometric factors such as retinal or fingerprint scans are valid MFA methods if supported.
- **PIN:** Incorrect. A PIN alone is insufficient; MFA requires a separate factor.
- **Challenge question:** Incorrect. Knowledge-based questions are considered single-factor and do not satisfy true MFA.

---

## 65. In the AWS Pricing Calculator, which AWS service offers options for both a quick estimate and an advanced estimate?
- **S3**
- **Elastic Beanstalk**
- **EC2**
- **Lightsail**

**Explanations:**
- **S3:** Incorrect. S3 pricing calculator options are relatively simple and do not offer the same advanced compute-level configurations.
- **Elastic Beanstalk:** Incorrect. Elastic Beanstalk abstracts the infrastructure and does not require extensive parameter estimation in the calculator.
- **EC2:** Correct. EC2 has both simple quick estimates and advanced options for configuring instance type, storage, networking, and pricing details.
- **Lightsail:** Incorrect. Lightsail has simpler fixed-pricing bundles; the calculator has limited advanced options.

---
