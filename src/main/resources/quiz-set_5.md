# Practice Exam 5 for AWS Cloud Practitioner (CLF-CO2)

---

## 1. A startup is planning to leverage AWS Cloud to power a low-traffic website they plan to scale based on demand. Their business model is not yet stable, leading to unpredictable usage patterns. However, they want to minimize costs while experimenting during the first year. Given that they want to leverage the AWS Free Tier to the maximum extent, which compute purchasing option should they consider?

- On-Demand Instances.
- Reserved Instances.
- Savings Plans.
- Spot Instances.

**Explanation:**
On-Demand Instances is correct. On-Demand Instances let you pay for compute capacity by the hour or second with no long-term commitments, enabling immediate start/stop to match unpredictable usage. They are covered by the AWS Free Tier for qualifying instance types during the first year, which helps minimize costs while experimenting. Long-term commitments or interruptible options would not fit the startup's uncertain usage pattern.
Reserved Instances is incorrect because they require a one- or three-year commitment in exchange for lower rates, which is risky for unpredictable startups. Reserved Instances provide deep discounts only when workload and capacity are predictable. They involve upfront or partial-upfront payment options and planning to match instance attributes.
Savings Plans is incorrect because they require a monetary commitment over a one- or three-year term to receive discounted rates across compute usage. Savings Plans are more flexible than instance-specific reservations but still assume predictable spend. They are less suitable for early-stage experiments with variable usage.
Spot Instances is incorrect because Spot Instances can be interrupted when AWS reclaims capacity, making them unsuitable for user-facing services requiring stable availability. They are ideal for fault-tolerant, batch, or non-critical workloads that tolerate interruptions. Relying solely on Spot for a production website risks unexpected downtime.

---

## 2. A business is utilizing Amazon S3 to store frequently accessed data and infrequently accessed data. The IT manager wants to optimize storage costs while maintaining immediate access to the data when requested. One class of data includes monthly report files that need to be readily available without any delays for the first month after creation but are rarely accessed afterward. Another class of data is older archive files accessed only for compliance audits. What is the most cost-effective strategy to manage these storage requirements while minimizing AWS Data Transfer Costs?

- Store everything in S3 Glacier Deep Archive to maximize savings on storage costs.
- Store the monthly report files in S3 Standard for the first month and then transition them to S3 Standard-Infrequent Access (S3 Standard-IA), and store the older archive files in S3 Glacier or S3 Glacier Deep Archive.
- Use S3 One Zone-Infrequent Access for all data to minimize storage and data transfer costs.
- Keep all the data in S3 Standard to ensure immediate access and simplify management.

**Explanation:**
Store the monthly report files in S3 Standard for the first month and then transition them to S3 Standard-Infrequent Access (S3 Standard-IA), and store the older archive files in S3 Glacier or S3 Glacier Deep Archive. is correct. Using S3 Standard for the initial month preserves immediate access for frequently used reports, lifecycle rules can transition objects to Standard-IA to reduce cost as access declines, and Glacier/Deep Archive provide very low-cost long-term archival for compliance. This combination balances immediate availability and long-term cost optimization. Storing everything in archival storage would violate the requirement for immediate access and increase retrieval latency.
Store everything in S3 Glacier Deep Archive to maximize savings on storage costs. is incorrect because Glacier Deep Archive is designed for long-term retention with retrieval times measured in hours, so it cannot meet the immediate access requirement for recent monthly reports. It is appropriate only when long retrieval delays are acceptable.
Use S3 One Zone-Infrequent Access for all data to minimize storage and data transfer costs. is incorrect because One Zone-IA stores data in a single Availability Zone, reducing durability and increasing risk of data loss for critical or compliance-sensitive archives. It is best for re-creatable, non-critical data, not primary or compliance archives.
Keep all the data in S3 Standard to ensure immediate access and simplify management. is incorrect because S3 Standard is more expensive for infrequently accessed and archival data, which leads to unnecessarily high storage costs when cheaper classes are appropriate. Lifecycle transitions provide better cost control while preserving access when needed.

---

## 3. Your company is planning the deployment of a new application on AWS, which will require steady-state workloads to be running 24/7. To optimize costs, your CFO suggests purchasing compute capacity in advance. As the Cloud Practitioner responsible for managing the AWS resources, you need to choose the most cost-effective purchasing option for these specific workloads. Which AWS compute purchasing option should you recommend?

- Savings Plans.
- On-Demand Instances.
- Spot Instances.
- Reserved Instances.

**Explanation:**
Reserved Instances is correct. Reserved Instances provide significant hourly rate discounts in exchange for a one- or three-year commitment, making them the most cost-effective choice for predictable, continuous workloads that must run 24/7. They reduce long-term compute costs when usage patterns are stable and known. Proper planning is required to match instance attributes, scope, and payment options to workload needs.
Savings Plans is incorrect because although Savings Plans offer flexible discounts across compute services in exchange for a monetary commitment, Reserved Instances often yield deeper savings for fixed, steady-state instance usage and can be preferable when instance attributes are known. Savings Plans are useful when you need cross-instance or cross-service flexibility.
On-Demand Instances is incorrect because they are billed per hour or second without commitment and are therefore more expensive for long-running steady-state workloads. On-Demand is optimal for variable or unpredictable workloads rather than always-on services where long-term discounts apply.
Spot Instances is incorrect because Spot Instances are interruptible and can be reclaimed by AWS with little notice, making them unsuitable for continuous, critical workloads that require guaranteed availability. They are best for fault-tolerant, batch, or non-critical processing.

---

## 4. A company has recently transitioned to AWS and is managing numerous EC2 instances across different departments within an AWS Organization. The CFO, who wants to optimize the cloud expenditure, has come across the concept of Reserved Instances (RIs). He learned that RIs can be purchased at a significant discount compared to On-Demand instance pricing and that these discounts can be shared across the AWS Organization. However, the CFO is puzzled about how volume discounts for RIs apply within AWS Organizations. Which statement accurately describes the behavior of Reserved Instance volume discounts within AWS Organizations?

- Volume discounts for Reserved Instances are not available to AWS Organizations and can only be accessed by standalone AWS accounts.
- Each individual account within an AWS Organization has to separately reach a volume discount tier to benefit from Reserved Instance volume discounts.
- Reserved Instances purchased in one account within AWS Organizations can be used by another account but volume discounts are not shared and are only applied to the account that purchased the Reserved Instances.
- Reserved Instance volume discounts are applied at the organization level, so all the account reservations contribute to the volume discount tiers.

**Explanation:**
Reserved Instance volume discounts are applied at the organization level, so all the account reservations contribute to the volume discount tiers. is correct. AWS Organizations with consolidated billing aggregate usage and reservation purchases, enabling volume-based pricing benefits to be calculated across member accounts. This aggregation helps capture economies of scale and ensures reservations and discounts are applied broadly where applicable. Individual accounts do not need to independently reach volume thresholds.
Volume discounts for Reserved Instances are not available to AWS Organizations and can only be accessed by standalone AWS accounts. is incorrect because consolidated billing in AWS Organizations is specifically designed to aggregate usage for volume discounts and shared pricing benefits. Organizations can therefore leverage pooled usage for better pricing.
Each individual account within an AWS Organization has to separately reach a volume discount tier to benefit from Reserved Instance volume discounts. is incorrect because volume tiers are evaluated at the consolidated billing level, not per-account, so combined usage contributes to tiers.
Reserved Instances purchased in one account within AWS Organizations can be used by another account but volume discounts are not shared and are only applied to the account that purchased the Reserved Instances. is incorrect because consolidated billing and organization-level aggregation typically enable sharing of savings and better pricing across accounts when reservations and billing are pooled.

---

## 5. You are a Solutions Architect working on a project for a client that requires instances to be available 24/7. The workload is predictable, and it is vital to keep costs optimized while ensuring the servers are always running. The client prefers a long-term commitment to make the most out of potential savings. Which Amazon EC2 pricing option should you recommend given the need for a cost-effective, long-term solution with consistent usage?

- Reserved Instances.
- Spot Instances.
- On-Demand Instances.
- Dedicated Hosts.

**Explanation:**
Reserved Instances is correct. Reserved Instances reduce compute costs by committing to a specified instance configuration for a one- or three-year term and deliver substantial discounts for predictable, always-on workloads. They are well suited to steady-state usage where capacity needs are consistent. Other options either lack guaranteed continuous availability or target specialized licensing/compliance scenarios.
Spot Instances is incorrect because Spot Instances can be interrupted with short notice and thus are unsuitable for workloads that must run continuously and reliably. They are ideal for fault-tolerant or batch workloads that can tolerate interruptions.
On-Demand Instances is incorrect because On-Demand pricing provides flexibility with no long-term commitment but results in higher costs for continuous 24/7 workloads. On-Demand is better for variable or unpredictable workloads.
Dedicated Hosts is incorrect because Dedicated Hosts allocate entire physical servers for a customer’s use, which is mainly required for specific licensing or compliance needs and typically costs more; they are not the standard cost-optimization choice for general steady-state workloads.

---

## 6. Your company has recently transitioned to AWS for its infrastructure needs. As the lead cloud practitioner, you have been tasked with setting up various operational mechanisms to ensure smooth functioning of your cloud environment. You are aware of the AWS Support API and its capabilities to programmatically access the AWS Support Center. To enable your operations team to integrate AWS Support into their workflows, you want to leverage the AWS Support API to create cases, look up case histories, and manage support subscriptions. Given these requirements, which of the following must you have to successfully utilize the AWS Support API?

- You are only required to have a Developer support plan to use the AWS Support API.
- You need to install the AWS CLI on all operation team members' computers to access the AWS Support API.
- You only need to set up AWS CloudTrail for API call logging to utilize the AWS Support API.
- You must have an AWS account with an active subscription to the Business or Enterprise support plan.

**Explanation:**
You must have an AWS account with an active subscription to the Business or Enterprise support plan. is correct. Programmatic access to the full AWS Support API for creating and managing cases is available to accounts subscribed to Business or Enterprise support plans, which provide advanced support features and API access. Developer support does not grant the same programmatic case management features. Installing the CLI or enabling CloudTrail does not substitute for the required support subscription.
You are only required to have a Developer support plan to use the AWS Support API. is incorrect because Developer support lacks the programmatic case-management capabilities provided to Business and Enterprise customers. Developer support offers limited guidance and does not include full Support API access.
You need to install the AWS CLI on all operation team members' computers to access the AWS Support API. is incorrect because the CLI is a client tool choice; API access depends on account support level and IAM permissions rather than requiring the CLI specifically. SDKs or other HTTP clients can also be used.
You only need to set up AWS CloudTrail for API call logging to utilize the AWS Support API. is incorrect because CloudTrail provides auditing of API calls but does not enable or grant access to the Support API; an appropriate support subscription is required.

---

## 7. As a Cloud Architect at a large enterprise, you are responsible for overseeing the cloud infrastructure which is vital to the operations of the company. It is crucial for you to receive proactive guidance and support to optimize your AWS environment. Additionally, you need a consolidated view of the health of your AWS resources and services, and also be alerted to potential issues that could impact your applications running on AWS. Which AWS Support option combined with which AWS feature would best fit your needs to achieve these objectives?

- AWS Enterprise Support and AWS Personal Health Dashboard.
- AWS Basic Support and AWS Personal Health Dashboard.
- AWS Business Support and AWS Service Health Dashboard.
- AWS Developer Support and AWS Trusted Advisor.

**Explanation:**
AWS Enterprise Support and AWS Personal Health Dashboard. is correct. Enterprise Support provides the highest level of proactive guidance, a Technical Account Manager, and rapid incident response, while the Personal Health Dashboard offers account-specific alerts and remediation guidance for events affecting your resources. This combination supports proactive operational readiness and tailored notifications for your environment. Lower support tiers do not provide the same level of guidance or account-specific engagement.
AWS Basic Support and AWS Personal Health Dashboard. is incorrect because Basic Support does not include the proactive guidance, TAM access, or account-level operational reviews that Enterprise Support provides. Basic Support also lacks many organizational support features.
AWS Business Support and AWS Service Health Dashboard. is incorrect because while Business Support offers significant guidance and features, the Service Health Dashboard provides global service status rather than personalized, account-specific notifications; the Personal Health Dashboard pairs better with enterprise-level support needs.
AWS Developer Support and AWS Trusted Advisor. is incorrect because Developer Support focuses on development-related guidance and does not include the comprehensive, proactive enterprise-level support and account-based health alerts required for large-scale operational oversight.

---

## 8. CloudSolutions Inc., an AWS Consulting Partner, has recently increased its customer base and thereby the volume of services operated on AWS. The company is considering further expanding its cloud offerings. However, to better serve their customers, CloudSolutions Inc. is also interested in reducing its overall AWS costs. Which benefit of being an AWS Partner could directly assist CloudSolutions Inc. in achieving cost reductions for the volume of AWS services they manage?

- Partner Volume Discounts.
- Access to AWS Partner Network (APN) Portal.
- Partner Training and Certification.
- Eligibility for Market Development Funds (MDF).

**Explanation:**
Partner Volume Discounts. is correct. Partner Volume Discounts provide eligible AWS Partners with potential cost benefits tied to aggregated consumption or negotiated programs, helping reduce costs as the partner’s managed volume grows. These discounts can directly impact the partner's cost structure when managing large customer workloads. Other partner benefits support enablement, go-to-market, and training rather than direct volume-based price reduction.
Access to AWS Partner Network (APN) Portal. is incorrect because the APN Portal is a resource for partner management and program participation but does not itself provide direct cost reductions tied to service volume. It supports program access and partner tools.
Partner Training and Certification. is incorrect because training and certification improve skills and service quality but do not directly reduce AWS service costs across managed workloads. They enable better service delivery and compliance.
Eligibility for Market Development Funds (MDF). is incorrect because MDF assists with marketing and go-to-market activities rather than offering direct discounts on consumed AWS services. MDF supports customer acquisition efforts.

---

## 9. Your company has been growing substantially over the last year, and as a result, your AWS usage has increased proportionally. You have been appraised about the concept of economies of scale and how it could potentially help in reducing costs. You are advised to use AWS Trusted Advisor to optimize your spending and manage your resources effectively. Which of the following best describes how AWS Trusted Advisor can contribute to understanding and benefiting from economies of scale?

- AWS Trusted Advisor increases resource allocation to your applications as demand grows, enforcing economies of scale.
- AWS Trusted Advisor analyzes your AWS environment and provides recommendations to reduce costs by identifying idle and underutilized resources, which ensures you only pay for what you need, capitalizing on the economies of scale.
- AWS Trusted Advisor automatically applies discounts to your bill as your resource usage grows, directly demonstrating economies of scale.
- AWS Trusted Advisor only monitors security best practices and compliance checks and has no role in assisting with economies of scale.

**Explanation:**
AWS Trusted Advisor analyzes your AWS environment and provides recommendations to reduce costs by identifying idle and underutilized resources, which ensures you only pay for what you need, capitalizing on the economies of scale. is correct. Trusted Advisor inspects your environment and suggests optimizations across cost, performance, security, and fault tolerance, helping you eliminate waste and scale efficiently. It does not itself change billing or automatically apply discounts; instead, it highlights opportunities to consolidate or right-size resources. Using its recommendations helps an organization capture economies of scale through better resource utilization.
AWS Trusted Advisor increases resource allocation to your applications as demand grows, enforcing economies of scale. is incorrect because Trusted Advisor provides recommendations rather than automatically scaling resources; scaling is handled by services like Auto Scaling. Trusted Advisor focuses on optimization suggestions.
AWS Trusted Advisor automatically applies discounts to your bill as your resource usage grows, directly demonstrating economies of scale. is incorrect because Trusted Advisor does not change billing or apply discounts; pricing and volume discounts are governed by AWS billing and purchasing programs.
AWS Trusted Advisor only monitors security best practices and compliance checks and has no role in assisting with economies of scale. is incorrect because Trusted Advisor covers multiple categories including cost optimization, not just security and compliance.

---

## 10. An online retail company is currently utilizing various EC2 instances for its e-commerce platform. The company wants to optimize the cost of its AWS environment without sacrificing performance. Which Well-Architected Framework pillar would best guide the use of AWS Compute Optimizer to analyze and recommend optimal AWS compute resources based on their historical usage patterns?

- Operational Excellence.
- Security.
- Cost Optimization.
- Reliability.

**Explanation:**
Cost Optimization. is correct. The Cost Optimization pillar focuses on running systems to deliver business value at the lowest price point, and using tools like AWS Compute Optimizer aligns with identifying right-sized compute resources to reduce costs while maintaining performance. Compute Optimizer analyzes historical usage to recommend instance types and sizes that match workload needs. Other pillars address operational practices, security, and resilience rather than direct cost-rightsizing guidance.
Operational Excellence. is incorrect because while operational practices are important for running and monitoring systems, Compute Optimizer specifically targets cost-related resource recommendations rather than the operational processes pillar.
Security. is incorrect because the Security pillar focuses on protecting information, systems, and assets, not on recommending optimal compute resource sizing for cost savings.
Reliability. is incorrect because Reliability addresses recovery from failures and availability rather than fine-grained cost optimization of compute resources.

---

## 11. You are an architect designing a new application that will store large amounts of static content in the cloud. To ensure compliance with the AWS Well-Architected Framework, you plan to utilize Amazon S3 for storage due to its high availability and durability. Which pillar of the AWS Well-Architected Framework is most directly addressed when focusing on the reliability and availability of data stored in Amazon S3?

- Reliability - Ensuring a system's ability to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.
- Operational Excellence - The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.
- Cost Optimization - The ability to run systems to deliver business value at the lowest price point.
- Performance Efficiency - The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.

**Explanation:**
Reliability - Ensuring a system's ability to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues. is correct. Focusing on S3's high durability, availability, and data recovery characteristics aligns directly with the Reliability pillar, which covers the system's ability to withstand and recover from failures. S3's replication, versioning, and lifecycle features contribute to durable, reliable storage. Other pillars address operational processes, cost, and efficiency rather than core availability and recoverability.
Operational Excellence - The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures. is incorrect because Operational Excellence centers on processes and operations rather than storage durability and recoverability.
Cost Optimization - The ability to run systems to deliver business value at the lowest price point. is incorrect because while cost is important, the question emphasizes availability and reliability, which are not the primary focus of cost optimization.
Performance Efficiency - The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve. is incorrect because Performance Efficiency focuses on efficient use of resources and selecting the right resource types, not directly on durability and recoverability.

---

## 12. Your organization is focused on improving its cloud infrastructure based on AWS's Well-Architected Framework. While examining the pillars of the framework, you realize one of them directly relates to the AWS Cost Explorer tool. Which pillar of the Well-Architected Framework is best aligned with the functionality of AWS Cost Explorer, which enables monitoring and managing AWS costs and usage over time?

- Cost Optimization.
- Reliability.
- Operational Excellence.
- Performance Efficiency.

**Explanation:**
Cost Optimization. is correct. The Cost Optimization pillar is directly concerned with understanding and controlling where money is spent, and AWS Cost Explorer provides the reporting and analytics needed to monitor usage and cost trends over time to make informed optimization decisions. Cost Explorer helps create budgets, identify cost drivers, and evaluate the impact of pricing models and reserved capacity. Other pillars focus on availability, operations, and performance rather than direct cost analytics.
Reliability. is incorrect because Reliability focuses on resilience and recovery rather than cost monitoring.
Operational Excellence. is incorrect because Operational Excellence centers on processes and procedures to run systems effectively, not specifically on cost analytics and visualization.
Performance Efficiency. is incorrect because Performance Efficiency addresses efficient use of compute and architecture choices, not the monitoring and management of cost trends.

---

## 13. Your company has decided to migrate several applications to AWS in order to take advantage of the cloud's scalability and cost savings. The Chief Technology Officer wants to ensure that the migration process is managed and tracked in a central place to simplify the process and ensure that all their migration efforts are progressing as planned. Which AWS service should the company use to orchestrate and monitor the progress of their application migrations?

- Amazon CloudWatch.
- AWS Config.
- AWS Elastic Beanstalk.
- AWS Migration Hub.

**Explanation:**
AWS Migration Hub. is correct. AWS Migration Hub provides a central location to track the progress of application migrations across multiple AWS and partner migration tools, making it easier to orchestrate and monitor migration tasks and status. It aggregates tracking data and helps map dependencies and migration milestones. CloudWatch focuses on monitoring metrics and logs, AWS Config tracks resource configuration, and Elastic Beanstalk manages application deployment but does not provide centralized migration tracking.
Amazon CloudWatch. is incorrect because CloudWatch is primarily for monitoring metrics, logs, and alarms rather than centrally tracking migration progress across tools.
AWS Config. is incorrect because AWS Config provides resource inventory and configuration history for compliance and auditing, not migration orchestration or centralized migration progress tracking.
AWS Elastic Beanstalk. is incorrect because Elastic Beanstalk is a platform for deploying and managing applications, not a centralized migration tracking and orchestration service.

---

## 14. A multinational enterprise is planning to migrate a significant portion of their on-premises data center to the AWS Cloud to leverage its scalability and cost-efficiency. The Chief Information Officer (CIO) is particularly interested in establishing a reliable, dedicated network connection between their on-premises data center and AWS to ensure consistent network performance as they transition their sensitive workloads. Which AWS service would best fit the CIO's requirements for a dedicated network connection?

- AWS Direct Connect.
- Amazon VPC Peering.
- Amazon Route 53.
- AWS VPN.

**Explanation:**
AWS Direct Connect. is correct. AWS Direct Connect provides a dedicated, private network connection between an on-premises data center and AWS, offering consistent network performance, lower latency, and reduced data transfer variability compared to internet-based connections. It is preferred for high-throughput, latency-sensitive, or compliance-bound workloads requiring stable connectivity. VPC Peering connects VPCs within AWS, Route 53 is DNS, and VPN uses the public internet unless combined with Direct Connect.
Amazon VPC Peering. is incorrect because VPC Peering enables network connectivity between VPCs but does not establish a dedicated link between on-premises infrastructure and AWS. It is used for VPC-to-VPC communication within AWS.
Amazon Route 53. is incorrect because Route 53 is a DNS and traffic-routing service and does not provide physical or dedicated network connectivity.
AWS VPN. is incorrect because AWS VPN provides encrypted tunnels over the public internet and while secure, does not guarantee the consistent performance or lower latency provided by a dedicated Direct Connect connection.

---

## 15. A medium-sized enterprise plans to adopt a hybrid cloud strategy, aiming to leverage AWS services while still maintaining their on-premises legacy systems. To ensure a secure and stable connection between their on-premises data center and the AWS Cloud, which service should they implement?

- AWS Virtual Private Network (AWS VPN).
- Amazon VPC Peering.
- AWS Direct Connect.
- Amazon CloudFront.

**Explanation:**
AWS Virtual Private Network (AWS VPN). is correct when the requirement is to establish an encrypted, secure connection over the internet quickly and with lower setup complexity, especially for medium-sized enterprises that may not require a dedicated link. VPN provides secure IPSec tunnels for hybrid connectivity and can be used as a primary or backup connection. Direct Connect offers a dedicated private connection but involves higher setup and cost, while VPC Peering and CloudFront do not provide on-premises encrypted tunnels.
Amazon VPC Peering. is incorrect because VPC Peering connects VPCs within AWS and does not provide connectivity between on-premises data centers and AWS.
AWS Direct Connect. is incorrect in this context if the primary need is a quick, secure internet-based VPN; Direct Connect provides a dedicated private connection and is appropriate when consistent low latency and high bandwidth are required, but it has higher complexity and cost.
Amazon CloudFront. is incorrect because CloudFront is a content delivery network for distributing content at edge locations and does not establish secure network tunnels between on-premises and AWS.

---

## 16. A company with a popular web application has reached its maximum capacity with on-premises servers during peak usage times, resulting in poor performance and user dissatisfaction. The CTO is considering migrating to AWS Cloud to leverage the AWS Cloud Adoption Framework (AWS CAF). How would adopting the AWS CAF most directly address their scalability issues and ensure improved performance during peak times?

- AWS CAF includes automatic data archiving services to free up storage space on current servers during peak times.
- AWS CAF aids in designing an elastic environment that automatically scales resources up or down based on demand, ensuring performance during peak loads.
- AWS CAF guarantees a fixed performance level unrelated to user traffic, making scalability a non-issue.
- AWS CAF provides hardware upgrades for on-premises servers to handle increased loads.

**Explanation:**
AWS CAF aids in designing an elastic environment that automatically scales resources up or down based on demand, ensuring performance during peak loads. is correct. AWS CAF provides a structured set of perspectives and guidance to align people, processes, and technology with cloud best practices, enabling architects to design scalable, resilient architectures. It emphasizes operational and platform capabilities that support elastic scaling patterns and automation to respond to varying load. This approach helps organizations move from fixed-capacity infrastructure to cloud-native elasticity and improved user experience.
AWS CAF includes automatic data archiving services to free up storage space on current servers during peak times. is incorrect because AWS CAF is a framework for organizational guidance rather than a service that performs data archiving. It does not perform operational actions like archiving; it helps define strategy and capabilities. Data archiving is handled by specific AWS services such as Amazon S3 Glacier, not the CAF framework.
AWS CAF guarantees a fixed performance level unrelated to user traffic, making scalability a non-issue. is incorrect because no framework guarantees fixed performance; performance depends on architecture and resource provisioning. CAF helps design for elasticity and resilience but outcomes depend on implemented solutions and operational practices. Guarantees of performance require appropriate service selection and capacity planning.
AWS CAF provides hardware upgrades for on-premises servers to handle increased loads. is incorrect because the framework does not provide physical hardware upgrades; it guides cloud adoption and operational transformation. Hardware procurement remains the responsibility of the customer when operating on-premises. Migrating to cloud reduces reliance on on-premises hardware by enabling dynamic provisioning.

---

## 17. Your company plans to migrate a large number of on-premise file shares to Amazon S3 to improve scalability and reduce costs. The total amount of data is in the tens of terabytes range and needs to be transferred within a limited time frame. You are evaluating AWS services that can help expedite the data transfer process. Which AWS service could be most effectively used to synchronize files directly from an on-premises storage system to AWS, while also providing a fast, online data transfer solution?

- AWS Snowball.
- Amazon RDS.
- AWS Storage Gateway.
- AWS DataSync.

**Explanation:**
AWS DataSync. is correct. AWS DataSync is a managed service designed to automate and accelerate online data transfers between on-premises storage and AWS, supporting large-scale, incremental, and scheduled transfers with built-in validation and performance tuning. It can transfer files to S3, EFS, or FSx while minimizing manual effort and ensuring data integrity. DataSync is suitable when the transfer window is limited and when network-based migration is preferred over offline appliance options.
AWS Snowball. is incorrect because Snowball is an offline data transfer appliance used for very large datasets when network transfer is impractical or too slow. It requires physical shipment of devices and is optimal for bulk migrations where online transfer time is prohibitive. Snowball is not the best choice when rapid, repeated, or incremental synchronization over the network is required.
Amazon RDS. is incorrect because RDS is a managed relational database service and does not provide file synchronization capabilities from on-premises file shares to S3. It is intended for databases rather than general file transfer or synchronization tasks. Database migration tasks use AWS DMS rather than RDS itself.
AWS Storage Gateway. is incorrect because Storage Gateway provides hybrid storage interfaces to AWS, including file gateway modes, but it is primarily for ongoing hybrid access patterns rather than high-performance bulk synchronization for migration windows. It can be used for hybrid workflows but DataSync is optimized for fast, large-scale migrations.

---

## 18. Your company has recently migrated its web application infrastructure to AWS to take advantage of cloud economics. They are considering using Amazon EC2 Auto Scaling to handle fluctuations in user traffic. How can the use of EC2 Auto Scaling contribute to cost savings for your company after moving to the cloud?

- EC2 Auto Scaling employs a fixed pricing model that is cheaper than on-demand instance pricing.
- EC2 Auto Scaling provides free unlimited storage, thereby reducing storage costs.
- EC2 Auto Scaling increases the number of instances at all times to ensure maximum redundancy and availability.
- EC2 Auto Scaling adjusts the number of EC2 instances based on demand, ensuring you only pay for the resources you need.

**Explanation:**
EC2 Auto Scaling adjusts the number of EC2 instances based on demand, ensuring you only pay for the resources you need. is correct. Auto Scaling dynamically adds or removes instances in response to defined policies, target tracking, or scheduled actions, aligning capacity with real-time demand. By scaling out during peaks and scaling in during low usage, Auto Scaling reduces idle capacity and associated costs. Proper configuration of scaling policies and metrics ensures cost-efficient operation without sacrificing performance.
EC2 Auto Scaling employs a fixed pricing model that is cheaper than on-demand instance pricing. is incorrect because Auto Scaling is a management capability and does not itself change instance pricing; underlying instance costs remain based on chosen purchasing options. Cost savings come from rightsizing and automated scaling rather than a different pricing model.
EC2 Auto Scaling provides free unlimited storage, thereby reducing storage costs. is incorrect because Auto Scaling manages compute capacity and does not provide storage services or eliminate storage costs. Storage remains the responsibility of services like EBS, S3, or instance store depending on architecture.
EC2 Auto Scaling increases the number of instances at all times to ensure maximum redundancy and availability. is incorrect because Auto Scaling adjusts capacity according to demand and policies rather than keeping instances at a maximum count, which would be inefficient and costly. Its goal is to balance availability and cost by scaling appropriately.

---

## 19. Your company has been running a data center with its own physical servers for the last 10 years. Due to increasing hardware failures and high operational costs, the management is considering migrating to the AWS cloud. In preparing for this shift, they want to compare the total cost of ownership (TCO) between maintaining the on-premises infrastructure and moving to AWS. Which of the following would best help the company understand the cost difference?

- Using the AWS TCO Calculator to estimate the cost savings over a period of time when moving to AWS.
- Only considering the upfront costs of purchasing new physical servers versus the on-demand prices of AWS instances.
- Manually adding up the costs of services on AWS pricing pages and comparing them with current on-premises costs.
- Surveying employees on which services they believe would be more expensive on AWS.

**Explanation:**
Using the AWS TCO Calculator to estimate the cost savings over a period of time when moving to AWS. is correct. The AWS TCO Calculator helps compare infrastructure, labor, and operational costs between on-premises environments and AWS by modelling resource usage and financial variables over time. It provides structured estimates of potential savings and highlights cost components such as power, cooling, facilities, and staffing that are reduced or eliminated in the cloud. This tool offers a more comprehensive and repeatable analysis than ad hoc manual calculations.
Only considering the upfront costs of purchasing new physical servers versus the on-demand prices of AWS instances. is incorrect because TCO comparisons must include ongoing operational, staffing, and facility costs rather than solely upfront capital expenditures. Ignoring operational overhead and hidden costs can lead to misleading conclusions. A holistic view is required for accurate decision making.
Manually adding up the costs of services on AWS pricing pages and comparing them with current on-premises costs. is incorrect because manual summation is error-prone and may miss indirect costs or utilization assumptions; it lacks the modelling and sensitivity analysis provided by purpose-built TCO tools. While possible, it is less reliable and more time-consuming.
Surveying employees on which services they believe would be more expensive on AWS. is incorrect because employee opinions do not provide quantitative financial analysis and are subjective; decision makers need empirical cost models and validated assumptions. Surveys can supplement qualitative factors but not replace structured cost comparison tools.

---

## 20. A company is planning to modernize its legacy applications by containerizing them for better scalability and agility. The company has a strong reliance on open-source Kubernetes and wants to ensure their infrastructure is efficiently managed. The Chief Technology Officer (CTO) is particularly concerned about the cloud economics aspect, specifically the reduction of the operational overhead for managing Kubernetes clusters. Which AWS managed service should the company use to meet the CTO's requirements?

- Amazon Elastic Container Service (ECS).
- Amazon Elastic Kubernetes Service (EKS).
- Amazon RDS.
- Amazon DynamoDB.

**Explanation:**
Amazon Elastic Kubernetes Service (EKS). is correct. EKS is a managed Kubernetes service that abstracts control-plane management and integrates with AWS services, reducing the operational burden of running Kubernetes while preserving compatibility with upstream Kubernetes APIs and tooling. It enables teams to use standard Kubernetes constructs and third-party tooling while offloading scalability, patching, and availability responsibilities for the control plane to AWS. For organizations committed to Kubernetes, EKS minimizes cluster management overhead and supports cost optimization through managed operations.
Amazon Elastic Container Service (ECS). is incorrect because ECS is a native AWS container orchestration service that simplifies container management but is not Kubernetes-based; it requires adopting ECS-specific APIs and tooling. ECS can reduce operational overhead but does not align with a strong reliance on open-source Kubernetes.
Amazon RDS. is incorrect because RDS is a managed relational database service, not a container orchestration or Kubernetes management solution. It does not address container lifecycle or cluster operations.
Amazon DynamoDB. is incorrect because DynamoDB is a managed NoSQL database service and unrelated to container orchestration or Kubernetes cluster management. It does not reduce Kubernetes operational overhead.

---

## 21. Alice is a financial analyst at a growing startup that has recently migrated its applications to the AWS Cloud. She is tasked with optimizing the company's cloud expenditure while ensuring sufficient resources for their operations. During her research, Alice learns about the concept of economies of scale and how it can help reduce overall costs. She also realizes the importance of tracking and managing these costs. Hence, she decides to use AWS Budgets to monitor the company's spending. Which of the following are benefits Alice can achieve by leveraging AWS's economies of scale and using AWS Budgets?

- Receiving alerts when usage exceeds defined thresholds.
- Access to discounted pricing through reserved instances.
- Setting custom cost and usage budgets to avoid overspending.
- Automatic adjustment of instance types based on usage patterns.
- Free technical support for budget management.

**Explanation:**
Receiving alerts when usage exceeds defined thresholds. is correct. AWS Budgets allows creation of cost and usage budgets with alerts that notify stakeholders when thresholds are met or exceeded, enabling proactive cost control. Budget alerts help teams respond quickly to unexpected spending and enforce financial guardrails. This feature supports disciplined cost management practices regardless of scale.
Access to discounted pricing through reserved instances. is correct. Economies of scale include procurement options like Reserved Instances and Savings Plans that provide discounted pricing in exchange for commitment, which reduces effective unit costs as usage grows. These purchasing options are part of a cost optimization strategy to capture predictable workloads at lower rates.
Setting custom cost and usage budgets to avoid overspending. is correct. AWS Budgets enables tailored budgets by service, tag, linked account, or usage type, which helps teams control spending and align costs with business objectives. Custom budgets combined with alerts promote accountability and cost-conscious behavior.
Automatic adjustment of instance types based on usage patterns. is incorrect because AWS Budgets is a financial governance tool and does not perform automated resource adjustments; automated rightsizing requires operational tools like Compute Optimizer combined with automation workflows. Budgeting informs decisions but does not change infrastructure automatically.
Free technical support for budget management. is incorrect because AWS Budgets itself does not include free hands-on technical support beyond standard AWS support tiers; support levels depend on the account’s support plan and may incur costs for higher-tier assistance. Budgeting tools provide information and alerts but not guaranteed free advisory services.

---

## 22. John is a small business owner who recently started using AWS to host his e-commerce website. He's particularly interested in understanding how he can save costs and benefit from the economies of scale that AWS offers. His friend suggested he explore the AWS Free Tier to minimize initial costs. Which of the following statements correctly describe how John can benefit from the AWS Free Tier and AWS's economies of scale?

- AWS Free Tier allows John to use unlimited resources for free indefinitely.
- John can use the AWS Free Tier to try out services without incurring initial costs.
- AWS's scale allows John to benefit from reduced pricing compared to on-premises solutions.
- AWS's economies of scale only benefit large enterprises, not small businesses like John's.
- John can scale his resources in AWS up or down based on his business needs, ensuring he only pays for what he uses.

**Explanation:**
John can use the AWS Free Tier to try out services without incurring initial costs. is correct. The Free Tier provides time-limited or usage-limited offerings that help new users experiment with AWS services at no or low cost, enabling proof-of-concept and development without immediate expense. It is intended to reduce barriers to entry for startups and small businesses during initial adoption. Users must monitor usage to avoid charges once free limits are exceeded.
AWS Free Tier allows John to use unlimited resources for free indefinitely. is incorrect because the Free Tier is constrained by time windows or usage quotas and does not provide unlimited, permanent free usage. Awareness of limits and expiration of free offers is necessary to avoid unexpected charges.
AWS's scale allows John to benefit from reduced pricing compared to on-premises solutions. is correct. AWS’s massive infrastructure and aggregated demand enable cost efficiencies and pricing models that can be lower than equivalent on-premises costs, especially when considering operational overhead and economies of scale. Small businesses can access enterprise-grade infrastructure without large capital expenditure.
AWS's economies of scale only benefit large enterprises, not small businesses like John's. is incorrect because economies of scale and flexible pricing models such as pay-as-you-go and reserved capacity can benefit organizations of many sizes, including small businesses. The cloud model democratizes access to scale economies.
John can scale his resources in AWS up or down based on his business needs, ensuring he only pays for what he uses. is correct. Elastic scaling and on-demand provisioning let John adjust capacity to actual demand, minimizing idle resources and aligning costs with usage patterns. This pay-for-use model is central to cloud cost efficiency.

---

## 23. John is a systems architect working for a global retail company. The company recently decided to migrate their e-commerce platform to AWS in order to enhance the scalability and reliability of their services. John's primary concerns include ensuring high availability, elasticity, and agility for their applications. Additionally, he wants to take advantage of the AWS Global Infrastructure to serve customers around the world with low latency. Given these requirements, which of the following AWS services or features should John utilize?

- Enabling CloudFront for caching static content.
- Deploying applications across multiple AWS Regions.
- Using Amazon Glacier for data archiving and long-term backup.
- Using Amazon Route 53 for DNS management and global traffic routing.
- Using Auto Scaling to automatically adjust resource capacity.

**Explanation:**
Enabling CloudFront for caching static content. is correct. Amazon CloudFront is a global content delivery network that caches static and dynamic content at edge locations, reducing latency for users worldwide and offloading origin servers. It improves perceived performance and scales automatically with traffic. CloudFront integrates with other services for security and origin failover.
Deploying applications across multiple AWS Regions. is correct. Multi-region deployment reduces latency by locating resources closer to end users and enhances availability by providing geographic redundancy. It supports disaster recovery and compliance with regional data residency requirements. Managing multi-region deployments requires careful design for data replication and consistency.
Using Amazon Glacier for data archiving and long-term backup. is correct in the context of archival needs but not as a primary means to improve global availability and low-latency user experiences; Glacier is optimized for low-cost, long-term retention with longer retrieval times. It complements active storage for compliance and backup scenarios rather than improving real-time user latency.
Using Amazon Route 53 for DNS management and global traffic routing. is correct. Route 53 provides DNS-based routing policies, health checks, and latency-based routing to direct users to the optimal endpoints, improving global performance and resilience. It works with CloudFront and multi-region deployments to route traffic efficiently.
Using Auto Scaling to automatically adjust resource capacity. is correct. Auto Scaling maintains application responsiveness by scaling compute resources based on demand, supporting elasticity and efficient cost management. It integrates with load balancers and monitoring to ensure capacity matches traffic patterns.

---

## 24. Alex is an IT manager at a mid-sized company that operates an on-premises data center. With the company's growth, the IT infrastructure is becoming more costly and complex to manage. Alex is evaluating the benefits of migrating to AWS and wants to understand the cost implications. Which of the following are benefits that Alex can use to compare on-premises costs to cloud costs using the AWS Simple Monthly Calculator?

- Automated cost optimization recommendations.
- Integration with AWS Cost Explorer for detailed analytics.
- Ability to estimate costs for specific AWS services.
- Consideration of different pricing models like Reserved Instances and Spot Instances.
- Transparency in pricing with detailed breakdown.

**Explanation:**
Ability to estimate costs for specific AWS services. is correct. The Simple Monthly Calculator helps estimate monthly costs for selected AWS services by allowing users to input usage patterns and service configurations to produce an approximate monthly bill. It provides a straightforward way to model service costs before migration. It is useful for preliminary budgeting and scenario comparison.
Consideration of different pricing models like Reserved Instances and Spot Instances. is correct. The calculator and related AWS cost tools let you model different purchasing options to compare potential savings from reserved capacity or spot pricing versus on-demand usage. This capability helps in planning cost-effective architectures.
Transparency in pricing with detailed breakdown. is correct. The tool provides itemized cost components that help identify where spend is occurring, enabling more transparent cost assessments and clearer communication with stakeholders. This detail supports migration planning and TCO analysis.
Automated cost optimization recommendations. is incorrect because the Simple Monthly Calculator is a modelling tool and does not actively analyze live usage to produce automated optimization suggestions; services like Trusted Advisor or Compute Optimizer provide operational recommendations. The calculator is a planning aid rather than an optimization engine.
Integration with AWS Cost Explorer for detailed analytics. is incorrect because the Simple Monthly Calculator does not integrate with Cost Explorer; Cost Explorer analyzes historical usage and provides analytics on actual bills, whereas the calculator is used for prospective estimates.

---

## 25. You are the IT manager at a startup that is utilizing AWS for its core operations. You understand the importance of security and regularly conduct assessments to ensure that your AWS resources are protected from vulnerabilities. You've decided to use AWS Inspector to automate the security assessment of your applications deployed on EC2 instances. However, you want to clarify which aspect of this process falls under your responsibility according to the AWS shared responsibility model. What is your responsibility when using AWS Inspector?

- Maintaining the underlying software of the AWS Inspector service.
- Ensuring the physical security of the data centers where AWS Inspector is run.
- Updating the AWS global infrastructure that AWS Inspector is built upon.
- Configuring and managing the assessments run by AWS Inspector for your EC2 instances.

**Explanation:**
Configuring and managing the assessments run by AWS Inspector for your EC2 instances. is correct. Customers are responsible for configuring security assessment tools, choosing rulesets, scheduling scans, and acting on findings to remediate vulnerabilities in their workloads. AWS Inspector helps identify issues, but the customer must interpret results and implement fixes or mitigations. AWS manages the service infrastructure and its underlying availability, not the specific assessment configuration for customer resources.
Maintaining the underlying software of the AWS Inspector service. is incorrect because AWS is responsible for the operation and maintenance of the Inspector service itself, including its platform updates and availability. Customers do not manage the managed service software.
Ensuring the physical security of the data centers where AWS Inspector is run. is incorrect because AWS is responsible for physical security of its data centers under the shared responsibility model. Customers are responsible for security in the cloud, not of the cloud.
Updating the AWS global infrastructure that AWS Inspector is built upon. is incorrect because AWS handles updates and maintenance of the global infrastructure, networking, and control plane components. Customers focus on their resource configuration and protection.

---

## 26. A company using AWS services wants to ensure that its organizational accounts adhere to a consistent set of security policies. They plan on utilizing AWS Organizations to manage multiple AWS accounts. As part of the shared responsibility model, which of the following tasks is the customer responsible for when they employ AWS Organizations to enhance their security posture?

- Ensuring the physical security of data centers where their data is stored.
- Updating the underlying hardware of the servers within AWS data centers.
- Patching and updating the hypervisor software that runs the virtual servers.
- Implementing service control policies (SCPs) to restrict users' permissions across all accounts in the organization.

**Explanation:**
Implementing service control policies (SCPs) to restrict users' permissions across all accounts in the organization. is correct. Customers using AWS Organizations are responsible for defining and applying SCPs, IAM policies, and governance controls to enforce consistent permissions and compliance across member accounts. These policies are configured and managed by the customer to meet organizational requirements. AWS provides the Organizations service and underlying infrastructure but customers control policy definitions and account-level access boundaries.
Ensuring the physical security of data centers where their data is stored. is incorrect because AWS is responsible for physical security of its data centers as part of the cloud provider’s obligations. Customers do not manage facility security under the shared responsibility model.
Updating the underlying hardware of the servers within AWS data centers. is incorrect because AWS manages hardware lifecycle, procurement, and maintenance. Customers operate at the resource and configuration level rather than the physical hardware level.
Patching and updating the hypervisor software that runs the virtual servers. is incorrect because hypervisor patching and host management are AWS responsibilities; customers are responsible for patching guest operating systems and applications they control.

---

## 27. A financial services company is required to comply with a regulatory standard that mandates regular audits of their cloud infrastructure and usage. They want to simplify the process of gathering evidence to assess their AWS environment against this standard. Which AWS service is designed to help the company continuously audit their AWS usage to ensure that it complies with their internal policies and regulatory requirements?

- AWS Trusted Advisor.
- Amazon CloudWatch.
- AWS Config.
- AWS Audit Manager.

**Explanation:**
AWS Audit Manager. is correct. AWS Audit Manager helps automate evidence collection, map controls to frameworks, and generate audit-ready reports to simplify compliance assessments and continuous auditing processes. It reduces manual effort by continuously collecting and organizing relevant evidence from AWS services. While other services provide monitoring or configuration history, Audit Manager is focused on streamlining audit workflows and producing compliance artifacts.
AWS Trusted Advisor. is incorrect because Trusted Advisor provides best-practice checks and recommendations across cost, performance, security, and fault tolerance but is not focused on automating audit evidence collection and compliance reporting. Trusted Advisor assists optimization and remediation rather than structured auditing.
Amazon CloudWatch. is incorrect because CloudWatch collects metrics, logs, and alarms for operational monitoring but does not directly automate audit evidence collection or map findings to regulatory frameworks. It supports observability and incident detection rather than audit reporting.
AWS Config. is incorrect because AWS Config records configuration changes and provides compliance rules and resource history, which are valuable for audits, but Audit Manager is the specialized service that aggregates evidence and maps it to frameworks for audit-ready reporting.

---

## 28. Your company is preparing for an IT audit to ensure compliance with industry regulations. As an AWS Cloud Practitioner, you have been tasked to provide evidence of the current configuration and compliance status of the AWS resources in use. Which AWS tool would you primarily use to collect the necessary information?

- AWS Security Hub.
- AWS Artifact.
- AWS Trusted Advisor.
- AWS Config.

**Explanation:**
AWS Config. is correct. AWS Config provides a detailed inventory of AWS resources, records configuration changes over time, and evaluates resource compliance against custom or managed rules, making it the primary tool for gathering configuration evidence during audits. It offers historical views and change tracking that auditors commonly require. While Security Hub aggregates findings and Artifact provides compliance reports, Config supplies the granular configuration data and compliance checks needed for evidence.
AWS Security Hub. is incorrect because Security Hub aggregates security findings and compliance status from multiple services but does not itself provide the full historical configuration inventory and change tracking that AWS Config delivers. Security Hub complements Config by centralizing security posture.
AWS Artifact. is incorrect because Artifact provides AWS’s compliance reports and certifications for customer review, not the live configuration and resource-level evidence from the customer account needed for internal audits. Artifact is useful for regulator-facing documentation but not for resource configuration snapshots.
AWS Trusted Advisor. is incorrect because Trusted Advisor offers optimization checks and best-practice recommendations, but it does not replace Config's continuous configuration monitoring and compliance evaluation capabilities needed for audit evidence.

---

## 29. A company is looking to implement a data warehousing solution on AWS using Amazon Redshift. The dataset includes sensitive personal information that needs to be protected both at rest and in transit. A security officer has been tasked to ensure that the data in the Redshift clusters is encrypted according to compliance requirements. Which of the following options can they choose to achieve encryption at rest with Amazon Redshift?

- Encrypt data at the application level before loading it into Redshift.
- Enable SSL/TLS encryption on the Redshift cluster endpoint for encryption at rest.
- Use Amazon S3 server-side encryption for Redshift data.
- Enable encryption for the Redshift cluster and manage keys using AWS Key Management Service (KMS).

**Explanation:**
Enable encryption for the Redshift cluster and manage keys using AWS Key Management Service (KMS). is correct. Enabling encryption on the Redshift cluster allows data at rest to be encrypted using AWS KMS-managed customer master keys or AWS-managed keys, protecting stored data and snapshots. KMS integration centralizes key management, access control, and auditability for encryption operations. While application-level encryption can supplement cluster encryption, Redshift’s native encryption plus KMS is the standard approach for in-cluster encryption at rest.
Encrypt data at the application level before loading it into Redshift. is correct as an additional measure. Application-level encryption places encryption responsibility on the client, ensuring data is encrypted before transmission and storage, which can provide defense-in-depth and meet specific compliance needs. It requires key management and may complicate query processing since Redshift cannot operate on encrypted fields without decryption.
Enable SSL/TLS encryption on the Redshift cluster endpoint for encryption at rest. is incorrect because SSL/TLS protects data in transit between clients and the cluster, not data at rest on storage. TLS is essential for transit security but does not encrypt on-disk storage or snapshots.
Use Amazon S3 server-side encryption for Redshift data. is incorrect because while Redshift can unload/load data to S3 and S3 supports server-side encryption, S3 encryption alone does not encrypt the data stored within the Redshift cluster’s storage; cluster-level encryption must be configured for data at rest inside Redshift.

---

## 30. Your company, GlobalTech Solutions, has recently transitioned to AWS Cloud services, and it's expanding its footprint in various AWS regions to serve a diverse international customer base. As the lead cloud practitioner, you are required to ensure that the company abides by regional compliance requirements and maintains optimal control over its AWS accounts. You have implemented AWS Organizations to manage multiple AWS accounts. How does AWS Organizations support compliance requirements that vary among AWS services?

- AWS Organizations automatically applies the strictest compliance standards to your accounts globally.
- AWS Organizations allows you to apply service control policies (SCPs) to enforce compliance with regulatory standards across all AWS accounts.
- AWS Organizations can provide a shared compliance report for all services across all the AWS accounts.
- AWS Organizations enables automatic encryption of data across all accounts to meet compliance requirements.

**Explanation:**
AWS Organizations allows you to apply service control policies (SCPs) to enforce compliance with regulatory standards across all AWS accounts. is correct. SCPs are account-level permission guardrails applied through Organizations that restrict which services and actions are allowed, helping enforce organizational compliance and governance across member accounts. Organizations provides consolidated billing and centralized policy management, enabling teams to implement consistent controls and reduce drift. While Organizations aids governance, customers still must design controls and monitor service-specific compliance capabilities.
AWS Organizations automatically applies the strictest compliance standards to your accounts globally. is incorrect because Organizations does not autonomously enforce compliance standards; administrators must define and apply policies, SCPs, and controls to meet regulatory requirements. Automation requires explicit configuration.
AWS Organizations can provide a shared compliance report for all services across all the AWS accounts. is incorrect because Organizations itself does not generate compliance reports; services like AWS Audit Manager, Config, and Security Hub provide reporting and evidence aggregation. Organizations enables centralized management but not direct reporting.
AWS Organizations enables automatic encryption of data across all accounts to meet compliance requirements. is incorrect because encryption settings are service-specific and must be configured per account and service; Organizations does not automatically enable encryption globally. Key management and encryption configuration remain operational responsibilities.

---

## 31. A company has recently migrated their services to AWS and is in the process of setting up their security infrastructure. The security officer wants to ensure that they use the best authentication practices for their IAM users. They have decided to enforce a policy where each IAM user needs to verify their identity using more than just a password when logging into the AWS Management Console. Which AWS feature should they implement to satisfy this requirement?

- AWS Access Keys.
- IAM Identity Center (formerly AWS Single Sign-On).
- Multi-Factor Authentication (MFA).
- Cross-account IAM roles.

**Explanation:**
Multi-Factor Authentication (MFA). is correct. MFA requires users to provide an additional authentication factor, such as a time-based one-time password or hardware token, on top of their password to access the console. Enforcing MFA significantly reduces the risk of compromised credentials being used to access accounts because possession of the second factor is required. MFA can be applied to the root user and individual IAM users and integrated with federation solutions for broader coverage.
AWS Access Keys. is incorrect. Access keys are long-lived credentials used for programmatic access to AWS APIs rather than interactive console authentication. They must be managed carefully and rotated periodically to reduce risk. Access keys do not provide a second authentication factor for console login and therefore do not satisfy the MFA requirement.
IAM Identity Center (formerly AWS Single Sign-On). is incorrect for the specific MFA enforcement question, although it supports centralized authentication and can enforce MFA as part of its configuration. IAM Identity Center provides single sign-on and can integrate with external identity providers, offering policy-based access and optional MFA enforcement. On its own, IAM Identity Center is an identity broker rather than the MFA mechanism; MFA must be enabled within the identity provider or the Identity Center configuration.
Cross-account IAM roles. is incorrect because cross-account roles enable temporary delegated access between accounts using role assumption rather than adding a second factor to a console login. Roles help manage access boundaries and reduce the need for long-lived credentials but do not inherently enforce multi-factor authentication unless combined with policy conditions. Role-based access should be complemented by MFA on the principal performing the assumption for stronger protection.

---

## 32. As the security administrator at a company that is deploying resources in AWS, you are tasked with enforcing strong security practices. One of your responsibilities is to secure the AWS account's root user, which has the highest level of access. To ensure the root user is protected, you decide to implement an IAM password policy. What is the most effective method to include in this password policy to ensure root user protection?

- Require a minimum password length and the use of both upper and lower case letters, numbers, and special characters.
- Limit the password length to six characters for easier memorization, reducing the likelihood of the root user writing down their password.
- Allow users to change their passwords after a preset expiration date only, without requiring any level of complexity.
- Use only numeric characters in the password to streamline the password recovery process.

**Explanation:**
Require a minimum password length and the use of both upper and lower case letters, numbers, and special characters. is correct. Enforcing complexity and length increases the effort required to brute-force or guess the password, reducing the likelihood of unauthorized access. Strong password policies should be combined with MFA, restricted use of the root account, and secure storage of credentials to minimize exposure. Regular review and rotation of high-privilege credentials further improve account hygiene and incident readiness.
Limit the password length to six characters for easier memorization, reducing the likelihood of the root user writing down their password. is incorrect. Short passwords dramatically reduce entropy and make brute-force attacks far more feasible. Ease of memorization should not come at the cost of security for high-privilege accounts. Security best practices favor longer, complex passwords and complementary controls such as MFA and limited root usage.
Allow users to change their passwords after a preset expiration date only, without requiring any level of complexity. is incorrect because forcing periodic changes without complexity requirements still permits weak passwords to persist and may encourage insecure behaviors like predictable rotations. Password expiration policies should be paired with complexity, length, and MFA to be effective. Modern guidance often emphasizes strong, unique passwords and MFA over frequent forced rotations unless compromise is suspected.
Use only numeric characters in the password to streamline the password recovery process. is incorrect because numeric-only passwords drastically reduce complexity and are trivial to guess or brute-force. Streamlining recovery must not weaken authentication; instead, use secure recovery mechanisms and strong password rules. Numeric-only passwords are incompatible with protecting the root account or other high-privilege identities.

---

## 33. A company is expanding and needs to allow its identity management system, which manages users in an on-premises Active Directory, to grant access to AWS services without creating new AWS user accounts. To minimize the access management overhead and facilitate single sign-on (SSO), which AWS identity management feature should be used to securely delegate permissions to AWS resources in this scenario?

- IAM Users.
- TAM Group Policies.
- IAM Access Keys.
- IAM Roles with SAML 2.0 federation.

**Explanation:**
IAM Roles with SAML 2.0 federation. is correct. SAML 2.0 federation allows on-premises identity providers to exchange authentication assertions with AWS so users can assume IAM roles and receive temporary credentials without creating individual IAM users in AWS. This approach reduces administrative overhead, centralizes identity management, and supports single sign-on workflows aligned with corporate identity directories. Roles mapped to SAML assertions provide fine-grained permission control and session limits for governance.
IAM Users. is incorrect because creating IAM users for every on-premises identity duplicates identity management and increases administrative effort. IAM users are suitable for individual identities native to AWS but are not the recommended pattern when federating existing enterprise directories. Federation avoids the management burden of synchronizing large user populations.
TAM Group Policies. is incorrect because TAM refers to Technical Account Manager and not to a policy construct; group-level management is done through IAM groups or external identity providers, not TAM. There is no AWS feature formally called TAM Group Policies for delegating access. The correct approach involves roles, federation, or IAM Identity Center for centralized access control.
IAM Access Keys. is incorrect because access keys are long-lived programmatic credentials and do not enable single sign-on from an external identity provider. Access keys also introduce credential management and rotation responsibilities and are unsuitable for delegating on-premises AD authentication without federation.

---

## 34. A company has recently migrated its web application to AWS. To enhance their security, the company wants to ensure all their AWS accounts and workloads are continuously monitored for malicious activity and unauthorized behavior. They are considering using Amazon GuardDuty for this purpose. However, the security team is also interested in exploring third-party security solutions for additional features. Which of the following statements is true regarding this scenario?

- Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads, and third-party security products can be found in the AWS Marketplace to complement Amazon GuardDuty with additional features.
- Amazon GuardDuty is primarily an antivirus software and all third-party security products are automatically integrated with it upon installation.
- Third-party security products are not available in the AWS Marketplace, and customers can only use Amazon GuardDuty for security monitoring.
- AWS accounts cannot use both Amazon GuardDuty and third-party security solutions simultaneously; they must choose one or the other.

**Explanation:**
Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads, and third-party security products can be found in the AWS Marketplace to complement Amazon GuardDuty with additional features. is correct. GuardDuty analyzes VPC Flow Logs, CloudTrail events, and DNS logs to identify suspicious activity and provides actionable findings. The AWS Marketplace hosts numerous third-party security products that can augment detection, response, forensics, and compliance capabilities. Customers often run GuardDuty alongside third-party tools to gain broader coverage and specialized functionality.
Amazon GuardDuty is primarily an antivirus software and all third-party security products are automatically integrated with it upon installation. is incorrect because GuardDuty is a threat detection and monitoring service, not a host-based antivirus solution, and third-party integrations are not automatically installed or integrated without explicit configuration. GuardDuty's findings can be sent to other tools, but integration requires configuration or partner connectors.
Third-party security products are not available in the AWS Marketplace, and customers can only use Amazon GuardDuty for security monitoring. is incorrect because the AWS Marketplace offers many third-party security solutions across detection, prevention, and incident response domains that customers can deploy alongside native AWS services. Marketplace offerings provide complementary capabilities and different specialization levels.
AWS accounts cannot use both Amazon GuardDuty and third-party security solutions simultaneously; they must choose one or the other. is incorrect because customers commonly run multiple tools concurrently to strengthen security posture, combine insights, and meet specific regulatory or operational requirements. Using multiple layers increases detection fidelity and response options.

---

## 35. An online e-commerce company is looking to enhance their data protection capability on AWS. They store a significant amount of sensitive customer data, including personal identifiers and credit card information. The company wants to ensure that they are aware of where this sensitive data is stored across their S3 buckets and want to be alerted to any unintended access or anomalous data movements. They are considering enhancing their security posture by employing a third-party security product from the AWS Marketplace. Which AWS service should the company consider to fulfill this requirement?

- AWS WAF.
- AWS Shield.
- AWS Identity and Access Management (IAM).
- Amazon Macie.

**Explanation:**
Amazon Macie. is correct. Macie is a data security service that uses machine learning and pattern matching to discover, classify, and protect sensitive data stored in Amazon S3, including personally identifiable information and financial data, and it can generate alerts on anomalous access patterns. It helps automate data discovery, provide inventory and classification, and create findings that drive remediation workflows. Macie integrates with AWS Security Hub and SIEM systems so findings can be correlated with other security telemetry.
AWS WAF. is incorrect because WAF is a web application firewall used to protect web applications from common exploits and injection attacks; it does not perform data discovery or classification in S3. WAF focuses on request-level protections at the edge and application layer rather than storage-level data visibility.
AWS Shield. is incorrect because Shield protects against distributed denial-of-service (DDoS) attacks and provides network-layer protections; it does not analyze S3 content or detect sensitive data exposure. Shield enhances availability under attack, not data classification or anomalous access detection.
AWS Identity and Access Management (IAM). is incorrect because IAM controls authentication and authorization but does not classify data or detect anomalous data movement within S3. IAM policies are essential for access control but must be complemented by data discovery and monitoring services for data protection use cases.

---

## 36. John is a newly hired cloud architect at XYZ Company. He's working on setting up their AWS environment with a focus on security and compliance. As part of this setup, he needs to understand the AWS shared responsibility model and determine which responsibilities lie with AWS and which belong to the customer. John is also configuring AWS Config to monitor their AWS resources and ensure compliance with company standards. Given this scenario, which of the following tasks are the responsibility of John as the customer under the AWS shared responsibility model?

- Managing data encryption at rest within S3 buckets.
- Patching and maintaining the underlying hardware of the data centers.
- Implementing identity and access management policies through IAM.
- Ensuring compliance with company policies by configuring AWS Config rules.
- Ensuring the physical security of data center facilities.

**Explanation:**
Managing data encryption at rest within S3 buckets. is correct. Customers are responsible for configuring encryption for their objects and managing encryption keys or KMS policies as appropriate to meet security and compliance requirements. This includes selecting server-side encryption options, client-side encryption, or customer-managed keys and validating access controls. AWS provides key management services and infrastructure, but customers control data protection settings for their own resources.
Patching and maintaining the underlying hardware of the data centers. is incorrect because AWS is responsible for the physical infrastructure, hardware lifecycle, and host patching under the shared responsibility model. Customers operate at the guest OS, application, and configuration level for resources they control while AWS manages the cloud infrastructure.
Implementing identity and access management policies through IAM. is correct. Customers must design and enforce IAM policies, roles, and permission boundaries to control who and what can access their resources. IAM configuration, least-privilege enforcement, credential rotation, and MFA enforcement are customer responsibilities to protect access.
Ensuring compliance with company policies by configuring AWS Config rules. is correct. Customers configure AWS Config to evaluate resource configurations against internal policies and regulatory requirements, remediate noncompliance, and collect evidence for audits. AWS provides the service, but customers define rules, remediation actions, and monitoring criteria aligned with their governance needs.
Ensuring the physical security of data center facilities. is incorrect because physical security of AWS data centers is managed by AWS as part of the provider's responsibilities; customers do not control or implement data center physical protections in the AWS model.

---

## 37. Alice is a security compliance officer at a company that is planning to use AWS services to manage their upcoming data-heavy project. She needs to understand the documentation and security compliance details that AWS provides to its customers. Alice has been tasked with downloading AWS compliance reports and certifications. Which of the following AWS services or tools should Alice use for her task?

- AWS Compliance Center.
- AWS Trusted Advisor.
- AWS CloudTrail.
- AWS Config.
- AWS Artifact.

**Explanation:**
AWS Artifact. is correct. Artifact is the central resource for on-demand access to AWS security and compliance reports, such as SOC, PCI, and ISO certifications, and it provides contractual and compliance documents that customers can download for auditing and regulatory purposes. It helps customers demonstrate AWS compliance to auditors and stakeholders by supplying official reports and security attestations. Artifact complements in-account monitoring by providing vendor-supplied compliance evidence.
AWS Compliance Center. is incorrect if interpreted as a single download portal, because the canonical service for retrieving AWS compliance reports is AWS Artifact; the Compliance Center conceptually aggregates guidance but Artifact is the operational tool for reports. Customers use Artifact to retrieve formal documentation.
AWS Trusted Advisor. is incorrect because Trusted Advisor provides best-practice recommendations across cost, performance, security, and fault tolerance, but it does not supply vendor compliance reports or certifications for auditor consumption. Trusted Advisor helps optimize resources rather than providing official compliance artifacts.
AWS CloudTrail. is incorrect because CloudTrail records API activity for auditing and investigation but does not provide vendor-issued compliance certification documents. CloudTrail logs are useful as operational evidence but are not the official compliance reports available from Artifact.
AWS Config. is incorrect because Config provides continuous configuration monitoring and compliance checks but does not replace the official compliance reports and certifications that are available through Artifact. Config produces in-account evidence rather than vendor attestation documents.

---

## 38. Sarah works at a healthcare organization that has recently migrated its infrastructure to AWS. In order to ensure compliance with healthcare regulations such as HIPAA and to maintain strong security practices, she is using AWS Security Hub to monitor security standards and best practices. Sarah understands that some responsibilities for securing the infrastructure are shared between the customer and AWS. Which of the following are the customer's responsibilities in this shared responsibility model when using AWS Security Hub?

- Managing and securing the IAM roles and policies used with Security Hub.
- Ensuring the physical security of data centers where AWS hosts its services.
- Patching the underlying infrastructure that AWS Security Hub runs on.
- Configuring Security Hub settings and integrating it with other AWS services.
- Analyzing and acting on Security Hub findings to improve security posture.

**Explanation:**
Managing and securing the IAM roles and policies used with Security Hub. is correct. Customers must control access to Security Hub through IAM, create appropriate roles, and enforce least-privilege to ensure only authorized personnel and systems can view or act on security findings. Proper IAM configuration is critical to prevent unauthorized access to sensitive security data and to enforce operational separation of duties. AWS provides the Security Hub service, but access control within the account is the customer's responsibility.
Ensuring the physical security of data centers where AWS hosts its services. is incorrect because AWS manages physical security of its facilities under the shared responsibility model, including facility access controls, hardware protection, and environmental safeguards. Customers focus on securing their accounts, data, and resources rather than physical infrastructure.
Patching the underlying infrastructure that AWS Security Hub runs on. is incorrect because AWS is responsible for patching and maintaining the underlying infrastructure and service platform of Security Hub; customers are responsible for patching their guest operating systems and applications they deploy. Service maintenance and platform updates are handled by AWS.
Configuring Security Hub settings and integrating it with other AWS services. is correct. Customers define Security Hub standards, enable integrations with services like GuardDuty and Config, and tune findings and insights to match their organizational requirements. Configuration is required to ensure Security Hub aggregates the right signals and supports automated workflows and remediation.
Analyzing and acting on Security Hub findings to improve security posture. is correct. Customers must investigate findings, prioritize risks, and implement remediations or process changes based on Security Hub outputs; the service surfaces issues but does not automatically remediate them without customer-defined actions. Effective security operations require human and automated responses driven by customer processes.

---

## 39. Jane is a newly-appointed data protection officer for a mid-sized marketing firm. She is required to ensure the integrity, confidentiality, and compliance of the company's sensitive data stored in Amazon S3. Given these requirements, Jane is exploring the integration of Amazon Macie in her AWS environment. What are the security benefits Jane can achieve by using Amazon Macie?

- Automated data discovery and classification.
- Integration with AWS CloudTrail for compliance auditing.
- Serverless compute capabilities.
- Management of encryption keys.
- Real-time monitoring and alerts for data anomalies.

**Explanation:**
Automated data discovery and classification. is correct. Macie automatically scans S3 buckets to discover sensitive data such as personal identifiers and classifies objects to provide inventory and risk visibility. This reduces manual effort in locating sensitive data across large S3 footprints and supports compliance mapping. Classification results drive focused remediation and access control improvements.
Integration with AWS CloudTrail for compliance auditing. is correct. Macie leverages CloudTrail and other telemetry to enrich findings and provide audit-relevant context for access and data events, aiding investigations and compliance reporting. Combining CloudTrail event history with Macie’s classification enhances traceability of data access patterns. This integration supports evidence collection for regulatory audits.
Serverless compute capabilities. is incorrect because Macie is a managed security service focused on data discovery and protection rather than a general-purpose serverless compute platform; AWS Lambda provides serverless compute. Macie itself processes data and findings without requiring customers to deploy compute resources.
Management of encryption keys. is incorrect because Macie does not manage encryption keys; AWS Key Management Service (KMS) and related tools handle key creation, rotation, and access control. Macie works alongside encryption and key management solutions but does not perform key lifecycle management.
Real-time monitoring and alerts for data anomalies. is correct. Macie generates findings and alerts on suspicious access patterns and data movement that may indicate data exposure or misuse, enabling security teams to respond promptly. While not a full SIEM, Macie provides near-real-time detection for data-related risks and integrates with Security Hub and downstream workflows for escalation.

---

## 40. John is a security engineer at a company that recently migrated its applications to AWS. He has been tasked with monitoring the network traffic for security anomalies and compliance purposes. John decides to use Amazon VPC Flow Logs for capturing detailed information about the IP traffic going to and from network interfaces in the VPC. Where should John configure and store these logs for easy access and analysis?

- Send the VPC Flow Logs to an Amazon S3 bucket.
- Send the VPC Flow Logs to AWS Direct Connect.
- Send the VPC Flow Logs to Amazon Kinesis Data Streams.
- Send the VPC Flow Logs to AWS Glue.
- Send the VPC Flow Logs to an Amazon CloudWatch Logs log group.

**Explanation:**
Send the VPC Flow Logs to an Amazon S3 bucket. is correct. Delivering VPC Flow Logs to S3 provides durable, cost-effective long-term storage and enables batch analysis, archiving, and integration with analytics tools such as Athena and EMR. S3 storage is suitable when you need to retain logs for compliance, forensic investigations, or large-scale offline analysis. Lifecycle policies can manage retention and transition to cheaper storage tiers.
Send the VPC Flow Logs to AWS Direct Connect. is incorrect because Direct Connect is a networking service for private connectivity, not a logging or storage target. Flow Logs cannot be delivered to Direct Connect; they must be sent to CloudWatch Logs or S3 for storage and analysis.
Send the VPC Flow Logs to Amazon Kinesis Data Streams. is incorrect because VPC Flow Logs do not natively deliver to Kinesis Data Streams; instead, you can stream logs from CloudWatch or S3 into Kinesis for real-time processing after routing them to supported targets. Direct ingestion into Kinesis is not the standard delivery path for Flow Logs.
Send the VPC Flow Logs to AWS Glue. is incorrect because Glue is an ETL service used to catalog and transform data, not a native log delivery destination; logs stored in S3 can be cataloged and processed by Glue for downstream analytics. Glue complements storage and analysis but is not the primary log sink.
Send the VPC Flow Logs to an Amazon CloudWatch Logs log group. is correct. CloudWatch Logs is a native destination for VPC Flow Logs that enables near-real-time monitoring, metric extraction, alerting, and integration with Log Insights for query and visualization. CloudWatch is ideal for operational monitoring and alerting on suspicious patterns, while S3 is preferred for long-term archival and batch analytics.

---

## 41. Jenna is an AWS certified developer working for a company that has multiple AWS accounts for different environments such as development, testing, and production. She needs to securely access resources across these accounts using temporary credentials. Jenna is also concerned about adding an extra layer of security to her root account using multi-factor authentication (MFA). Additionally, Jenna wants to grant temporary access to specific AWS services for third-party collaborators without creating IAM users for each one. Which methods will help Jenna achieve these goals?

- Using cross-account IAM roles to access resources in other AWS accounts.
- Using AWS Directory Service for temporary access credentials.
- Enabling multi-factor authentication (MFA) on the root account.
- Using AWS Security Token Service (STS) to generate temporary security credentials.
- Creating separate IAM users in each AWS account for Jenna.

**Explanation:**
Using cross-account IAM roles to access resources in other AWS accounts. is correct. Cross-account roles allow users from one account to assume roles in another account and receive temporary credentials with scoped permissions, avoiding the need for multiple IAM users and simplifying centralized identity management. Roles enable secure delegation with auditing and session duration controls. They work well with federation and automation to manage access across environments.
Enabling multi-factor authentication (MFA) on the root account. is correct. Enabling MFA on the root account provides an additional layer of protection for the highest-privilege identity and reduces the risk of unauthorized administrative actions if credentials are compromised. Best practice is to avoid routine use of the root account and secure it with MFA, strong credentials, and limited access. MFA complements role-based access by protecting recovery and management flows.
Using AWS Security Token Service (STS) to generate temporary security credentials. is correct. STS issues temporary, limited-privilege credentials for roles and federated identities, reducing the risk associated with long-lived credentials and enabling secure API access for third parties and cross-account workflows. STS integrates with SAML and web identity federation to support single sign-on and short-lived sessions.
Using AWS Directory Service for temporary access credentials. is incorrect because Directory Service connects AWS resources to managed Microsoft AD or AD-compatible directories and supports identity management, but it is not the primary mechanism for generating temporary credentials across accounts; federation and STS are typically used for temporary access. Directory Service can be part of the identity architecture but does not itself replace STS or cross-account role assumptions for temporary credentials.
Creating separate IAM users in each AWS account for Jenna. is incorrect because creating multiple IAM users across accounts increases administrative overhead and credential sprawl; cross-account roles and federation provide scalable, centralized access without duplicating user identities. Temporary credentials and role assumption are preferred for secure, auditable multi-account access.

---

## 42. An e-commerce company maintains its infrastructure on AWS and heavily relies on several AWS services. The company's security team recently noticed unusual login activities while reviewing AWS CloudTrail logs. To enhance security, the team is evaluating various AWS-access management capabilities to implement better authentication methods for granting access to AWS resources. Which actions should the security team take to improve authentication and access security?

- Disable AWS CloudTrail logging.
- Enable Multi-Factor Authentication (MFA) for IAM users.
- Use IAM Identity Center to manage user access to AWS accounts.
- Allow open access to all IAM users for ease of use.
- Set up cross-account IAM roles for access between AWS accounts.

**Explanation:**
Enable Multi-Factor Authentication (MFA) for IAM users. is correct. Requiring MFA for IAM users adds a second authentication factor, drastically reducing the likelihood that compromised passwords alone can be used to access accounts. MFA can be enforced via policies and should be applied to high-privilege accounts as a minimum. Combining MFA with strong password policies and monitoring improves account security posture.
Use IAM Identity Center to manage user access to AWS accounts. is correct. IAM Identity Center centralizes user and permission management, enabling single sign-on, streamlined provisioning, and consistent access policies across multiple AWS accounts. It simplifies lifecycle management and can integrate with corporate identity providers to centralize authentication and authorization workflows. Centralized management reduces configuration drift and improves auditability.
Set up cross-account IAM roles for access between AWS accounts. is correct. Cross-account roles enable secure delegation of access without duplicating user accounts and allow fine-grained control over what principals can assume which roles. Roles combined with proper trust policies and MFA requirements provide secure, auditable cross-account access patterns. This approach reduces credential sprawl and simplifies permissions management across environments.
Disable AWS CloudTrail logging. is incorrect. CloudTrail provides essential auditing and logging of API activity; disabling it would remove visibility into account actions and hinder incident investigation. Instead of disabling CloudTrail, the team should analyze logs, rotate credentials, and take corrective measures like enforcing MFA or adjusting IAM policies. Maintaining robust logging is a fundamental security practice.
Allow open access to all IAM users for ease of use. is incorrect because granting broad, unfettered permissions increases risk and violates least-privilege principles. Access should be restricted to required actions and roles should be used to limit exposure. Open access undermines security controls and complicates incident response and auditing.

---

## 43. John is a newly appointed AWS cloud administrator for an e-commerce company. His first task is to set up a secure and scalable web application environment on AWS. He has been instructed to ensure that the web application can securely communicate over HTTPS and that access to the company's internal services is tightly controlled. John decides to use AWS Certificate Manager (ACM) for managing SSL/TLS certificates and a combination of security groups and network ACLs for access control. Considering AWS best practices for security in such a setup, which of the following steps should John take?

- Configure security groups to only allow HTTPS traffic.
- Use AWS Certificate Manager to manage SSH keys.
- Request an SSL/TLS certificate through AWS Certificate Manager.
- Configure a network ACL to open all inbound ports.
- Attach the ACM certificate to the load balancer.

**Explanation:**
Configure security groups to only allow HTTPS traffic. is correct. Security groups are stateful virtual firewall controls and should be configured to permit only required traffic, such as HTTPS (TCP 443), to minimize attack surface and reduce exposure to unnecessary protocols. Applying least-privilege network rules at the instance or load balancer level enforces secure ingress and egress patterns. Combine security groups with monitoring and logging for detection of anomalous access.
Request an SSL/TLS certificate through AWS Certificate Manager. is correct. ACM issues and renews certificates for use with integrated services like load balancers and CloudFront, streamlining certificate lifecycle management and enabling secure HTTPS communication without manual certificate installation. ACM-managed certificates are free for use with supported AWS services and reduce operational overhead. Requesting and validating the certificate is a standard step to enable encrypted connections.
Attach the ACM certificate to the load balancer. is correct. Attaching the ACM certificate to an Application Load Balancer or CloudFront distribution offloads TLS termination, centralizes certificate management, and secures client connections before traffic reaches backend instances. This pattern simplifies certificate rotation and ensures consistent HTTPS termination. It also allows backend servers to communicate over private networks if desired.
Use AWS Certificate Manager to manage SSH keys. is incorrect because ACM manages SSL/TLS certificates for encrypting network traffic and does not handle SSH key distribution or management; SSH keys for instance access must be managed separately using EC2 key pairs, Systems Manager Session Manager, or other secure mechanisms. Mixing SSH key management into ACM is not supported.
Configure a network ACL to open all inbound ports. is incorrect because opening all inbound ports at the subnet level negates the purpose of layered network controls and greatly increases exposure to attacks. Network ACLs should be used to implement stateless, coarse-grained controls and complement security groups, not to allow unrestricted access. Security best practices recommend restricting both NACLs and security groups to necessary traffic only.

---

## 44. A software development company is planning to implement a new deployment strategy for their web application, which is hosted in the AWS Cloud. The application needs frequent updates, often involving complex deployment procedures. The company is considering whether they should automate their deployment process or continue to perform manual deployments each time an update is required. Which of the following services or cloud concepts should the company implement to facilitate repeatable and efficient deployment processes for their application?

- Amazon EC2 Auto Scaling.
- Amazon S3.
- AWS Elastic Beanstalk.
- AWS CodeDeploy.

**Explanation:**
AWS CodeDeploy. is correct. CodeDeploy automates application deployments to EC2 instances, on-premises servers, Lambda functions, and ECS, enabling consistent, repeatable releases with configurable deployment strategies such as blue/green or canary. Automation reduces human error, speeds release cycles, and provides built-in rollback capabilities if deployments fail. Integrating CodeDeploy with CI/CD pipelines and monitoring improves deployment quality and traceability.
AWS Elastic Beanstalk. is correct in the sense that it simplifies application deployment and management by abstracting infrastructure concerns and supporting automated deployments for supported platforms. Elastic Beanstalk handles provisioning, capacity, load balancing, and health monitoring, which accelerates deployment workflows for standard web applications. It is a higher-level platform solution compared to CodeDeploy and may suit teams that prefer managed platform orchestration.
Amazon EC2 Auto Scaling. is incorrect as the primary deployment automation tool because Auto Scaling manages instance fleet size and health rather than application deployment orchestration. While Auto Scaling supports scaling deployed applications, it does not handle deployment strategies or version management directly. It should be used in combination with deployment tools for complete automation.
Amazon S3. is incorrect as a deployment mechanism by itself; S3 is used for object storage and can host static website assets or act as an artifact store for deployment packages, but it does not orchestrate application deployments or perform rollout strategies. S3 complements deployment pipelines but is not a deployment automation service.

---

## 45. A company has several VPCs across multiple AWS Regions that host different aspects of a multi-tier application. The application requires efficient, secure, and low-latency communication between the VPCs. They want to ensure that network traffic does not traverse the public internet for security and compliance reasons. Which AWS service should they implement to simplify their network architecture and fulfill these requirements?

- AWS Direct Connect.
- AWS Transit Gateway.
- AWS Virtual Private Network (VPN).
- Amazon VPC Peering.

**Explanation:**
AWS Transit Gateway. is correct. Transit Gateway acts as a central hub to interconnect multiple VPCs and on-premises networks with scalable, high-performance routing, reducing the complexity of managing many point-to-point connections and keeping traffic within AWS’s private backbone. It supports inter-region peering and simplifies routing policies for multi-VPC architectures, improving manageability and security. Transit Gateway scales with bandwidth and provides integration with Direct Connect and VPN for hybrid connectivity.
AWS Direct Connect. is incorrect as the sole solution for VPC-to-VPC interconnectivity because Direct Connect provides a private link between on-premises networks and AWS rather than acting as a hub for multiple VPCs; Direct Connect is best used to reduce latency and egress costs for on-premises traffic to AWS. Combined with Transit Gateway, Direct Connect can provide private, consistent connectivity for hybrid architectures.
AWS Virtual Private Network (VPN). is incorrect as the primary multi-VPC solution because VPN provides encrypted tunnels over the public internet for secure site-to-AWS connections but can become complex and harder to scale when connecting many VPCs. VPN is useful for secure remote or backup connectivity but is not the preferred pattern for large-scale VPC interconnection.
Amazon VPC Peering. is incorrect for large, multi-VPC designs because peering creates many point-to-point links that become difficult to manage at scale and does not support transitive routing across peered networks. VPC Peering is suitable for a small number of VPC connections, but Transit Gateway is recommended for scalable hub-and-spoke architectures.

---

## 46. A company is designing a secure and scalable architecture for a multi-tier application in AWS. They need to provide fine-grained access control to various resources while also enabling centralized management of permissions. Which AWS service should the company primarily use to manage identities and access?

- AWS Key Management Service (KMS).
- AWS Identity and Access Management (IAM).
- AWS Security Hub.
- Amazon GuardDuty.

**Explanation:**
AWS Identity and Access Management (IAM). is correct. IAM allows centralized management of users, groups, roles, and policies, enabling fine-grained access control to AWS resources. It provides the ability to enforce least-privilege permissions, implement role-based access, and integrate with MFA to strengthen security. IAM also supports temporary credentials through AWS Security Token Service (STS) for cross-account access and external identity federation, providing flexible and secure access management across complex AWS environments.
AWS Key Management Service (KMS). is incorrect because KMS focuses on creating and managing encryption keys for data protection, not user or role access management. While KMS policies control key usage, they are a subset of IAM’s broader permission and identity control mechanisms. KMS complements IAM but does not replace it for full access governance.
AWS Security Hub. is incorrect because Security Hub aggregates and prioritizes security findings across AWS accounts and services but does not manage identities or permissions directly. Security Hub supports compliance monitoring and threat visibility rather than access control.
Amazon GuardDuty. is incorrect because GuardDuty is a threat detection service that monitors AWS accounts for malicious activity and unauthorized behavior, not an identity or permission management tool. It provides insights and alerts but cannot define or enforce access policies.

---

## 47. A company is deploying multiple applications in AWS and wants to automate security compliance checks across its environment. They require a solution that can continuously monitor configurations, evaluate compliance against company policies, and provide actionable insights for remediation. Which AWS service is best suited for this purpose?

- AWS Config.
- Amazon Macie.
- AWS CloudTrail.
- AWS Shield.

**Explanation:**
AWS Config. is correct. AWS Config provides continuous assessment of resource configurations, allowing organizations to evaluate compliance with internal policies and regulatory standards. Config tracks changes to AWS resources, maintains historical configuration data, and supports automated remediation through integration with AWS Systems Manager or Lambda. It is critical for auditing, risk management, and enforcing governance in dynamic AWS environments. Config can also feed findings into AWS Security Hub for consolidated security insights.
Amazon Macie. is incorrect because Macie specializes in discovering and classifying sensitive data, such as personally identifiable information (PII) in S3, rather than performing continuous configuration compliance monitoring across resources. Macie enhances data security but does not provide general configuration compliance auditing.
AWS CloudTrail. is incorrect because CloudTrail logs API activity for auditing and incident investigation but does not automatically evaluate resource compliance or enforce policies. It provides historical activity data rather than continuous configuration assessments.
AWS Shield. is incorrect because Shield focuses on DDoS protection for AWS resources and does not provide compliance monitoring or configuration auditing capabilities. Shield enhances availability and security at the network level but does not assess internal resource configuration.

---

## 48. A healthcare organization is moving patient records to AWS and must ensure that sensitive data is encrypted both at rest and in transit. Which combination of AWS services and practices best satisfies these requirements?

- Use Amazon S3 server-side encryption (SSE) for data at rest and enable HTTPS for data in transit.
- Use AWS Lambda functions without encryption for real-time processing and rely on VPC security groups.
- Store data in Amazon S3 without encryption and use SSH for secure file transfers.
- Encrypt data manually before storing in S3 and transfer over HTTP.

**Explanation:**
Use Amazon S3 server-side encryption (SSE) for data at rest and enable HTTPS for data in transit. is correct. Server-side encryption protects data stored in S3 by encrypting it with AWS-managed or customer-managed keys, while HTTPS ensures that data transmitted over networks is encrypted, maintaining confidentiality and integrity. This combination adheres to regulatory requirements for protecting sensitive healthcare information and reduces operational overhead by automating encryption processes.
Use AWS Lambda functions without encryption for real-time processing and rely on VPC security groups. is incorrect because Lambda requires proper encryption for sensitive data; VPC security groups protect network boundaries but do not encrypt data at rest or in transit. Omitting encryption violates compliance standards.
Store data in Amazon S3 without encryption and use SSH for secure file transfers. is incorrect because encryption at rest is essential for regulatory compliance; SSH only secures transfer, leaving stored data vulnerable. Data security requires both at-rest and in-transit protections.
Encrypt data manually before storing in S3 and transfer over HTTP. is incorrect because HTTP does not provide secure transmission, and manual encryption is error-prone, leading to inconsistent protection and operational overhead. Using managed encryption and HTTPS ensures consistent security practices.

---

## 49. An organization wants to implement a security practice that monitors API activity, detects unauthorized access attempts, and provides a historical record of all actions performed on AWS resources. Which AWS service should they use?

- AWS CloudTrail.
- AWS Config.
- Amazon GuardDuty.
- AWS WAF.

**Explanation:**
AWS CloudTrail. is correct. CloudTrail records all API activity in AWS accounts, providing a comprehensive history of user and service actions. This enables auditing, forensic investigations, and compliance reporting. CloudTrail logs can be stored in S3, analyzed with Athena or CloudWatch Logs, and integrated with security services to detect unauthorized actions and respond to incidents effectively.
AWS Config. is incorrect because Config tracks resource configurations and compliance but does not record API activity. It is focused on resource state auditing rather than action auditing.
Amazon GuardDuty. is incorrect because GuardDuty analyzes logs to detect threats but does not provide a complete historical record of all API activity; it provides alerts based on suspicious behavior. GuardDuty complements CloudTrail but does not replace it.
AWS WAF. is incorrect because WAF protects web applications from common web exploits and attacks but does not record or audit API calls across AWS services. WAF is a layer 7 security control, not a logging or auditing service.

---

## 50. A company wants to ensure that all their IAM users have strong passwords and rotate them regularly. Which AWS feature should they implement to enforce these security requirements?

- IAM password policy.
- AWS Secrets Manager.
- AWS CloudTrail.
- Amazon Cognito.

**Explanation:**
IAM password policy. is correct. IAM password policies allow administrators to enforce password length, complexity, expiration, and reuse prevention for IAM users, ensuring strong authentication practices. Combined with MFA, these policies help reduce the likelihood of account compromise and support compliance requirements. Password policies apply directly to AWS credentials and are essential for maintaining secure account access.
AWS Secrets Manager. is incorrect because Secrets Manager is designed to store, retrieve, and rotate secrets such as database credentials or API keys, but it does not enforce password complexity or rotation policies for IAM users directly. It complements IAM password management but is not the primary enforcement tool.
AWS CloudTrail. is incorrect because CloudTrail logs user activity and API calls but does not enforce password policies or control credential strength. It provides auditing capabilities rather than preventive enforcement.
Amazon Cognito. is incorrect because Cognito manages user authentication for applications and federated identities but does not directly enforce IAM password policies for AWS console or API access. Cognito is application-focused, whereas IAM password policies govern AWS account access.

---

## 51. An enterprise is using AWS Organizations to manage multiple AWS accounts. They want to enforce service control policies (SCPs) to restrict access to certain AWS services across all accounts in the organization. Which of the following statements about SCPs is true?

- SCPs define the maximum permissions an account can have, even if IAM policies grant broader access.
- SCPs grant additional permissions beyond IAM policies.
- SCPs replace IAM policies entirely.
- SCPs are only used for billing restrictions and do not affect resource access.

**Explanation:**
SCPs define the maximum permissions an account can have, even if IAM policies grant broader access. is correct. SCPs act as a boundary that limits the effective permissions of accounts within an organization. Even if an IAM policy allows a particular action, it will be denied if the SCP explicitly restricts it. This enables centralized governance and prevents unauthorized actions across accounts.
SCPs grant additional permissions beyond IAM policies. is incorrect because SCPs cannot grant permissions; they only restrict actions. Permissions must still be explicitly granted by IAM policies within accounts.
SCPs replace IAM policies entirely. is incorrect because IAM policies are still needed to assign actual permissions. SCPs only limit what those policies can do.
SCPs are only used for billing restrictions and do not affect resource access. is incorrect because SCPs control access to services and actions, not just billing; they enforce security and governance.

---

## 52. A company wants to protect its web applications from distributed denial-of-service (DDoS) attacks and other volumetric attacks. Which AWS service should they use as the primary layer of protection?

- AWS Shield.
- AWS WAF.
- AWS Config.
- Amazon GuardDuty.

**Explanation:**
AWS Shield. is correct. AWS Shield provides automated protection against DDoS attacks at both the network and application layers. It includes advanced mitigation features and integrates with services like CloudFront and ALB to maintain application availability. Shield Advanced also offers cost protection against DDoS-related scaling charges and supports proactive attack response.
AWS WAF. is incorrect because WAF filters HTTP/S requests but does not mitigate volumetric DDoS attacks. It is focused on web application security rather than network-layer protection.
AWS Config. is incorrect because Config monitors resource configurations and compliance but does not provide real-time attack mitigation.
Amazon GuardDuty. is incorrect because GuardDuty detects threats and anomalies but does not actively block attacks or prevent DDoS events.

---

## 53. A company needs to manage and rotate secrets such as database credentials and API keys for their AWS applications securely. Which AWS service should they use to centralize secrets management?

- AWS Secrets Manager.
- AWS CloudTrail.
- AWS Config.
- Amazon Macie.

**Explanation:**
AWS Secrets Manager. is correct. Secrets Manager securely stores credentials and supports automatic rotation, eliminating hard-coded secrets in applications. It integrates with AWS services for seamless access management and enforces strict access policies using IAM. This approach reduces operational risk and helps maintain security compliance.
AWS CloudTrail. is incorrect because CloudTrail only logs API activity; it does not manage or rotate secrets.
AWS Config. is incorrect because Config monitors resource compliance but does not store or manage credentials.
Amazon Macie. is incorrect because Macie identifies and classifies sensitive data but does not handle secret management or rotation.

---

## 54. A financial services company wants to analyze access patterns to sensitive data stored in S3 buckets to identify potential data leaks. Which AWS service is most suitable for this task?

- Amazon Macie.
- AWS WAF.
- AWS Shield.
- AWS Config.

**Explanation:**
Amazon Macie. is correct. Macie uses machine learning to detect sensitive data in S3 and analyze access patterns to identify unusual or potentially unauthorized access. It generates alerts for potential data leaks and supports compliance reporting. Macie can integrate with Security Hub to centralize security findings.
AWS WAF. is incorrect because WAF protects web applications from exploits but does not analyze S3 data or access patterns.
AWS Shield. is incorrect because Shield mitigates DDoS attacks and does not inspect data access or leaks.
AWS Config. is incorrect because Config audits resource configurations but does not analyze data access patterns or detect sensitive information usage.

---

## 55. A company wants to ensure that only approved devices and locations can access their AWS accounts. They want to add conditional access restrictions based on the device’s compliance status and IP address. Which AWS feature supports this capability?

- IAM policy conditions.
- AWS CloudTrail.
- Amazon GuardDuty.
- AWS Config.

**Explanation:**
IAM policy conditions. is correct. IAM policies can include condition keys that restrict access based on IP address, device compliance, MFA status, or request time. This enables context-aware access control and enforces security policies dynamically. Conditional policies help reduce risk by ensuring only approved devices and locations can access resources.
AWS CloudTrail. is incorrect because CloudTrail only logs activity and does not enforce access restrictions.
Amazon GuardDuty. is incorrect because GuardDuty detects threats but does not prevent access or enforce conditional rules.
AWS Config. is incorrect because Config monitors resource compliance but cannot enforce authentication or access conditions.

---

## 56. A company wants to centrally manage access to multiple AWS accounts and applications for their employees. They want single sign-on (SSO) capabilities with integration to their existing corporate directory. Which AWS service should they use?

- AWS Identity Center (formerly AWS Single Sign-On).
- IAM users in each AWS account.
- AWS Security Token Service (STS).
- Amazon Cognito.

**Explanation:**
AWS Identity Center (formerly AWS Single Sign-On). is correct. Identity Center provides centralized access management, integrates with corporate directories, and allows single sign-on to multiple accounts and applications. It simplifies permission assignments and user lifecycle management, improving security and operational efficiency.
IAM users in each AWS account. is incorrect because managing separate IAM users per account is complex and does not provide SSO.
AWS Security Token Service (STS). is incorrect because STS issues temporary credentials but does not provide centralized SSO or directory integration.
Amazon Cognito. is incorrect because Cognito handles application-level authentication and federated identities but does not manage multi-account AWS access.

---

## 57. A company wants to automate compliance checks and enforce security policies across AWS accounts in an organization. They want a service that continuously evaluates configurations against pre-defined standards and can trigger remediation actions automatically. Which AWS service fits this requirement?

- AWS Config.
- AWS Shield.
- Amazon GuardDuty.
- AWS WAF.

**Explanation:**
AWS Config. is correct. Config continuously evaluates resource configurations against rules, detects noncompliance, and supports automated remediation through Systems Manager or Lambda. It provides historical tracking and centralized auditing across accounts, ensuring governance at scale.
AWS Shield. is incorrect because Shield mitigates DDoS attacks but does not monitor configurations or enforce compliance policies.
Amazon GuardDuty. is incorrect because GuardDuty focuses on threat detection, not configuration compliance or automated remediation.
AWS WAF. is incorrect because WAF protects web applications from malicious traffic but does not evaluate or enforce resource configuration compliance.

---

## 58. A company wants to ensure that any API activity in their AWS environment is recorded and can be audited later for compliance purposes. Which AWS service should they use?

- AWS CloudTrail.
- AWS Config.
- AWS GuardDuty.
- Amazon Macie.

**Explanation:**
AWS CloudTrail. is correct. CloudTrail logs API activity across AWS accounts, providing a comprehensive audit trail for security and compliance purposes. It enables forensic investigations, operational auditing, and integration with monitoring tools for alerting. CloudTrail ensures accountability by capturing all user and service actions over time.
AWS Config. is incorrect because Config tracks resource configurations, not detailed API activity.
AWS GuardDuty. is incorrect because GuardDuty detects threats but does not provide a full historical record of API actions.
Amazon Macie. is incorrect because Macie analyzes sensitive data in S3 and does not audit API activity.

---

## 59. A company wants to implement strong access control for its AWS accounts by requiring users to provide multiple forms of verification when signing in. Which AWS security feature should they enable?

- Multi-Factor Authentication (MFA).
- IAM roles.
- AWS Config.
- AWS CloudTrail.

**Explanation:**
Multi-Factor Authentication (MFA). is correct. MFA requires users to provide a second authentication factor, typically a time-based token or hardware key, in addition to their password. This enhances security by reducing the risk of account compromise, even if credentials are exposed. MFA is recommended for all high-privilege accounts, including the root account.
IAM roles. is incorrect because roles control permissions and access scope but do not enforce multi-factor verification.
AWS Config. is incorrect because Config monitors resource compliance but does not provide authentication mechanisms.
AWS CloudTrail. is incorrect because CloudTrail logs activity but does not enforce access control or authentication.

---

## 60. A company wants to enforce encryption for all objects stored in Amazon S3 and ensure that only approved encryption methods are used. Which AWS service or feature allows them to achieve this?

- S3 bucket policies with encryption conditions.
- AWS WAF.
- AWS Shield.
- AWS CloudTrail.

**Explanation:**
S3 bucket policies with encryption conditions. is correct. Bucket policies can enforce server-side encryption with SSE-S3 or SSE-KMS for all objects, ensuring compliance with security standards. This approach prevents accidental unencrypted uploads and centralizes enforcement. Policies can specify allowed encryption methods, maintaining control over how data is protected.
AWS WAF. is incorrect because WAF protects web applications but does not enforce S3 encryption.
AWS Shield. is incorrect because Shield mitigates DDoS attacks and does not manage object-level encryption.
AWS CloudTrail. is incorrect because CloudTrail logs API activity but does not prevent unencrypted object uploads.

---

## 61. A company wants to detect threats and anomalies in their AWS accounts and workloads by analyzing network traffic, account behavior, and log data. Which AWS service provides this capability?

- Amazon GuardDuty.
- AWS Shield.
- AWS WAF.
- AWS Config.

**Explanation:**
Amazon GuardDuty. is correct. GuardDuty continuously analyzes account activity, VPC flow logs, and DNS logs to detect potential security threats and anomalies. It provides actionable alerts for suspicious behavior, unauthorized access, or malware activity. GuardDuty helps security teams respond quickly to potential breaches and supports compliance monitoring.
AWS Shield. is incorrect because Shield focuses on DDoS protection, not threat detection across accounts.
AWS WAF. is incorrect because WAF filters malicious web requests but does not provide comprehensive threat detection.
AWS Config. is incorrect because Config monitors resource compliance rather than detecting anomalies or threats in activity data.

---

## 62. A company wants to manage access to AWS resources for external contractors without creating permanent IAM users. Which AWS feature should they use?

- IAM roles with external identity federation.
- AWS CloudTrail.
- Amazon Macie.
- AWS Config.

**Explanation:**
IAM roles with external identity federation. is correct. IAM roles allow temporary access to AWS resources and can be assumed by users authenticated via external identity providers like SAML or OIDC. This approach avoids creating permanent IAM users, reduces administrative overhead, and maintains security by providing time-limited, role-based access.
AWS CloudTrail. is incorrect because CloudTrail logs activity but does not manage access.
Amazon Macie. is incorrect because Macie discovers sensitive data but does not grant temporary access.
AWS Config. is incorrect because Config monitors resource compliance but does not provide identity or access management.

---

## 63. A company wants to ensure that all IAM users have strong passwords and that passwords are rotated regularly. Which AWS feature allows enforcement of these requirements?

- IAM password policy.
- AWS Secrets Manager.
- AWS CloudTrail.
- Amazon Cognito.

**Explanation:**
IAM password policy. is correct. Password policies enforce length, complexity, expiration, and reuse restrictions for IAM users. They help maintain strong authentication practices and reduce the risk of account compromise. Policies can also require MFA, further strengthening security for AWS accounts.
AWS Secrets Manager. is incorrect because Secrets Manager manages application credentials, not IAM user passwords.
AWS CloudTrail. is incorrect because CloudTrail logs activity but does not enforce password policies.
Amazon Cognito. is incorrect because Cognito manages application authentication and user pools, not IAM account passwords.

---

## 64. A company wants to implement a security practice that grants users only the permissions they need to perform their job functions. Which principle is being applied?

- Principle of least privilege.
- Principle of shared responsibility.
- Principle of defense in depth.
- Principle of fail-safe defaults.

**Explanation:**
Principle of least privilege. is correct. This principle restricts user permissions to the minimum required for tasks, reducing the risk of accidental or intentional misuse. It limits attack surfaces and enhances overall security posture. Implementing least privilege involves careful assignment of roles, policies, and temporary credentials.
Principle of shared responsibility. is incorrect because it describes the division of security duties between AWS and the customer, not permission minimization.
Principle of defense in depth. is incorrect because it refers to using multiple security layers, not limiting permissions.
Principle of fail-safe defaults. is incorrect because it focuses on default-deny configurations rather than actively restricting permissions based on necessity.

---

## 65. A company wants to track and record all API calls made to their AWS environment for auditing and operational purposes. Which service provides this functionality?

- AWS CloudTrail.
- AWS Config.
- AWS GuardDuty.
- Amazon Macie.

**Explanation:**
AWS CloudTrail. is correct. CloudTrail records API activity across AWS accounts, providing an audit trail of actions performed by users, roles, or services. It supports compliance monitoring, forensic investigations, and operational troubleshooting. Logs can be stored securely in S3 and analyzed for security or operational insights.
AWS Config. is incorrect because Config tracks resource configurations, not API call history.
AWS GuardDuty. is incorrect because GuardDuty detects threats but does not maintain comprehensive API logs.
Amazon Macie. is incorrect because Macie analyzes sensitive data access but does not log all API activity.

---
